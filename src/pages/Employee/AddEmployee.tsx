import { useMutation, useQuery } from '@apollo/client'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import AddEmployeeComponent from '../../components/Employee/AddEmployee'
import FullPageMessage from '../../components/reusable/FullPageMessage'
import { backendErrorDisplay } from '../../utils/backendErrorDisplay'
import { QUERY_COMPANY } from '../Company/queries'
import { QUERY_DESIGNATION } from '../Designation/graphql'
import { CREATE_EMPLOYEE, QUERY_EMPLOYEE } from './graphql'
interface Props {

}

const AddEmployee = (props: Props) => {
  const navigate = useNavigate()
  const [companyList, setCompanyList] = useState<any>()
  const [departmentList, setDepartmentList] = useState<any>()
  const [shiftList, setShiftList] = useState<any>()
  const [designationList, setDesignationList] = useState<any>()
  const [currentCompanyID, setCurrentCompanyID] = useState<string>("")
  const [currentDepartmentID, setCurrentDepartmentID] = useState<string>("")


  const { data: companyData } = useQuery(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 0
      }
    })


  const { data: shiftData } = useQuery(QUERY_COMPANY,
    {
      variables: {
        first: 100,
        level: 2,
        parent: currentDepartmentID
      }
    })
  useEffect(() => {
    let companies: any = []
    if (companyData) {
      companyData?.companies?.edges?.map((item: any) => {
        companies.push({
          label: item?.node?.title,
          value: item?.node?.id
        })
      })
      setCompanyList(companies)
    }
  }, [companyData])

  const { data: departmentData } = useQuery(QUERY_COMPANY,
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

  const { data: designationData } = useQuery(QUERY_DESIGNATION,
    {
      variables: {
        first: 100,
      }
    })

  useEffect(() => {
    let designations: any = []
    if (designationData) {
      designationData?.designations?.edges?.map((item: any) => {
        designations.push({
          label: item?.node?.title,
          value: item?.node?.pk
        })
      })
      setDesignationList(designations)
    }
  }, [designationData])

  const [createEmployee,
    { loading: isLoading, }
  ] = useMutation(CREATE_EMPLOYEE,{
    refetchQueries:[{
      query: QUERY_EMPLOYEE, variables:{
        first : 100
      }
    }]
  })

  const handleAddEmployee = async (values: any, props: any) => {
    const response = await createEmployee({
      variables: {
        firstName: values.firstName,
        middleName: values.middleName,
        lastName: values.lastName,
        dob: values.dob,
        // profileImage: values.profileImage,
        email: values.email,
        mobileNumber: values.mobileNumber,
        company: values.shift.toString(),
        hireDate: values.hireDate,
        jobTitle: values.jobTitle.toString(),
        workPhone: values.workPhone,
        salary: values.salary,
        workLocation: values.workLocation,
        sourceOfHire: values.sourceOfHire,
        payType: values.payType,
      }
    })
    if (response?.data?.createEmployee?.success) {
      navigate("/employee")
      props.resetForm()
      toast.success("Employee is created successfully")
    } else {
      let errors = backendErrorDisplay(response?.data?.createEmployee?.errors)
      props.setErrors(errors)
    }
  }
  return (
    <>
      <AddEmployeeComponent
        handleAddEmployee={handleAddEmployee}
        departmentData={departmentList}
        companyData={companyList}
        shiftData={shiftList}
        designationData={designationList}
        setCurrentCompanyID={setCurrentCompanyID}
        setCurrentDepartmentID={setCurrentDepartmentID} />
    </>
  )
}

export default AddEmployee
