import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

export default function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-full">
      <input
        className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 
                   placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 
                   focus:bg-white mt-5"
        type={showPassword ? "text" : "password"}
        placeholder="Password"
      />
      {/* eye icon toggle */}
      <button
        type="button"
        title="show password"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-[var(--color-brown)]"
      >
        {showPassword ? (
          <EyeSlashIcon className="h-5 w-5" />
        ) : (
          <EyeIcon className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}
