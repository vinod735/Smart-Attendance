import {useQuery, useMutation} from '@apollo/client';
import React from 'react'
import ShiftList from '../../components/Shift/ShiftList'
import {QUERY_COMPANY, DELETE_COMPANY} from '../Company/queries';
import DataLoadSpinner from "../../components/reusable/Spinner/DataLoadSpinner";
import {toast} from "react-toastify";
import {notificationTimeOut} from '../../utils/reactTostifyNotificationTime';
import FullPageMessage from "../../components/reusable/FullPageMessage";

const Shift: React.FC<any> = (props) => {

  const {data, loading} = useQuery(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 2
      }
    })

  const {data: departmentData} = useQuery(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 1,
      }
    })

  const [deleteShift] = useMutation(DELETE_COMPANY, {
    refetchQueries: [{
      query: QUERY_COMPANY, variables: {
        first: 100,
        level: 2
      }
    }]
  });


  const handleDeleteShift = async (id: string) => {
    const response = await deleteShift({
      variables: {
        objectID: id
      }
    })
    if (response?.data?.deleteCompany?.success) {
      toast.success(`Item deleted successfully`, {autoClose: notificationTimeOut})
    } else {
      toast.error("Something went wrong", {autoClose: notificationTimeOut})
    }
  }


  return (
    <>
      {data ? <>
          <FullPageMessage
            data={departmentData?.companies?.edges}
            message={"Please add department first"}
            link={'/department/create'}
          >
            <ShiftList
              data={data?.companies?.edges}
              loading={loading}
              handleDeleteShift={handleDeleteShift}
            />
          </FullPageMessage>
        </>
        : <DataLoadSpinner/>}
    </>
  )
}

export default Shift
