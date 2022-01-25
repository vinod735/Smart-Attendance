import React, { useState } from 'react';
import { Form, Formik } from "formik";
import { shiftFormValidationSchema } from "../../utils/formValidation";
import { shiftInitialValues } from '../../utils/formInitialValues';
import Card from '../../components/reusable/Card';
import TextField from '../../components/reusable/Forms/TextField';
import PrimaryButton from '../../components/reusable/Buttons/PrimaryButton';
import TimeField from '../../components/reusable/Forms/TimeField';
import AutoComplete from "../reusable/Forms/AutoComplete";

interface IAddShiftProps {
  handleCreateShift: any
  company: any
  department:any
  setCurrentCompanyID:any
  setCurrentDepartmentID: any
}

const CreateShift: React.FC<IAddShiftProps> = (props) => {
  const { handleCreateShift, company,department,setCurrentCompanyID,setCurrentDepartmentID } = props

  return (
    <>
      <Card title={"Create Shift"}>
        <Formik
          initialValues={shiftInitialValues}
          validationSchema={shiftFormValidationSchema}
          onSubmit={handleCreateShift}
        >
          {({
            touched,
            values,
            handleSubmit,
            setFieldValue,
            errors,
            submitForm,
            handleChange
          }) => {
            return (
              <Form>
                {company?.length && <>
                  <AutoComplete
                    id='company'
                    name="company"
                    label="Select Company"
                    values={values}
                    touched={touched}
                    errors={errors}
                    onChange={handleChange}
                    setFieldValue={setFieldValue}
                    options={company}
                    setBooleanStates={[setCurrentCompanyID]}
                  />
                </>}
                {
                  values['company'] && department && <>
                    <AutoComplete
                      name="department"
                      label="Select Department"
                      values={values}
                      touched={touched}
                      errors={errors}
                      setFieldValue={setFieldValue}
                      options={department}
                      setBooleanStates={[setCurrentDepartmentID]}
                    />
                  </>
                }
                <TextField
                  name='shiftName'
                  label='Shift Name'
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                />
                <TimeField
                  name="startingTime"
                  label="Starting Time"
                  values={values}
                  touched={touched}
                  errors={errors}
                  setFieldValue={setFieldValue}
                />
                <TimeField
                  name="endingTime"
                  label="Ending Time"
                  values={values}
                  touched={touched}
                  errors={errors}
                  setFieldValue={setFieldValue}
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

export default CreateShift
