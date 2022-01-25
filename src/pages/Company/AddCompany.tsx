import { useMutation } from '@apollo/client';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import AddCompanyComponent from '../../components/Company/AddCompany'
import { CREATE_COMPANY, QUERY_COMPANY } from './queries';

interface IAddCompanyProps {
}

const departmentInitialValue = {}

const AddDepartment: React.FC<IAddCompanyProps> = (props) => {
  let navigate = useNavigate()

  const [createCompany, {
    loading: IsLoading,
    reset
  }] = useMutation(CREATE_COMPANY, {
    refetchQueries: [{
      query: QUERY_COMPANY, variables: {
        first: 100,
        level: 0
      }
    }]
  })

  const handleAddCompany = async (values: any, props: any) => {
    const response = await createCompany({
      variables: {
        title: values.company,
        country: values.country,
        city: values.city,
        address: values.address,
        postalCode: values.postalCode
      }
    })
    if (response.data.createCompany.success) {
      toast.success("Company Added Successfully")
      navigate("/company");
      props.resetForm()
    } else {
      toast.error(response.data.createCompany?.errors?.company?.[0].message)
    }
  }
  return (
    <>
      <AddCompanyComponent handleAddCompany={handleAddCompany} />
    </>
  )
}

export default AddDepartment
