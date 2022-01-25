import { gql } from "@apollo/client";

export const QUERY_COMPANY = gql`
  query QUERY_COMPANY($first:Int,$level:Int, $parent:ID,)  {
    companies(first:$first, level:$level, parent:$parent){
        edges{
          node{
            id
            title
            pk
            address
            country
            city
            postalCode
            
            startTime
            endTime
            parent{
              title
              parent{
                title
               }
            }
          }
        }
      }
    }
`;

export const CREATE_COMPANY = gql`
mutation($title:String!,$country:String,$city:String!,$address:String!,$postalCode:String!){
  createCompany(input:{
    title:$title
    country:$country
    city:$city,
    address:$address,
    postalCode:$postalCode
  }){
    success
    errors
  }
}
`

export const DELETE_COMPANY = gql`
mutation DELETE_COMPANY($objectID:String!){
deleteCompany(input:{objectId:$objectID}){
    success
    message
    errors
  }
}
 `

export const GET_COMPANY = gql`
query GET_COMPANY($id:ID!){
  company(id:$id){
    id
    address
    title
    country
    city
    postalCode
    pk
  }
}
`

export const GET_DEPARTMENT = gql`
query GET_DEPARTMENT($id:ID!){
  company(id:$id){
    id
    title
    pk
    parent{
      id
      title
      pk
    }
    address
  }
}
`

export const GET_SHIFT = gql`
query GET_SHIFT($id:ID!){
  company(id:$id){
    id
    title
    startTime
    endTime
    pk
    parent{
      id
      title
      pk
    }
  }
}
`

// companyId = parentId
export const CREATE_DEPARTMENT = gql`
mutation CREATE_DEPARTMENT($companyId:String!,$departmentName:String!,$address:String!){ 
  createCompany(input:{
    title:$departmentName,
    address:$address,
    parent:$companyId
  }){
    company{
      id
      title
      address
    }
    success
    errors
  }
}
`

export const CREATE_SHIFT = gql`
mutation CREATE_SHIFT($companyId:String!,$shiftName:String!,$startTime:String!,$endTime:String!){
  createCompany(input:{
    parent:$companyId,
    title:$shiftName,
    startTime:$startTime,
    endTime:$endTime
  }){
    company{
      id
      title
      startTime
      endTime
    }
    success
    errors
  }
}
`

export const UPDATE_COMPANY = gql`
mutation UPDATE_COMPANY(
  $id:String!,
  $title:String!,
  $address:String!,
  $country:String!,
  $city:String!,
  $postalCode:String!
  ){
  updateCompany(input:{
    companyId:$id
    title:$title
    address:$address
    country:$country
    city:$city
    postalCode:$postalCode
  }){
    success
    errors
  }
}
`

export const UPDATE_DEPARTMENT = gql`
mutation UPDATE_COMPANY($id:String!,$title:String,$address:String!,$parent:String!){
  updateCompany(input:{
    companyId:$id
    parent:$parent
    title:$title
    address:$address
  }){
    success
    errors
  }
}
`

export const UPDATE_SHIFT = gql`
mutation UPDATE_SHIFT($id:String!,$title:String,$startTime:String!,$endTime:String!,$parent:String!){
  updateCompany(input:{
    companyId:$id
    parent:$parent
    title:$title
    startTime:$startTime
    endTime:$endTime
  }){
    success
    errors
  }
}
`