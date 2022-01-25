import {gql} from "@apollo/client";

export const QUERY_SETTINGS = gql`
  query QUERY_SETTINGS($first:Int)  {
    settings(first:$first){
        edges{
          node{
            id
            pk
            graceBeforeCheckIn
            graceAfterCheckIn
            graceBeforeCheckOut
            graceAfterCheckOut
            company{
              id
              title
              parent{
                id
                title
                parent{
                  id
                  title
                }
              }
            }
          }
        }
      }
    }
`;

export const CREATE_SETTINGS = gql`
mutation CREATE_SETTING($company:String!, $graceBeforeCheckIn:String!, $graceBeforeCheckOut:String!, $graceAfterCheckIn:String!, $graceAfterCheckOut:String! ){
createSetting(input:{
    company:$company,
    graceBeforeCheckIn:$graceBeforeCheckIn,
    graceAfterCheckIn:$graceBeforeCheckOut,
    graceBeforeCheckOut:$graceAfterCheckIn,
    graceAfterCheckOut:$graceAfterCheckOut
  }){
    errors
    setting{
      id
      pk
    }
    success
  }
}
`
export const DELETE_SETTING = gql`
mutation DELETE_SETTING($objectID:String!){
deleteSetting(input:{objectId:$objectID}){
    success
    message
    errors
  }
}
`