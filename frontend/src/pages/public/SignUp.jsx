import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import signupLady from "../../assets/images/doodles/signupLady2.jpeg";
import HomeButton from "../../components/FloatingHomeButton";
import PasswordField from "../../components/layout/PasswordField";
import { toast } from "sonner";

const registerSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
});

export default function SignUp() {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ email: "", password: "", phoneNumber: "" }}
      validationSchema={registerSchema}
      onSubmit={async (values, { setSubmitting, setStatus }) => {
        try {
          const res =toast.promise(
            axios.post("http://localhost:5000/auth/register", values),
            {
              loading: "Sending OTP...",
              success: "OTP sent! Please verify your email.",
              error: (err) => {
                // ✅ Show backend error messages clearly
                if (err.response?.data?.code === "EMAIL_IN_USE") {
                  return "This email is already registered";
                }
                if (err.response?.data?.code === "PHONE_IN_USE") {
                  return "This phone number is already registered";
                }
                return err.response?.data?.message || "Registration failed";
              },
            },
          );

          // ✅ Save email + token if backend returns them
          localStorage.setItem("userEmail", values.email);
          if (res.data?.token) {
            localStorage.setItem("token", res.data.token);
          }

          // ✅ Navigate to verify-email page
          setTimeout(() => {
            navigate("/verify-email", { state: { email: values.email } });
          }, 2000);
        } catch (err) {
          const apiErrors = err.response?.data?.errors;
          if (apiErrors?.length) {
            setStatus(
              apiErrors.map((e) => `${e.field}: ${e.message}`).join(" | "),
            );
          } else {
            setStatus(err.response?.data?.message || "Registration failed");
          }
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, status }) => (
        <Form>
          <div className="min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center ">
            <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
              <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                <div className=" flex flex-col items-center">
                  <h1 className="text-2xl xl:text-3xl font-extrabold">
                    Create an Account
                  </h1>
                  <div className="w-full flex-1 mt-8">
                    <div className="mx-auto max-w-xs">
                      {/* Email field */}
                      <span className="text-sm font-bold">Email</span>
                      <Field
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-4"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm mt-1 text-center"
                      />

                      <span className="text-sm font-bold">Phone Number</span>
                      <Field
                        name="phoneNumber"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mb-4"
                      />
                      <ErrorMessage
                        name="phoneNumber"
                        component="div"
                        className="text-red-500 text-sm mt-1 text-center"
                      />

                      {/* Password field */}
                      <PasswordField />

                      {/* Submit button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="mt-5 tracking-wide font-semibold bg-[var(--color-blue-dark)] text-gray-100 w-full py-4 rounded-lg hover:bg-[var(--color-blue-light)] hover:translate-x-2 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none cursor-pointer"
                      >
                        Next
                      </button>
                      {status && (
                        <p
                          className={`text-sm mt-2 text-center ${
                            status.toLowerCase().includes("success")
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {status}
                        </p>
                      )}

                      {/* Links */}
                      <p className="mt-4 text-[13px] text-gray-600 text-center leading-5 tracking-wider">
                        Already have an account? &nbsp;
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

                      <p className="mt-2 text-[13px] text-gray-600 text-center leading-5 tracking-wider">
                        I agree to abide by EllesPay's <br />
                        <Link
                          to={"/terms-of-service"}
                          className="border-b border-gray-500 border-dotted text-blue-500 hover:text-[var(--color-brown)]"
                        >
                          Terms of Service
                        </Link>
                        &nbsp; and its &nbsp;
                        <Link
                          to={"/privacy-policy"}
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
        </Form>
      )}
    </Formik>
  );
}
