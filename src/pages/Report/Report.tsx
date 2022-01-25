import React, {useEffect, useState} from 'react';
import Report from "../../components/Report/Report";
import {useMutation, useQuery} from "@apollo/client";
import {QUERY_COMPANY} from "../Company/queries";
import {CREATE_SETTINGS, QUERY_SETTINGS} from "../Settings/graphql";
import {FILTER_ATTENDANCE} from "./graphql";
import DataLoadSpinner from "../../components/reusable/Spinner/DataLoadSpinner";

const ReportPage = () => {
  const [currentCompanyID, setCurrentCompanyID] = useState<string>("")
  const [currentDepartmentID, setCurrentDepartmentID] = useState<string>("")
  const [companyList, setCompanyList] = useState<any>()
  const [shiftList, setShiftList] = useState<any>()
  const [departmentList, setDepartmentList] = useState<any>()
  const [attendanceData, setAttendanceData] = useState<any>()
  const [isTodayAttendance, setIsTodayAttendance] = useState<boolean>(true)

  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date>(new Date())


  const {data: companyData} = useQuery(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 0
      }
    })

  useEffect(() => {
    let companies: any = []
    if (companyData) {
      companyData?.companies?.edges?.map((item: any) => (
        companies.push({
          label: item?.node?.title,
          value: item?.node?.id
        })
      ))
      setCompanyList(companies)
    }
  }, [companyData])


  const {data: departmentData} = useQuery(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 1,
        parent: currentCompanyID?.toString()
      }
    })
  useEffect(() => {
    setDepartmentList(null)
    let departments: any = []
    if (departmentData) {
      departmentData?.companies?.edges?.map((item: any) => (
        departments.push({
          label: item?.node?.title,
          value: item?.node?.id
        })
      ))
      setDepartmentList(departments)
    }
  }, [departmentData, currentCompanyID])

  const {data: shiftData} = useQuery(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 2,
        parent: currentDepartmentID?.toString()
      }
    })

  useEffect(() => {
    setShiftList(null)
    let shifts: any = []
    if (shiftData) {
      shiftData?.companies?.edges?.map((item: any) => (
        shifts.push({
          label: item?.node?.title,
          value: item?.node?.pk
        })
      ))
      setShiftList(shifts)
    }
  }, [shiftData, currentDepartmentID])
  const [filterAttendance] = useMutation(FILTER_ATTENDANCE);

  const getAttendance = async () => {
    const res = await filterAttendance({
      variables: {
        startDate: `${startDate.getFullYear()}-${startDate.getMonth() + 1}-${startDate.getDate()}`,
        endDate: `${endDate.getFullYear()}-${endDate.getMonth() + 1}-${endDate.getDate()}`,
      }
    })
    if (res.data?.filterAttendance) {
      setAttendanceData(res.data?.filterAttendance)
    } else {
      setAttendanceData([])
    }
  }

  useEffect(() => {
    getAttendance()
  }, [startDate, endDate])

  return (
    <>
      {
        attendanceData ? <>
          <Report
            isTodayAttendance={isTodayAttendance}
            setIsTodayAttendance={setIsTodayAttendance}
            departmentData={departmentList}
            companyData={companyList}
            shiftData={shiftList}
            attendances={attendanceData}
            setCurrentCompanyID={setCurrentCompanyID}
            setCurrentDepartmentID={setCurrentDepartmentID}
          />
        </> : <DataLoadSpinner/>
      }
    </>
  )
}

export default ReportPage;