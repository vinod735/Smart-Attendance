import React from 'react'
import {Link, Outlet} from "react-router-dom";

const AuthLayout: React.FC<any> = () => {
  return (
    <div className="h-screen pb-2 px-2 md:px-0 overflow-hidden" style={{
      backgroundColor: "#9921e8",
      backgroundImage: "linear-gradient(315deg, #9921e8 0%, #5f72be 74%)"
    }}>
      <div className="max-w-lg mx-auto mt-12">
        <Link to="#">
          <h1
            className="text-4xl font-bold text-white text-center">DibTech</h1>
        </Link>
      </div>

      <div
        className="bg-white max-w-md mx-auto p-8 mt-10 rounded-lg shadow-2xl">
        <section>
          <h3 className="font-bold text-2xl">Welcome to Smart Attendance</h3>
          <p className="text-gray-600 pt-2">Sign in to your account.</p>
        </section>

        <section className="mt-10">
          <Outlet/>
        </section>
      </div>

      {/*<div className="max-w-lg mx-auto text-center mt-12 mb-6">
        <p className="text-white">Don't have an account?
          <Link to="#" className="font-bold hover:underline">Sign up</Link>.
        </p>
      </div>

      <footer className="max-w-lg mx-auto flex justify-center text-white">
        <Link to="#" className="hover:underline">Contact</Link>
        <span className="mx-3">•</span>
        <Link to="#" className="hover:underline">Privacy</Link>
      </footer>*/}
    </div>
  )
}

export default AuthLayout
