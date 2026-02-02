import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import {Field, ErrorMessage}  from "formik"

export default function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <span className="text-sm font-bold">Password</span>
      <Field
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Enter a strong password"
        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
      />
      {/* eye icon toggle */}
      <button
        type="button"
        title="showPassword"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-[var(--color-brown)] cursor-pointer"
      >
        {showPassword ? (
          <EyeIcon className="h-5 w-5" />
        ) : (
          <EyeSlashIcon className="h-5 w-5" />
        )}
      </button>

      <ErrorMessage 
        name="password"
        component="div"
        className="text-red-500 text-sm mt-1 text-center"
      />
    </div>
  );
}
