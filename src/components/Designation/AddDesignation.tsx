import React from 'react'
import { Form, Formik } from "formik";
import { departmentFormValidationSchema } from "../../utils/formValidation";
import { designationInitialValues } from '../../utils/formInitialValues';
import Card from '../../components/reusable/Card';
import TextField from '../../components/reusable/Forms/TextField';
import PrimaryButton from '../../components/reusable/Buttons/PrimaryButton';
import TextAreaField from '../reusable/Forms/TextAreaField';


interface IAddDesignationProps {
  handleAddDesignation: any
}

const AddDesignation = (props: IAddDesignationProps) => {
  const { handleAddDesignation } = props

  return (
    <>
      <Card title={"Create Designation"}>
        <Formik
          initialValues={designationInitialValues}
          // validationSchema={departmentFormValidationSchema}
          onSubmit={handleAddDesignation}
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
      </Card>
    </>
  )
}

export default AddDesignation
