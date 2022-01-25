import React from 'react'
import { Form, Formik } from "formik";
import { departmentFormValidationSchema } from "../../utils/formValidation";
import { designationInitialValues } from '../../utils/formInitialValues';
import Card from '../../components/reusable/Card';
import TextField from '../../components/reusable/Forms/TextField';
import PrimaryButton from '../../components/reusable/Buttons/PrimaryButton';
import TextAreaField from '../reusable/Forms/TextAreaField';

interface IEditDesignationProps {
  handleEditDesignation: any
  selectedDesignationInitialValues: any
}

const EditDesignation = (props: IEditDesignationProps) => {
  const { handleEditDesignation, selectedDesignationInitialValues } = props

  return (
    <>
      {
        selectedDesignationInitialValues ?
          <Card title={"Edit Designation"}>
            <Formik
              initialValues={selectedDesignationInitialValues}
              // validationSchema={departmentFormValidationSchema}
              onSubmit={handleEditDesignation}
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
                    <TextField
                      name='designationName'
                      label='Designation Name'
                      touched={touched}
                      values={values}
                      setFieldValue={setFieldValue}
                      errors={errors}
                    />
                    <TextAreaField
                      name={'description'}
                      label={'Description'}
                      values={values}
                      touched={touched}
                      errors={errors}
                      setFieldValue={setFieldValue} />
                    {console.log(errors)}
                    <PrimaryButton text={"Submit"} />
                  </Form>
                )
              }}
            </Formik>
          </Card> : null
      }
    </>
  )
}

export default EditDesignation

