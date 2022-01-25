import {ApolloClient, InMemoryCache, HttpLink, from} from "@apollo/client";

import {onError} from "@apollo/client/link/error";
import {setContext} from "@apollo/client/link/context";
import { getLocalKey } from "./helpers/sessionKey";
import { toast } from "react-toastify";
// import {getLocalKey} from "../utils/localKey";

const API_ROOT_URL = process.env.REACT_APP_SERVER_URL

const httpLink = new HttpLink({
  uri: `${API_ROOT_URL}`,
  credentials: 'same-origin',
})

const setAuthorizationLink = setContext((_, {headers}) => {
  // get the authentication token from local storage if it exists
  let token;
  if (getLocalKey("token")) {
    token = getLocalKey("token")
  }
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      Authorization: token ? `JWT ${token}` : null,
    },
  };
});

const errorLink = onError(({graphQLErrors, networkError}) => {
  // my error handling logic
  if (graphQLErrors) {
    for (const {message, locations, path} of graphQLErrors) {
      // console.log(JSON.parse(message),'message') //In this way we can extract error message from message
      // refetch token , if expire refetch
      toast.error(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
    }
  }
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
    if (typeof window !== 'undefined' && !window.navigator.onLine) {
      toast.error("OOPS! No internet connection")
    } else {
      toast.error("OOPS! Somethings went wrong to the server")
    }
  }
})

const defaultOptions: any = {
  watchQuery: {
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
  mutate: {
    errorPolicy: 'all',
  },
};

const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: from([setAuthorizationLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
  defaultOptions: defaultOptions,
})

export default apolloClient;
