import { Tab } from '@headlessui/react'
import { Form, Formik } from 'formik'
import React, { Fragment, useState } from 'react'
import classNames from '../../utils/classNames'
import PrimaryButton from '../reusable/Buttons/PrimaryButton'
import TextField from '../reusable/Forms/TextField'
import BasicInfo from '../reusable/ProfileCard/BasicInfo'

interface Props {
  basicInfoData: any
  workInfoData: any
  personalInfoData: any
  employeRfidData: any
  handleAddRfidAttendance: any
  handleEnableDisableRfid: any
}
const rfidInitialValues = {
  rfidNumber: ''
}

const DetailEmployee = (props: Props) => {
  const [cardTitle, setCardTitle] = useState("Employee Basic Information")
  const { basicInfoData, workInfoData, personalInfoData, employeRfidData, handleAddRfidAttendance, handleEnableDisableRfid } = props

  if (employeRfidData) {

    console.log("rfid contain")
  } else {
    console.log("rfid not contain");
  }



  return (
    <>
      <div className='text-2xl text-center capitalize'>
        {cardTitle}
      </div>
      <br />
      <Tab.Group>
        <div className="rounded-md bg-white">
          <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
            <Tab.List>
              <ul className='flex'>
                <Tab
                  className={({ selected }) =>
                    classNames('cursor-pointer py-4 px-4 font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
                      selected
                        ? 'text-indigo-500 border-indigo-500 hover:text-indigo-500 hover:border-indigo-500'
                        : null
                    )}
                >
                  <li
                    onClick={() => setCardTitle('Employee Basic Information')}
                  >
                    Basic Info
                  </li>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames('cursor-pointer py-4 px-4 font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
                      selected
                        ? 'text-indigo-500 border-indigo-500 hover:text-indigo-500 hover:border-indigo-500'
                        : null
                    )}
                >
                  <li
                    onClick={() => setCardTitle('Employee Work Information')}
                  >
                    Work Info
                  </li>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames('cursor-pointer py-4 px-4 font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
                      selected
                        ? 'text-indigo-500 border-indigo-500 hover:text-indigo-500 hover:border-indigo-500'
                        : null
                    )}
                >
                  <li
                    onClick={() => setCardTitle('Employee Personal Information')}
                  >
                    Personal Info
                  </li>
                </Tab>
                <Tab
                  className={({ selected }) =>
                    classNames('cursor-pointer py-4 px-4 font-medium text-center text-gray-500 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300',
                      selected
                        ? 'text-indigo-700 border-indigo-700 hover:text-indigo-700 hover:border-indigo-700'
                        : null
                    )}
                >
                  <li
                    onClick={() => setCardTitle('Employee Attendance Information')}
                  >
                    Attendance Info
                  </li>
                </Tab>
              </ul>
            </Tab.List>
          </div>
          <div className="p-8">
            <div className='grid grid-cols-9 gap-4'>
              <div className='col-span-2 row-span-3 bg-gray-400 h-48 w-44'>
                Employee Image
              </div>
              <div className='col-span-7 text-gray-700 p-4'>
                <BasicInfo
                  basicInfoData={basicInfoData}
                  workInfoData={workInfoData}
                  personalInfoData={personalInfoData}
                />
              </div>
            </div>
          </div>
        </div>
      </Tab.Group>
      {
        employeRfidData ? <div>
          <h1>rfid Number {employeRfidData.rfidCardNumber}</h1>
          <button onClick={handleEnableDisableRfid}>disable</button>
        </div> :


          <Formik
            initialValues={rfidInitialValues}
            // validationSchema={companyFormValidationSchema}
            onSubmit={handleAddRfidAttendance}
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
                <Form onSubmit={handleSubmit} className='flex gap-x-2'>
                  <TextField
                    name='rfidNumber'
                    label="Enter rfid Number"
                    values={values}
                    touched={touched}
                    errors={errors}
                    setFieldValue={setFieldValue}
                  />
                  <div>
                    <PrimaryButton text={"Submit"} />
                  </div>

                </Form>
              )
            }}
          </Formik>
      }
    </>
  )
}

export default DetailEmployee;
