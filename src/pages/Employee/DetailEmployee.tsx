
import DetailEmployeeComponent from '../../components/Employee/DetailEmployee';
import {useMutation,useQuery} from "@apollo/client";
import { ADD_RFID_ATTENDANCE, ENABLE_DISABLE_RFID} from './graphql';
import { toast } from 'react-toastify';
import {useParams} from "react-router-dom";

import React, { useEffect, useState } from 'react'


import { GET_EMPLOYEE } from './graphql'

interface Props {
  
}



const DetailEmployee = (props: Props) => {
  
  const {id} = useParams()
  const [basicInfoData, setBasicInfoData] = useState<any>()
  const [workInfoData, setworkInfoData] = useState<any>()
  const [personalInfoData,setPersonalInfoData] = useState<any>()
  const [addRfidAttendance] = useMutation(ADD_RFID_ATTENDANCE);
  const [employeRfidData,setEmployeeRfidData] = useState<any>();
    

    const handleAddRfidAttendance = async (values:any)=>{
        const response = await addRfidAttendance({

            variables:{
                rfidCardNumber:values.rfidNumber,
                employee:employeeDetailsData?.employee?.pk

            }
        })
        if(response?.data?.addRfidAttendance?.success){
            toast.success("rfid Added");
        }else{
            toast.error("rfid add failed");
        }

    }

    const [enableDisableRfid]=useMutation(ENABLE_DISABLE_RFID);

    const handleEnableDisableRfid = async ()=>{
      const response = await enableDisableRfid({
        variables:{
          rfidAttendanceId:employeRfidData.rfidAttendanceId.toString(),
          isActive:employeRfidData.isActive?"false":"true"
        }
      })
    }
    




  const { data:employeeDetailsData,error } = useQuery(GET_EMPLOYEE,
    {
      variables: {
        id:id
      }
    }
    )

    useEffect(() => {
      if (employeeDetailsData) {
        const basicInfoDataFormat =
        {
          "First Name": employeeDetailsData.employee.user.profile.firstName,
          "Middle Name": employeeDetailsData.employee?.user?.profile?.middleName,
          "Last Name": employeeDetailsData.employee.user.profile.lastName,
          "Email": employeeDetailsData.employee.user.email,
          "Date of Hire": employeeDetailsData.employee.hireDate,
          "Mobile Number": employeeDetailsData.employee.user.mobileNumber
        }
      
        const workInfoDataFormat =
        {
          "Company": employeeDetailsData.employee.company.parent.parent.title,
          "Department": employeeDetailsData.employee.company.parent.title,
          "Shift": employeeDetailsData.employee.company.title,
          "Job Title": employeeDetailsData.employee.jobTitle.title,
          "Work Location": "Tripureswor",
          "Source of Hire": employeeDetailsData.employee.sourceOfHire,
          "Pay Rate": employeeDetailsData.employee.salary,
          "Pay Type": employeeDetailsData.employee.payType,
          "Work Phone": employeeDetailsData.employee.workPhone
        }

        const personalInfoDataFormat = {
          "Blood Group":employeeDetailsData.employee.user.profile.bloodGroup,
          "Other Email":employeeDetailsData.employee.user.secondaryEmail,
          "Date of Birth":employeeDetailsData.employee.user.profile.dobEnglish,
          "Gender":"",
          "Website":""
        }
        if(employeeDetailsData.employee.employeeRfidCardAttendance){
        const employeRfidDataFormat={
          "isActive":employeeDetailsData.employee.employeeRfidCardAttendance.isActive,
          "rfidCardNumber":employeeDetailsData.employee.employeeRfidCardAttendance.rfidCardNumber,
          "rfidAttendanceId":employeeDetailsData.employee.employeeRfidCardAttendance.pk

        }
        setEmployeeRfidData(employeRfidDataFormat)
      }

      

        setBasicInfoData(basicInfoDataFormat)
        setworkInfoData(workInfoDataFormat)
        setPersonalInfoData(personalInfoDataFormat)
        
      } 
    }, [employeeDetailsData])

  return (
    <div>
      <DetailEmployeeComponent
        basicInfoData={basicInfoData}
        workInfoData={workInfoData}
        personalInfoData={personalInfoData}
        employeRfidData={employeRfidData}
        handleAddRfidAttendance={handleAddRfidAttendance}
        handleEnableDisableRfid={handleEnableDisableRfid}
        />
    </div>
  )
}

export default DetailEmployee;
