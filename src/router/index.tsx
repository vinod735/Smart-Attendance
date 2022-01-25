import {Route, Routes} from 'react-router-dom';
import {lazy} from "react";

const Login = lazy(() => import('../pages/Auth/Login'));
const Dashboard = lazy(() => import('../pages/Dashboard/Dashboard'));
const NotFound = lazy(() => import( '../pages/Error/NotFound'));
const PrivateRoute = lazy(() => import( './PrivateRoute'));
const AuthLayout = lazy(() => import( "../layputs/AuthLayout"));
const DashboardLayout = lazy(() => import( "../layputs/DashboardLayout"));
const Department = lazy(() => import( '../pages/Department/Department'));
const AddDepartment = lazy(() => import( '../pages/Department/AddDepartment'));
const EditDepartment = lazy(() => import( '../pages/Department/EditDepartment'));
const Company = lazy(() => import( '../pages/Company/Company'));
const DashboardNotFound = lazy(() => import( '../pages/Error/DashboardNotFound'));
const Setting = lazy(() => import( "../pages/Settings/Setting"));
const AddSetting = lazy(() => import( "../pages/Settings/AddSetting"));
const Shift = lazy(() => import( '../pages/Shift/Shift'));
const AddShift = lazy(() => import( '../pages/Shift/AddShift'));
const EditShift = lazy(() => import( '../pages/Shift/EditShift'));
const Designation = lazy(() => import( '../pages/Designation/Designation'));
const Employee = lazy(() => import( '../pages/Employee/Employee'));
const AddCompany = lazy(() => import( '../pages/Company/AddCompany'));
const EditCompany = lazy(() => import( '../pages/Company/EditCompany'));
const EditDesignation = lazy(() => import( '../pages/Designation/EditDesignation'));
const AddDesignation = lazy(() => import( '../pages/Designation/AddDesignation'));
const AddEmployee = lazy(() => import( '../pages/Employee/AddEmployee'));
const ReportPage = lazy(() => import( '../pages/Report/Report'));
const DetailsDepartment = lazy(() => import( '../pages/Department/DetailDepartment'));
const DetailEmployee = lazy(() => import( '../pages/Employee/DetailEmployee'));
// https://adarshaacharya.com.np/blog/role-based-auth-with-react-router-v6

/**
 * Top level application router
 *
 * @returns {Component}
 */
const Router = () => {
  return (
    <Routes>
      <Route element={<AuthLayout/>}>
        <Route path="/login" element={<Login/>}/>
      </Route>
      <Route
        element={
          <PrivateRoute>
            <DashboardLayout/>
          </PrivateRoute>
        }
      >
        <Route path={"/"} element={<Dashboard/>}/>
        <Route path={"/company"} element={<Company/>}/>
        <Route path={"/company/create"} element={<AddCompany/>}/>
        <Route path={"/company/edit/:id"} element={<EditCompany/>}/>
        <Route path={"/department"} element={<Department/>}/>
        <Route path={"/department/create"} element={<AddDepartment/>}/>
        <Route path={"/department/edit/:id"} element={<EditDepartment/>}/>
        <Route path={"/department/detail/:id"} element={<DetailsDepartment/>}/>
        <Route path={"/shift"} element={<Shift/>}/>
        <Route path={"/shift/create"} element={<AddShift/>}/>
        <Route path={"/shift/edit/:id"} element={<EditShift/>}/>
        <Route path={"/employee"} element={<Employee/>}/>
        <Route path={"/employee/create"} element={<AddEmployee/>}/>
        {/* <Route path={"/employee/edit"} element={<EditEmployee/>}/> */}
        <Route path={"/employee/detail/:id"} element={<DetailEmployee/>}/>
        <Route path={"/designation"} element={<Designation/>}/>
        <Route path={"/designation/create"} element={<AddDesignation/>}/>
        <Route path={"/designation/edit/:id"} element={<EditDesignation/>}/>
        <Route path={"/setting"} element={<Setting/>}/>
        <Route path={"/setting/create"} element={<AddSetting/>}/>
        <Route path={"/report"} element={<ReportPage/>}/>
        <Route path="/*" element={<DashboardNotFound/>}/>
      </Route>
      <Route path="/*" element={<NotFound/>}/>
    </Routes>
  );
};

export default Router
