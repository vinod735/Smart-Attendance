import React from 'react'
import {useQuery, useMutation} from '@apollo/client'
import {QUERY_COMPANY} from '../Company/queries'
import DepartmentList from '../../components/Department/DepartmentList'
import DataLoadSpinner from "../../components/reusable/Spinner/DataLoadSpinner";
import {DELETE_COMPANY} from '../Company/queries'
import {toast} from "react-toastify";
import {notificationTimeOut} from '../../utils/reactTostifyNotificationTime';
import FullPageMessage from "../../components/reusable/FullPageMessage";


const Department: React.FC<any> = (props) => {
  const {data: companyData, loading: companyLoading} = useQuery(QUERY_COMPANY, {
    variables: {
      first: 100,
      level: 0
    }
  })
  const {data, loading, error} = useQuery(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 1
      }
    })
  const [deleteDepartment] = useMutation(DELETE_COMPANY, {
    refetchQueries: [{
      query: QUERY_COMPANY, variables: {
        first: 100,
        level: 1
      }
    }]
  });


  const handleDeleteDepartment = async (id: string) => {
    const response = await deleteDepartment({
      variables: {
        objectID: id
      }
    })

    if (response?.data?.deleteCompany?.success) {
      toast.success("Item deleted successfully", {
        autoClose: notificationTimeOut
      })
    } else {
      toast.error("Something went wrong", {
        autoClose: notificationTimeOut
      })
    }
  }

  return (
    <>
      {data ?
        <>
          <FullPageMessage
            data={companyData?.companies?.edges}
            message={"Please add company first"}
            link={'/company/create'}
          >
            <DepartmentList
              data={data?.companies?.edges}
              loading={loading}
              handleDeleteDepartment={handleDeleteDepartment}
            />
          </FullPageMessage>
        </>
        : <DataLoadSpinner/>}
    </>
  )
};

export default Department;
