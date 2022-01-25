import React, {useEffect, useState} from 'react'
import LoginForm from '../../components/Auth/LoginForm'
import {useMutation} from "@apollo/client";
import {USER_LOGIN, VERIFY_TOKEN} from "./graphql";
import {getLocalKey, setLocalKey} from "../../helpers/sessionKey";
import {useNavigate} from "react-router-dom";

export interface INonFieldErrorProps {
  code: string,
  message: string
}

export interface INonFieldsErrors {
  [index: number]: INonFieldErrorProps
}

const initialValues = {
  username: "",
  password: ""
}
const Login: React.FC<any> = () => {
  const [authToken, {
    loading: loginProcessing,
    reset
  }] = useMutation(USER_LOGIN);

  const [verifyToken, {
    loading: verificationLoading,
  }] = useMutation(VERIFY_TOKEN);


  const [loginError, setLoginError] = useState<INonFieldsErrors>()
  let navigate = useNavigate()

  const handleLogin = async (values: any) => {
    const response = await authToken({
      variables: {
        username: values?.username,
        password: values?.password
      }
    })
    if (response.data?.tokenAuth.success) {
      setLocalKey("token", response.data?.tokenAuth?.token)
      navigate("/")
    } else if (response.data.tokenAuth.errors) {
      reset()
      setLoginError(response.data.tokenAuth.errors.nonFieldErrors)
      sessionStorage.clear();
    }
  }

  const handleTokenVerification = async () => {
    const response = await verifyToken({
      variables: {
        token: getLocalKey("token")
      }
    })
    response?.data?.verifyToken?.success ? navigate('/') : navigate('/login')
  }

  const checkPreviousToken = () => {
    const token = getLocalKey("token")
    if (token) {
      handleTokenVerification()
    }
  }

  useEffect(() => {
    checkPreviousToken()
  }, [])

  return (
    <>
      <LoginForm
        handleLogin={handleLogin}
        loginProcessing={loginProcessing}
        loginError={loginError}
      />
    </>
  )
}

export default Login
