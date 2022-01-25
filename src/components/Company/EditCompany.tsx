import React from 'react'
import { Form, Formik } from "formik";
import { companyFormValidationSchema } from "../../utils/formValidation";
import { companyInitialValues } from '../../utils/formInitialValues';
import Card from '../../components/reusable/Card';
import TextField from '../../components/reusable/Forms/TextField';
import PrimaryButton from '../../components/reusable/Buttons/PrimaryButton';

interface IEditCompanyProps {
  handleEditCompany: any
  selectedCompanyInitialValues:any
}

const EditCompany = (props: IEditCompanyProps) => {
  const { handleEditCompany,selectedCompanyInitialValues } = props

  return (
    <>
    {
      selectedCompanyInitialValues?
      <Card title={"Edit Company"}>
        <Formik
          initialValues={selectedCompanyInitialValues}
          validationSchema={companyFormValidationSchema}
          onSubmit={handleEditCompany}
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
              <Form>
                <TextField
                  name='company'
                  label="Company Name"
                  values={values}
                  touched={touched}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  />
                <TextField
                  name='address'
                  label='Address'
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  />
                <TextField
                  name='country'
                  label='Country'
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  />
                <TextField
                  name='city'
                  label='City'
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  />
                <TextField
                  name='postalCode'
                  label='Postal Code'
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  />
                {console.log(errors)}
                <PrimaryButton text={"Submit"} />
              </Form>
            )
          }}
        </Formik>

      </Card>:null
  }
    </>
  )
}

export default EditCompany
