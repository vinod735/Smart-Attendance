import {gql} from '@apollo/client';

export const USER_LOGIN = gql`
  mutation tokenAuth($username: String!, $password:String!) {
    tokenAuth(input: {username:$username, password:$password}) {
      token
      success
      errors
      user{
        id
        email
        username
        pk
        dateJoined
      }
    }
  }
`;

export const VERIFY_TOKEN = gql`
mutation verifyToken($token:String!){
  verifyToken(input:{token:$token}){
  success
  errors
  payload
  }
}
`