import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { toast } from 'react-toastify'
import EditDesignationComponent from '../../components/Designation/EditDesignation'
import { GET_DESIGNATION, QUERY_DESIGNATION, UPDATE_DESIGNATION } from './graphql'

const EditDesignation: React.FC<any> = (props) => {
  const params = useParams()
  const navigate = useNavigate()

  const [selectedDesignationInitialValues, setSelectedDesignationInitialValues] = useState<any>()

  const [updateDesignation] = useMutation(UPDATE_DESIGNATION,{
    refetchQueries:[{
      query: QUERY_DESIGNATION, variables:{
        first : 100
      }
    }]
  })

  const { data: selectedDesignationData } = useQuery(GET_DESIGNATION, {
    variables: {
      id: params.id
    }
  })

  useEffect(() => {
    if (selectedDesignationData) {
      const initialValuesFormat = {
        designationName: selectedDesignationData.designation.title,
        description: selectedDesignationData.designation.note,
      }
      setSelectedDesignationInitialValues(initialValuesFormat)
    }
  }, [selectedDesignationData])

  const handleEditDesignation = async (values: any) => {
    const response = await updateDesignation({
      variables: {
        id: selectedDesignationData?.designation?.pk,
        title: values?.designationName,
        note: values?.description
      }
    })
    if (response.data?.updateDesignation?.success) {
      toast.success("Department Edited Successfully")
      navigate("/designation");
    }else{
      toast.error("Something went wrong")
    }
  }
  return (
    <div>
      <EditDesignationComponent
        handleEditDesignation={handleEditDesignation}
        selectedDesignationInitialValues={selectedDesignationInitialValues}
      />
    </div>
  )
}

export default EditDesignation
