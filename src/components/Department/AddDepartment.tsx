import React from 'react';
import { Form, Formik } from "formik";
import { departmentFormValidationSchema } from "../../utils/formValidation";
import { departmentInitialValues } from '../../utils/formInitialValues';
import Card from '../../components/reusable/Card';
import TextField from '../../components/reusable/Forms/TextField';
import PrimaryButton from '../../components/reusable/Buttons/PrimaryButton';
import AutoComplete from "../reusable/Forms/AutoComplete";

interface IAddDepartmentProps {
  handleAddDepartment: any
  company: any
}

const AddDepartment: React.FC<IAddDepartmentProps> = (props) => {
  const { handleAddDepartment, company } = props
  return (
    <>
      <Card title={"Create Department"}>
        <Formik
          initialValues={departmentInitialValues}
          validationSchema={departmentFormValidationSchema}
          onSubmit={handleAddDepartment}
        >
          {({
            touched,
            values,
            handleSubmit,
            setFieldValue,
            errors,
            submitForm
          }) => {
            return (
              <Form onSubmit={handleSubmit}>
                {company ? <>
                  <AutoComplete
                    name={"company"}
                    label={"Company Name"}
                    values={values}
                    touched={touched}
                    errors={errors}
                    setFieldValue={setFieldValue}
                    options={company}
                  />
                </> : ""}
                <TextField
                  name='departmentName'
                  label='Department Name'
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                />
                <TextField
                  name='address'
                  label='Address'
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                />
                {/* <TextField
                  name='HOD'
                  label='HOD'
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                /> */}
                {console.log(errors)}
                <PrimaryButton text={"Submit"} />
              </Form>
            )
          }}
        </Formik>
      </Card>
    </>
  )
}

export default AddDepartment
