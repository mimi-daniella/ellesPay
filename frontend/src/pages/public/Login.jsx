import React from "react";
import { Link } from "react-router-dom";
import signupLady from "../../assets/images/doodles/signupLady.png";
import HomeButton from "../../components/FloatingHomeButton";
import PasswordField from "../../components/layout/PasswordField";

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center ">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Welcome Back
            </h1>
            <br />
            <p className="text-gray-600">Login to your account</p>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <PasswordField/>
                <button className="mt-5 tracking-wide font-semibold bg-[var(--color-blue-dark)] text-gray-100 w-full py-4 rounded-lg hover:bg-[var(--color-blue-light)] hover:-translate-x-2 hover:-translate-y-1 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Log In</span>
                </button>
                <p className="mt-2 text-[13px] text-gray-600 text-center leading-5 tracking-wider">
                <Link  className="border-b border-gray-500 border-dotted text-blue-500 hover:text-[var(--color-brown)] text-[13px]" href="#">
                  Use phone Number instead
                </Link>
                <br/>
                  Don't have an account? <br />
                  <Link
                    to={"/register"}
                    className="border-b border-gray-500 border-dotted text-blue-500 hover:text-[var(--color-brown)]"
                  >
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          className="m-12 xl:m-16 w-[550px] bg-contain bg-center bg-no-repeat rounded-lg ml-[-10px] hidden md:block"
          src={signupLady}
        />
      </div>
      <HomeButton />
    </div>
  );
}
