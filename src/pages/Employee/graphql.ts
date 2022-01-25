import { gql } from "@apollo/client";

export const QUERY_EMPLOYEE = gql`
    query QUERY_EMPLOYEE($first:Int){
        employees(first:$first){
            edges{
                node{
                    id
                    pk                    
                    user{
                        email
                        mobileNumber
                        profile{
                            firstName
                            middleName
                            lastName
                        }
                    }
                    company{
                        title
                        parent{
                            title
                            parent{
                                title
                            }
                        }
                    }
                    jobTitle{
                        title
                    }
                    workPhone
                    hireDate
                }
            }
        }
    }
`

export const CREATE_EMPLOYEE = gql`
mutation CREATE_EMPLOYEE(
    $firstName:String!,
    $middleName:String,
    $lastName:String!,
    $dob:String!,
    $profileImage:String,
    $email: String!,
    $mobileNumber: String!,
    $company: String!,
    $hireDate: String!,
    $jobTitle: String!,
    $workPhone: String!,
    $salary: String!,
    $workLocation: String!,
    $sourceOfHire: String!,
    $payType: String!
    ){
    createEmployee(input:{
        firstName: $firstName
        middleName: $middleName
        lastName: $lastName
        dob: $dob
        profileImage: $profileImage
        email: $email
        mobileNumber: $mobileNumber
        company: $company
        hireDate: $hireDate
        jobTitle: $jobTitle
        workPhone: $workPhone
        salary: $salary
        workLocation: $workLocation
        sourceOfHire: $sourceOfHire
        payType: $payType
    }){ employee{ 
      id 
      pk
      company{
        id
        title
      }
      } 
      success 
      errors 
    }
  }
`

export const ADD_RFID_ATTENDANCE = gql`
mutation ADD_RFID_ATTENDANCE($rfidCardNumber:String, $employee:String){
    addRfidAttendance(input:{rfidCardNumber:$rfidCardNumber,employee:$employee}){
        success
        errors
        rfidAttendance {
            id
            created
            pk
          }
    }
}
`


export const GET_EMPLOYEE = gql`
query GET_EMPLOYEE($id:ID!){
    employee(id:$id){
      pk
      employeeRfidCardAttendance{
        rfidCardNumber
        isActive
        pk
      }
      company{ 
        title
        parent{
          title
          parent{
            title
          }
        }
      }
      workPhone
      payType
      hireDate
      sourceOfHire
      salary
      jobTitle{
        title
      }
      user{
        mobileNumber
        id
        email
        secondaryEmail
  
        profile{
          firstName
          middleName
          lastName
          bloodGroup
          dobEnglish
        }
      }
    }
  }
`
export const ENABLE_DISABLE_RFID = gql`
mutation ENABLE_DISABLE_RFID($rfidAttendance:String,$isActive:String){
  enableDisableRfidAttendance(input:{
    rfidAttendance:$rfidAttendance,
    isActive:$isActive
  }){
    sucess
    errors
    rfidAttendance{
      isActive
      rfidCardNumber
    }
  }
}
`