import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { toast } from "sonner";

const otpSchema = Yup.object({
  emailToken: Yup.string()
    .required("OTP is required")
    .length(4, "OTP must be 4 digits"),
});

export default function EmailOTP() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || localStorage.getItem("userEmail");
  const [timeLeft, setTimeLeft] = useState(120);
  const [verified, setVerified] = useState(false);

  // countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">Verify OTP</h1>
        <p className="mb-6">
          Enter the OTP sent to your email:
          <span className="font-bold text-blue-600"> &nbsp; {email}</span>
        </p>

        {/* ✅ OTP Form */}
        <Formik
          initialValues={{ emailToken: "" }}
          validationSchema={otpSchema}
          onSubmit={async (values, { setStatus }) => {
            try {
              const res = await axios.post(
                "http://localhost:5000/auth/verify-email",
                {
                  email,
                  token: values.emailToken.toString().trim(),
                },
              );
              setStatus(res.data.message);
              if (res.status === 200) {
                setVerified(true);
                toast.success("Email verified successfully!");
                localStorage.removeItem("userEmail");
                setTimeout(() => {
                  navigate("/login");
                }, 800);
              }
            } catch (err) {
              setStatus(err.response?.data?.message || "Verification failed");
            }
          }}
        >
          {({ status }) => (
            <Form>
              <div className="mb-4">
                <Field
                  name="emailToken"
                  type="text"
                  placeholder="Enter OTP"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                />
                <ErrorMessage
                  name="emailToken"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300 cursor-pointer"
              >
                Verify OTP
              </button>

              {status && (
                <p
                  className={`text-sm mt-2 ${
                    status.toLowerCase().includes("success")
                      ? "text-green-500"
                      : "text-red-500"
                  }`}
                >
                  {status}
                </p>
              )}
            </Form>
          )}
        </Formik>

        {/* ✅ Resend OTP */}
        {/* ✅ Resend OTP */}
        <button
          disabled={verified || timeLeft > 0}
          onClick={async () => {
            try {
              await axios.post("http://localhost:5000/auth/resend-token", {
                email,
              });
              toast.success("OTP resent successfully!");
              setTimeLeft(120); // reset countdown
            } catch (err) {
              toast.error(
                err.response?.data?.message || "Failed to resend OTP",
              );
            }
          }}
          className="mt-4 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Resend OTP
        </button>

        <p className="text-sm text-gray-500 mt-4">
          OTP expires in <span>{timeLeft}</span> seconds.
        </p>
      </div>
    </div>
  );
}
