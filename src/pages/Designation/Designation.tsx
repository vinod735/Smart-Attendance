import {useQuery,useMutation} from '@apollo/client'
import React, {useEffect, useState} from 'react'
import DesignationList from '../../components/Designation/DesignationList'
import {QUERY_DESIGNATION} from './graphql'
import {DELETE_DESIGNATION} from './graphql'
import DataLoadSpinner from "../../components/reusable/Spinner/DataLoadSpinner";
import {toast} from "react-toastify";
import { notificationTimeOut } from '../../utils/reactTostifyNotificationTime'

interface IDesignationProps {

} 

const Designation: React.FC<IDesignationProps> = () => {
  // const [tableData, setTableData] = useState<any>([])
  const {data, loading, error} = useQuery(QUERY_DESIGNATION,
    {
      variables: {
        first: 100,
      }
    })

    const [deleteDesignation] = useMutation(DELETE_DESIGNATION, {
      refetchQueries: [{
        query: QUERY_DESIGNATION, variables: {
          first: 100
        }
      }]
    });
  
  
    const handleDeleteDesignation = async (id: string) => {

      const response = await deleteDesignation({
        variables: {
          objectID: id
        }
      })
      if (response.data.deleteDesignation.success) {
        toast.success(`Item deleted successfully`,{autoClose:notificationTimeOut})
      } else {
        toast.error("Something went wrong",{autoClose:notificationTimeOut})
      }
    }
  

  return (
    <>
      {data ? <DesignationList data={data?.designations?.edges} 
      loading={loading}
      handleDeleteDesignation={handleDeleteDesignation}
      /> : <DataLoadSpinner/>}
    </>
  )
}

export default Designation;
