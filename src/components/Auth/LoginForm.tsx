import React from 'react'
import {Link} from 'react-router-dom'
import PasswordField from '../reusable/Forms/PasswordField'
import Spinner from '../reusable/Spinner'
import {INonFieldErrorProps} from "../../pages/Auth/Login";
import PrimaryButton from "../reusable/Buttons/PrimaryButton";
import TextField from "../reusable/Forms/TextField";
import {Form, Formik} from "formik";
import {loginFormValidationSchema} from "../../utils/formValidation";

interface ILoginFormInitialValue {
  username: string,
  password: string
}

interface ILoginFormProps {
  handleLogin: any,
  loginProcessing: boolean,
  loginError?: any
}

const LoginFormInitialValues: ILoginFormInitialValue = {
  username: "",
  password: ""
}


const LoginForm: React.FC<ILoginFormProps> = (props) => {
  const {handleLogin, loginProcessing, loginError = []} = props


  return (
    <div>
      {loginError?.map((item: INonFieldErrorProps, index: number) => (
        <p key={index} className={"text-red"}>{item.message}</p>
      ))}
      <Formik
        initialValues={LoginFormInitialValues}
        validationSchema={loginFormValidationSchema}
        onSubmit={handleLogin}
      >
        {({
            touched,
            values,
            handleSubmit,
            setFieldValue,
            errors,
            submitForm
          }) => (
          <Form>
            <TextField
              touched={touched}
              errors={errors}
              setFieldValue={setFieldValue}
              name={"username"}
              values={values}
              label={"Username"}
            />
            <PasswordField
              touched={touched}
              errors={errors}
              setFieldValue={setFieldValue}
              name={"password"}
              label={"Password"}
              values={values}
            />
            {/*<div className="flex justify-end">
              <Link
                to="#"
                className="text-sm text-purple-600 hover:text-purple-700 hover:underline mb-6">Forgot
                your password?</Link>
            </div>*/}
            <PrimaryButton
              style={{width:"100%"}}
              text={loginProcessing ? <Spinner/> : "Sign In"}
            />
          </Form>
        )
        }
      </Formik>
    </div>
  )
}

export default LoginForm
