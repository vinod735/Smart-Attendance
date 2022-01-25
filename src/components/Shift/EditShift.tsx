import React from 'react';
import { Form, Formik } from "formik";
import { shiftFormValidationSchema } from "../../utils/formValidation";
import Card from '../../components/reusable/Card';
import TextField from '../../components/reusable/Forms/TextField';
import PrimaryButton from '../../components/reusable/Buttons/PrimaryButton';
import TimeField from '../../components/reusable/Forms/TimeField';

interface IEditShiftProps {
  handleEditShift: any
  selectedShiftInitialValue:any
}

const CreateShift: React.FC<IEditShiftProps> = (props) => {
  const { handleEditShift,selectedShiftInitialValue } = props
  return (
    <>
    {
      selectedShiftInitialValue?
      <Card title={"Edit Shift"}>
        <Formik
          initialValues={selectedShiftInitialValue}
          validationSchema={shiftFormValidationSchema}
          onSubmit={handleEditShift}
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
                  name='shiftName'
                  label='Shift Name'
                  touched={touched}
                  values={values}
                  setFieldValue={setFieldValue}
                  errors={errors}
                  />
                <TimeField
                  name='startingTime'
                  label="Starting Time"
                  values={values}
                  touched={touched}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  />
                <TimeField
                  name='endingTime'
                  label="Ending Time"
                  values={values}
                  touched={touched}
                  errors={errors}
                  setFieldValue={setFieldValue}
                  />
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

export default CreateShift
