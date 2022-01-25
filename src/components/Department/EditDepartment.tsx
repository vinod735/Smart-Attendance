import React from 'react';
import { Form, Formik } from "formik";
import { departmentFormValidationSchema } from "../../utils/formValidation";
import Card from '../../components/reusable/Card';
import TextField from '../../components/reusable/Forms/TextField';
import PrimaryButton from '../../components/reusable/Buttons/PrimaryButton';

interface IEditDepartmentProps {
  handleEditDepartment: any
  selectedDepartmentInitialValues: any
}

const EditDepartment:React.FC<IEditDepartmentProps> = (props) => {
    const { handleEditDepartment,selectedDepartmentInitialValues } = props
    
    return (
      <>
      {
        selectedDepartmentInitialValues?
        <Card title={"Edit Department"}>
          <Formik
            initialValues={selectedDepartmentInitialValues}
            validationSchema={departmentFormValidationSchema}
            onSubmit={handleEditDepartment}
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
                  <PrimaryButton text={"Done"} />
                </Form>
              )
            }}
          </Formik>
  
        </Card>:null
    }
      </>
    )
}

export default EditDepartment
