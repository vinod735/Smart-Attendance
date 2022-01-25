import { useMutation, useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import EditCompanyComponent from '../../components/Company/EditCompany'
import { GET_COMPANY, QUERY_COMPANY, UPDATE_COMPANY } from './queries';

interface IEditCompanyProps {

}

const EditCompany: React.FC<IEditCompanyProps> = (props) => {
  const params = useParams()
  const navigate = useNavigate()

  const [selectedCompanyInitialValues, setSelectedCompanyInitialValues] = useState<any>()

  const { data: selectedCompanyData } = useQuery(GET_COMPANY, {
    variables: {
      id: params.id
    }
  })

  const [updateCompany] = useMutation(UPDATE_COMPANY, {
    refetchQueries: [{
      query: QUERY_COMPANY, variables: {
        first: 100,
        level: 0
      }
    }]
  })

  useEffect(() => {
    if (selectedCompanyData) {
      const initialValuesFormat = {
        company: selectedCompanyData?.company?.title,
        address: selectedCompanyData?.company?.address,
        country: selectedCompanyData?.company?.country,
        postalCode: selectedCompanyData?.company?.postalCode,
        city: selectedCompanyData?.company?.city,
      }
      setSelectedCompanyInitialValues(initialValuesFormat)
    }
  }, [selectedCompanyData])

  const handleEditCompany = async (values: any) => {
    const response = await updateCompany({
      variables: {
        id: selectedCompanyData?.company?.pk,
        title: values.company,
        address: values.address,
        country: values.country,
        city: values.city,
        postalCode: values.postalCode
      }
    })
    if (response?.data?.updateCompany?.success) {
      navigate("/company")
      toast.success("Company Edited Successfully")
    } else {
      console.log(response.data.updateCompany?.errors)
      toast.error("Something went wrong")
    }
  }

  return (
    <>
      <EditCompanyComponent
        handleEditCompany={handleEditCompany}
        selectedCompanyInitialValues={selectedCompanyInitialValues}
      />
    </>
  )
}

export default EditCompany
