import {useQuery, useMutation} from '@apollo/client';
import React, {useState} from 'react'
import CompanyList from '../../components/Company/CompanyList'
import {QUERY_COMPANY} from './queries';
import {DELETE_COMPANY} from "./queries"
import DataLoadSpinner from "../../components/reusable/Spinner/DataLoadSpinner";
import {toast} from "react-toastify";
import {notificationTimeOut} from '../../utils/reactTostifyNotificationTime';
import {displayErrorMessage, displaySuccessMessage} from "../../utils/displayMessage";


const Company = () => {


  const [deleteCompany] = useMutation(DELETE_COMPANY, {
    refetchQueries: [{
      query: QUERY_COMPANY, variables: {
        first: 100,
        level: 0
      }
    }]
  });
  const {data, loading, error} = useQuery<any>(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 0
      }
    })

  const handleDeleteCompany = async (id: string) => {
    const response = await deleteCompany({
      variables: {
        objectID: id
      }
    })
    if (response.data.deleteCompany.success) {
      displaySuccessMessage(response?.data?.deleteCompany?.message)
    } else {
      displayErrorMessage(response?.data.deleteCompany?.errors?.nonFieldErrors)
    }
  }
  return (
    <>
      {data ? <CompanyList
        data={data?.companies?.edges}
        loading={loading}
        handleDeleteCompany={handleDeleteCompany}
      /> : <DataLoadSpinner/>}
    </>
  )
}

export default Company

