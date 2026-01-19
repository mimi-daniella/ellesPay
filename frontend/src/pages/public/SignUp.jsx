import {useState} from "react";
import { Link } from "react-router-dom";
import signupLady from "../../assets/images/doodles/signupLady2.jpeg";
import HomeButton from "../../components/FloatingHomeButton";
import PassswordField from "../../components/layout/PasswordField"; 

export default function SignUp() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">
              Create an Account
            </h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                {/* password input */}
                <PassswordField />


                <button className="mt-5 tracking-wide font-semibold bg-[var(--color-blue-dark)] text-gray-100 w-full py-4 rounded-lg hover:bg-[var(--color-blue-light)] hover:translate-x-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center  focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 ml-2"
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
                  <span className="ml-3">Sign Up</span>
                </button>

                <p className="mt-6 text-[13px] text-gray-600 text-center leading-5 tracking-wider">
                  Already have an account? <br />
                  <Link
                    to={"/login"}
                    className="border-b border-gray-500 border-dotted text-blue-500 hover:text-[var(--color-brown)]"
                  >
                    Log in
                    <span className="text-black border-b border-white ">
                      &nbsp; instead
                    </span>
                  </Link>
                </p>

                <p className="mt-6 text-[13px] text-gray-600 text-center leading-5 tracking-wider">
                  I agree to abide by EllesPay's <br />
                  <Link
                    href="#"
                    className="border-b border-gray-500 border-dotted text-blue-500 hover:text-[var(--color-brown)]"
                  >
                    Terms of Service
                  </Link>
                  &nbsp; and its &nbsp;
                  <Link
                    href="#"
                    className="border-b border-gray-500 border-dotted text-blue-500 hover:text-[var(--color-brown)]"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        <img
          className="m-12 xl:m-16 w-[400px] bg-contain bg-center bg-no-repeat rounded-lg hidden md:block"
          src={signupLady}
        />
      </div>
      <HomeButton />
    </div>
  );
}
