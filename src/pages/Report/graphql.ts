import {gql} from "@apollo/client";

export const FILTER_ATTENDANCE = gql`
  mutation filterAttendance($startDate:String!, $endDate:String!){
    filterAttendance(input:{startDate:$startDate, endDate:$endDate}){
      headers
      body
      errors
      success
    }
  }
`