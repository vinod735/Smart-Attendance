import {useMutation} from '@apollo/client'
import React from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import AddDesignationComponent from '../../components/Designation/AddDesignation'
import {CREATE_DESIGNATION, QUERY_DESIGNATION} from './graphql'

const AddDesignation: React.FC<any> = (props) => {
  let navigate = useNavigate()
  const [createDesignation] = useMutation(CREATE_DESIGNATION,{
    refetchQueries:[{
      query: QUERY_DESIGNATION, variables:{
        first : 100
      }
    }]
  })

  const handleAddDesignation = async (values: any, props:any) => {
    const response = await createDesignation({
      variables: {
        title: values.designationName,
        note: values.description
      }
    })
    if (response?.data?.createDesignation?.success) {
      toast.success("Designation Added Successfully")
      navigate("/designation");
      props.resetForm()
    } else {
      toast.error(response.data.createDesignation?.errors?.company?.[0].message)
    }
  }

  return (
    <>
      <AddDesignationComponent handleAddDesignation={handleAddDesignation}/>
    </>
  )
}

export default AddDesignation
