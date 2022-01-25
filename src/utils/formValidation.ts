import * as Yup from "yup";

const categoryFormValidationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
});

const loginFormValidationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  password: Yup.string().required("Password is required"),
});

const departmentFormValidationSchema = Yup.object({
  company: Yup.string().required("Company name is required"),
  departmentName: Yup.string().required("Department Name is required"),
  address: Yup.string().required("Location is required"),
  // HOD: Yup.string().required("HOD is required"),
})

const shiftFormValidationSchema = Yup.object({
  // company: Yup.string().required("Company name is required"),
  // department: Yup.string().required("Department name is required"),
  shiftName: Yup.string().required("Shift Name is required"),
})

const settingFormValidationSchema = Yup.object({
  company: Yup.string().required("Company is required"),
  graceBeforeCheckIn: Yup.string().required("Grace before check in is required"),
  graceAfterCheckIn: Yup.string().required("Grace after check in is required"),
  graceBeforeCheckOut: Yup.string().required("Grace before checkout is required"),
  graceAfterCheckOut: Yup.string().required("Grace after checkout is required")
})

const companyFormValidationSchema = Yup.object({
  company: Yup.string().required("Company Name is required"),
  address: Yup.string().required("Address is required"),
  country: Yup.string().required("Country is reuqired"),
  city: Yup.string().required("City is required"),
  postalCode: Yup.string().required("Postacl Code is required"),
})

const emplyeeFormValidationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  middleName:Yup.string(),
  lastName:Yup.string().required("Last Name is required"),
  email: Yup.string().required("Email is required"),
  hireDate: Yup.string().required("Hire Date is required"),
  mobileNumber:Yup.string().required("Mobile Number is required"),
  company:Yup.string().required("Company Name is required"),
  department:Yup.string().required("Department Name is required"),
  shift:Yup.string().required("Shift Name is required"),
  jobTitle:Yup.string().required("Job Title/Designation is required"),
  workLocation:Yup.string().required("Work Location is required"),
  sourceOfHire:Yup.string(),
  salary:Yup.string().required("Salary is required"),
  payType:Yup.string().required("Pay Type is required"),
  workPhone:Yup.string().required("Work Phone Name is required"),
  bloodGroup:Yup.string(),
  spouseName:Yup.string(),
  fatherName:Yup.string(),
  motherName:Yup.string(),
  otherEmail:Yup.string(),
  dob:Yup.string().required("Date of Birth is required"),
  nationality:Yup.string(),
  gender:Yup.string().required("Gender is required"),
  maritalStatus:Yup.string(),
  drivingLiscense:Yup.string(),
  hobbies:Yup.string(),
  website:Yup.string(),
  employeeCity:Yup.string(),
  employeeCountry:Yup.string(),
  employeeProvince:Yup.string(),
  employeePostCode:Yup.string()
})

const reportFromValidation = Yup.object({
  company: Yup.string().required("Company Name is required"),
  department: Yup.string().required("Department Name is required"),
  shift: Yup.string().required("Shift Name is required"),
  startDate:Yup.string().required("Start Date is required"),
  endDate:Yup.string().required("End Date is required"),
})

export {emplyeeFormValidationSchema,companyFormValidationSchema, shiftFormValidationSchema, categoryFormValidationSchema, loginFormValidationSchema, departmentFormValidationSchema, settingFormValidationSchema,reportFromValidation }
