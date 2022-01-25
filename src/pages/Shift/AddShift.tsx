import {useMutation, useQuery} from '@apollo/client'
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import FullPageMessage from '../../components/reusable/FullPageMessage'
import AddShiftComponent from '../../components/Shift/AddShift'
import {CREATE_SHIFT, QUERY_COMPANY} from '../Company/queries'

const AddShift: React.FC<any> = (props) => {
  let navigate = useNavigate()
  const [currentCompanyID, setCurrentCompanyID] = useState<string>("")
  const [currentDepartmentID, setCurrentDepartmentID] = useState<string>("")
  const [companyList, setCompanyList] = useState<any>()
  const [departmentList, setDepartmentList] = useState<any>()

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
      companyData?.companies?.edges?.map((item: any, index: number) => (
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
      console.log(departmentData)
      departmentData?.companies?.edges?.map((item: any, index: number) => (
        departments.push({
          label: item?.node?.title,
          value: item?.node?.pk
        })
      ))
      setDepartmentList(departments)
    }
  }, [departmentData, currentCompanyID])

  const [createShift] = useMutation(CREATE_SHIFT, {
    refetchQueries: [{
      query: QUERY_COMPANY, variables: {
        first: 100,
        level: 2
      }
    }]
  })

  const handleCreateShift = async (values: any, props: any) => {
    const response = await createShift({
      variables: {
        companyId: values.department,
        shiftName: values.shiftName,
        startTime: values.startingTime,
        endTime: values.endingTime
      }
    })
    if (response.data.createCompany.success) {
      toast.success("Shift Added Successfully")
      navigate("/shift");
      props.resetForm()
    } else {
      toast.error(response.data.createShift?.errors?.company?.[0].message)
    }
  }

  return (
    <>
      <AddShiftComponent
        handleCreateShift={handleCreateShift}
        company={companyList}
        department={departmentList}
        setCurrentCompanyID={setCurrentCompanyID}
        setCurrentDepartmentID={setCurrentDepartmentID}
      />
    </>
  )
}

export default AddShift
