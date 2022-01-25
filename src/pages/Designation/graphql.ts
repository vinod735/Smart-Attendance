import { gql } from '@apollo/client'

export const QUERY_DESIGNATION = gql`
    query designations($first:Int){
        designations(first:$first){
            edges{
                node{
                    id
                    pk
                    title
                    note
                }
            }
        }
    }
`

export const CREATE_DESIGNATION = gql`
    mutation CREATE_DESIGNATION($title:String!,$note:String!){
        createDesignation(input:{
            title:$title,
            note:$note 
          }){ designation{ 
            id 
            title 
            note } 
            success 
            errors 
          }
    }
`
export const DELETE_DESIGNATION = gql`
mutation DELETE_DESIGNATION($objectID:String!){
deleteDesignation(input:{objectId:$objectID}){
    success
    message
    errors
  }
}
`

export const GET_DESIGNATION = gql`
query GET_DESIGNATION($id:ID!){
    designation(id:$id){
        id 
        pk
        title
        note
    }
}
`

export const UPDATE_DESIGNATION =gql`
mutation UPDATE_DESIGNATION($id:String!,$title:String!,$note:String){
    updateDesignation(input:{
        designationId:$id,
        title:$title
        note:$note
      }){
        designation{
          title
          pk
          note
        }
        success
        errors
      }
}
`