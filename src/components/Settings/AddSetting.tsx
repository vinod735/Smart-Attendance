import React, {useState} from 'react';
import {Form, Formik} from "formik";
import {settingFormValidationSchema} from "../../utils/formValidation";
import TextField from "../reusable/Forms/TextField";
import Card from "../reusable/Card";
import PrimaryButton from "../reusable/Buttons/PrimaryButton";
import AutoComplete from "../reusable/Forms/AutoComplete";
import Spinner from "../reusable/Spinner";

interface IAddSettingProps {
  handleCreateSetting: any
  departmentData: any,
  companyData: any,
  shiftData: any,
  setCurrentCompanyID: any,
  setCurrentDepartmentID: any
}

const settingInitialValue = {
  company: '',
  department: '',
  shift: '',
  graceBeforeCheckIn: '',
  graceBeforeCheckOut: '',
  graceAfterCheckIn: '',
  graceAfterCheckOut: '',
}

const AddSetting: React.FC<IAddSettingProps> = (props) => {
  const {
    handleCreateSetting,
    setCurrentCompanyID,
    setCurrentDepartmentID,
    departmentData,
    companyData,
    shiftData
  } = props

  return (
    <>
      <Card title={"General Information"}>
        <Formik
          initialValues={settingInitialValue}
          validationSchema={settingFormValidationSchema}
          onSubmit={handleCreateSetting}
        >
          {({
              touched,
              values,
              setFieldValue,
              errors,
              isSubmitting
            }) => {
            return (
              <Form>
                {companyData?.length && <>
                  <AutoComplete
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
                <TextField
                  touched={touched}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  name={"graceBeforeCheckIn"}
                  label={"Grace Before Check In"}
                  helperText={"How early you can checkin"}
                  values={values}
                />
                <TextField
                  touched={touched}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  name={"graceAfterCheckIn"}
                  label={"Grace After Check In"}
                  helperText={"Not counted as late"}
                  values={values}
                />
                <TextField
                  touched={touched}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  name={"graceBeforeCheckOut"}
                  label={"Grace Before Check Out"}
                  helperText={"This time will not count as early left"}
                  values={values}
                />
                <TextField
                  touched={touched}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  name={"graceAfterCheckOut"}
                  label={"Grace After Check Out"}
                  helperText={"This time will not count as overtime"}
                  values={values}
                />
                <PrimaryButton text={isSubmitting ? <Spinner/> : "Submit"}/>
              </Form>
            )
          }}
        </Formik>

      </Card>
    </>
  );
};

export default AddSetting;