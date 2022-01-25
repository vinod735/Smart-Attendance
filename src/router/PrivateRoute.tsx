import {Navigate} from 'react-router-dom';
import {getLocalKey} from "../helpers/sessionKey";

const PrivateRoute = ({children}: { children: JSX.Element }) => {
  const token = getLocalKey("token")
  if (!token) {
    return <Navigate to="/login"/>;
  }
  return children;
};

export default PrivateRoute;
