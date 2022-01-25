import React, { useState } from "react";
import { Form, Formik } from "formik";
import Card from "../reusable/Card";
import AutoComplete from "../reusable/Forms/AutoComplete";
import PrimaryButton from "../reusable/Buttons/PrimaryButton";
import { reportFromValidation } from "../../utils/formValidation";
import FilterAttendance from "./FilterAttendance";
import TodayAttendance from "./ToadyAttendance";
import DatePicker from "../reusable/Forms/DatePickerHTML/DatePicker";
import { useMutation } from "@apollo/client";
import { FILTER_ATTENDANCE } from "../../pages/Report/graphql";
import Spinner from "../reusable/Spinner";
import DataLoadSpinner from "../reusable/Spinner/DataLoadSpinner";


interface IReportProps {
  departmentData: any,
  companyData: any,
  shiftData: any,
  setCurrentCompanyID: any,
  setCurrentDepartmentID: any,
  isTodayAttendance: boolean
  setIsTodayAttendance: any,
  attendances: any
}

const ReportInitialValue = {
  company: '',
  department: '',
  shift: '',
  startDate: '',
  endDate: ''
}

const Report: React.FC<IReportProps> = (props) => {
  const {
    setCurrentCompanyID,
    setCurrentDepartmentID,
    departmentData,
    companyData,
    shiftData,
    isTodayAttendance,
    setIsTodayAttendance,
    attendances
  } = props

  const [filterRangeDateAttendance] = useMutation(FILTER_ATTENDANCE);
  const [rangeDateAttendanceData, setRangeDateAttendanceData] = useState<any>()
  const [isLoadingDateFilter, setIsLoadingDateFilter] = useState<boolean>(false)
  const handleFilterData = async (values: any, props: any) => {
    setIsTodayAttendance(false)
    const res = await filterRangeDateAttendance({
      variables: {
        startDate: values.startDate,
        endDate: values.endDate,
      }
    })
    setRangeDateAttendanceData(res)
    console.log(values.startDate, "checking Date");
  }

  const handleReset = (resetForm:any)=>{
    setIsTodayAttendance(true)
    resetForm()
  }

  return (

    <>
      <div>

        <Formik
          initialValues={ReportInitialValue}
          validationSchema={reportFromValidation}
          onSubmit={handleFilterData}
        >
          {({
            touched,
            values,
            setFieldValue,
            errors,
            isSubmitting,
            resetForm
          }) => {
            return (
              <Form>
                <div className="grid grid-cols-5 gap-2">
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
                  <div className="col-start-4">
                  <DatePicker
                    name={"startDate"}
                    label={"Start Date"}
                    values={values}
                    touched={touched}
                    errors={errors}
                    setFieldValue={setFieldValue}
                    />
                    </div>
                  <DatePicker
                    name={"endDate"}
                    label={"End Date"}
                    values={values}
                    touched={touched}
                    errors={errors}
                    setFieldValue={setFieldValue}
                  />
                </div>
                <div className="space-x-4">
                  <PrimaryButton text={isSubmitting ? <Spinner /> : "Submit"} />
                  {!isTodayAttendance &&
                    <PrimaryButton type={"button"} onClick={() => handleReset(resetForm)} text={"Reset"} />
                  }
                </div>
              </Form>
            )

          }}
        </Formik>
      </div>
      <div className={"mt-5"}>
        {isTodayAttendance ?
          <>
            <Card title={"Today Attendance"}>
              <TodayAttendance attendances={attendances} />
            </Card>
          </>
          :
          <>
            {isLoadingDateFilter ? <DataLoadSpinner /> :
              <FilterAttendance
                rangeDateAttendanceData={rangeDateAttendanceData?.data?.filterAttendance}
              />
            }
          </>
        }
      </div>
    </>
  )
}

export default Report;