import {useQuery} from '@apollo/client'
import React, {useEffect, useState} from 'react'
import EmployeeList from '../../components/Employee/EmployeeList'
import {QUERY_EMPLOYEE} from './graphql'
import DataLoadSpinner from "../../components/reusable/Spinner/DataLoadSpinner";
import {QUERY_COMPANY} from "../Company/queries";
import FullPageMessage from "../../components/reusable/FullPageMessage";

const Employee: React.FC<any> = (props) => {
  // const [deleteDesignation] = useMutation(DELETE_DESIGNATION)
  const {data, loading, error} = useQuery(QUERY_EMPLOYEE,
    {
      variables: {
        
        first: 100
      }
    })

  const {data: shiftData} = useQuery(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 2,
      }
    })


  return (
    <>
      {data ?
        <>
          <FullPageMessage
            data={shiftData?.companies?.edges}
            message={"Please add shift first"}
            link={'/shift/create'}
          >
            <EmployeeList data={data?.employees?.edges} loading={loading}/>
          </FullPageMessage>
        </>
        : <DataLoadSpinner/>}
    </>
  )
}

export default Employee
