import React from 'react'
import { Form, Formik } from "formik";
import { emplyeeFormValidationSchema } from "../../utils/formValidation";
import { employeeInitialValues } from '../../utils/formInitialValues';
import Card from '../../components/reusable/Card';
import TextField from '../../components/reusable/Forms/TextField';
import PrimaryButton from '../../components/reusable/Buttons/PrimaryButton';
import AutoComplete from "../reusable/Forms/AutoComplete";
import Divider from '../reusable/Divider';
import DatePicker from '../reusable/Forms/DatePickerHTML/DatePicker';


interface IAddDesignationProps {
  handleAddEmployee: any
  departmentData: any,
  companyData: any,
  shiftData: any,
  designationData: any,
  setCurrentCompanyID: any,
  setCurrentDepartmentID: any
}

const AddEmployee = (props: IAddDesignationProps) => {
  const { handleAddEmployee, departmentData, companyData, shiftData,
    setCurrentCompanyID, setCurrentDepartmentID, designationData } = props

  return (
    <>
      <Card title={"Create Employee"}>
        <Formik
          initialValues={employeeInitialValues}
          validationSchema={emplyeeFormValidationSchema}
          onSubmit={handleAddEmployee}
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
                <div className='grid grid-cols-2 gap-4'>
                  <TextField
                    name='firstName'
                    label='First Name'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='middleName'
                    label='Middle Name'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='lastName'
                    label='Last Name'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='email'
                    label='Email'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <DatePicker
                    name='hireDate'
                    label='Date of Hire'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='mobileNumber'
                    label='Mobile Number'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                </div>
                <br />
                <div className='text-2xl'>Work</div>
                <Divider />
                <br />
                <div className='grid grid-cols-3 gap-4'>
                  {companyData?.length && <>
                    <AutoComplete
                      id='company'
                      name={"company"}
                      label={"Company"}
                      values={values}
                      touched={touched}
                      errors={errors}
                      setFieldValue={setFieldValue}
                      options={companyData}
                      setBooleanStates={[setCurrentCompanyID]}
                    />
                  </>}
                  {values['company'] && departmentData &&
                    <AutoComplete
                      name={"department"}
                      label={"Department"}
                      values={values}
                      touched={touched}
                      errors={errors}
                      setFieldValue={setFieldValue}
                      options={departmentData}
                      setBooleanStates={[setCurrentDepartmentID]}
                    />
                  }
                  {values['department'] && shiftData &&
                    <AutoComplete
                      name={"shift"}
                      label={"Shift"}
                      values={values}
                      touched={touched}
                      errors={errors}
                      setFieldValue={setFieldValue}
                      options={shiftData}
                    />
                  }
                </div>
                <br />
                <div className='grid grid-cols-2 gap-4'>
                  {designationData?.length && <AutoComplete
                    name='jobTitle'
                    label='Job Title'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                    options={designationData}
                  />}

                  <TextField
                    name='workLocation'
                    label='Work Location'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='sourceOfHire'
                    label='Source Of Hire'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='salary'
                    label='Pay Rate'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='payType'
                    label='Pay Type'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='workPhone'
                    label='Work Phone'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                </div>
                <br />
                <div className='text-2xl'>Personal Information</div>
                <Divider />
                <br />
                <div className='grid grid-cols-2 gap-4'>
                  <TextField
                    name='bloodGroup'
                    label='Blood Group'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='spouseName'
                    label='Spouse Name'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='fatherName'
                    label='Father Name'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='motherName'
                    label='Mother Name'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='otherEmail'
                    label='Other Email'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <DatePicker
                    name='dob'
                    label='Date of Birth'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='nationality'
                    label='Nationality'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='gender'
                    label='Gender'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='maritalStatus'
                    label='Marital Status'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='drivingLiscence'
                    label='Driving Liscence'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='hobbies'
                    label='Hobbies'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='website'
                    label='Website'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='employeecity'
                    label='City'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='employeeCountry'
                    label='Country'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='employeeProvince'
                    label='Provience/State'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                  <TextField
                    name='employeePostCode'
                    label='PostCode'
                    touched={touched}
                    values={values}
                    setFieldValue={setFieldValue}
                    errors={errors}
                  />
                </div>
                <PrimaryButton text={"Submit"} />
              </Form>
            )
          }}
        </Formik>
      </Card>
    </>
  )
}

export default AddEmployee
