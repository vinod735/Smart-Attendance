import React from 'react';
import { Form, Formik } from "formik";
import { companyFormValidationSchema } from "../../utils/formValidation";
import { companyInitialValues } from '../../utils/formInitialValues';
import Card from '../../components/reusable/Card';
import TextField from '../../components/reusable/Forms/TextField';
import PrimaryButton from '../../components/reusable/Buttons/PrimaryButton';
// import AutoComplete from "../reusable/Forms/AutoComplete";

interface IAddCompanyProps {
  handleAddCompany: any

}

const AddDepartment: React.FC<IAddCompanyProps> = (props) => {
  const { handleAddCompany } = props
  return (
    <>
      <Card title={"Create Company"}>
        <Formik
          initialValues={companyInitialValues}
          validationSchema={companyFormValidationSchema}
          onSubmit={handleAddCompany}
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

      </Card>
    </>
  )
}

export default AddDepartment
