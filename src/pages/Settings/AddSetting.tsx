import React, {useEffect, useState} from 'react';
import AddSettingComponent from '../../components/Settings/AddSetting'
import {toast} from "react-toastify";
import {useMutation, useQuery} from "@apollo/client";
import {QUERY_COMPANY} from "../Company/queries";
import {useNavigate} from "react-router-dom";
import {CREATE_SETTINGS, QUERY_SETTINGS} from "./graphql";
import FullPageMessage from '../../components/reusable/FullPageMessage';

const AddSetting: React.FC<any> = (props) => {
  const [currentCompanyID, setCurrentCompanyID] = useState<string>("")
  const [currentDepartmentID, setCurrentDepartmentID] = useState<string>("")
  const [companyList, setCompanyList] = useState<any>()
  const [shiftList, setShiftList] = useState<any>()
  const [departmentList, setDepartmentList] = useState<any>()
  const navigate = useNavigate()
  const [createSetting] = useMutation(CREATE_SETTINGS, {
    refetchQueries: [{
      query: QUERY_SETTINGS, variables: {
        first: 100
      }
    }]
  });


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


  const handleCreateSetting = async (values: any, props: any) => {
    const response = await createSetting({
      variables: {
        company: values?.shift,
        graceBeforeCheckIn: values?.graceBeforeCheckIn,
        graceBeforeCheckOut: values?.graceBeforeCheckOut,
        graceAfterCheckIn: values?.graceAfterCheckIn,
        graceAfterCheckOut: values?.graceAfterCheckOut
      }
    })
    if (response?.data?.createSetting?.success) {
      navigate("/setting")
      props.resetForm()
      toast.success("Shift setting created Successfully",)
    } else {
      toast.error(response?.data?.createSetting?.errors?.company?.[0].message)
    }

  }

  return (
    <>
      <AddSettingComponent
        handleCreateSetting={handleCreateSetting}
        departmentData={departmentList}
        companyData={companyList}
        shiftData={shiftList}
        setCurrentCompanyID={setCurrentCompanyID}
        setCurrentDepartmentID={setCurrentDepartmentID}
      />
    </>
  );
};

export default AddSetting;