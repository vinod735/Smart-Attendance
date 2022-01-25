import {useMutation, useQuery} from '@apollo/client';
import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import AddDepartmentComponent from '../../components/Department/AddDepartment'
import {CREATE_DEPARTMENT, QUERY_COMPANY} from '../Company/queries';
import FullPageMessage from "../../components/reusable/FullPageMessage";

const AddDepartment: React.FC<any> = (props) => {
  let navigate = useNavigate()
  const [company, setCompany] = useState<any>(null)

  const {data: companyData, loading: companyLoading} = useQuery(QUERY_COMPANY, {
    variables: {
      first: 100,
      level: 0
    }
  })

  useEffect(() => {
    let companies: any = []
    if (companyData) {
      companyData?.companies?.edges?.map((item: any, index: number) => (
        companies.push({
          label: item?.node?.title,
          value: item?.node?.pk
        })
      ))
      setCompany(companies)
    }
  }, [companyData])

  const [createDepartment, {
    loading: isLoading,
    reset
  }] = useMutation(CREATE_DEPARTMENT, {
    refetchQueries: [{
      query: QUERY_COMPANY, variables: {
        first: 100,
        level: 1
      }
    }]
  })

  const handleAddDepartment = async (values: any, props: any) => {
    const response = await createDepartment({
      variables: {
        companyId: values?.company.toString(),
        departmentName: values?.departmentName,
        address: values?.address,
      }
    })

    if (response.data.createCompany.success) {
      toast.success("Department Added Successfully")
      navigate("/department");
      props.resetForm()
    } else {
      toast.error(response.data.createDepartment?.errors?.company?.[0].message)
    }
  }
  return (
    <>
      <AddDepartmentComponent
        company={company}
        handleAddDepartment={handleAddDepartment}
      />
    </>
  )
}

export default AddDepartment
