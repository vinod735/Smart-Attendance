import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import EditDepartmentComponent from '../../components/Department/EditDepartment'
import { GET_DEPARTMENT, QUERY_COMPANY, UPDATE_DEPARTMENT } from '../Company/queries'

const EditDepartment: React.FC<any> = (props) => {
  const params = useParams()
  const navigate = useNavigate()

  const [selectedDepartmentInitialValues, setSelectedDepartmentInitialValues] = useState<any>()

  const { data: selectedDepartmentData } = useQuery(GET_DEPARTMENT, {
    variables: {
      id: params.id
    }
  })

  const [updateDepartment] = useMutation(UPDATE_DEPARTMENT, {
    refetchQueries: [{
      query: QUERY_COMPANY, variables: {
        first: 100,
        level: 1
      }
    }]
  }
  )

  useEffect(() => {
    if (selectedDepartmentData) {
      const initialValuesFormat = {
        company: selectedDepartmentData.company.parent.title,
        departmentName: selectedDepartmentData.company.title,
        address: selectedDepartmentData.company.address,
        // HOD:selectedDepartmentData.hod, 
      }
      setSelectedDepartmentInitialValues(initialValuesFormat)
    }
  }, [selectedDepartmentData])

  const handleEditDepartment = async (values: any) => {
    console.log(values)
    const response = await updateDepartment({
      variables: {
        id: selectedDepartmentData?.company?.pk,
        parent: selectedDepartmentData?.company?.parent?.pk,
        title: values.departmentName,
        address: values.address
      }
    })

    if (response?.data?.updateCompany?.success) {
      navigate("/department")
      toast.success("Department Edited Successfully")
    } else {
      toast.error(response?.data?.updateCompany?.errors)
    }
  }
  return (
    <div>
      <EditDepartmentComponent
        handleEditDepartment={handleEditDepartment}
        selectedDepartmentInitialValues={selectedDepartmentInitialValues}
      />
    </div>
  )
}

export default EditDepartment
