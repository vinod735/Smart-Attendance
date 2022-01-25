import {gql} from "@apollo/client";
const DELETE_DEPARTMENT = gql`
mutation DELETE_DEPARTMENT($objectID:String!){
deleteDepartment(input:{objectId:$objectID}){
    success
    message
    errors
  }
}
`