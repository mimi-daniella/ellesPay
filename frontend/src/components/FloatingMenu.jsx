import { useState } from "react";
import { Link } from "react-router-dom";
import {
  PlusIcon,
  HomeIcon,
  InformationCircleIcon,
  EnvelopeIcon,
  UserPlusIcon,
} from "@heroicons/react/24/solid";

export default function FloatingMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-end space-y-3">
      {/* Expanded Buttons */}
      {open && (
        <div className="flex flex-col items-end space-y-3 mb-3">
          <Link
            to={"/"}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
          >
            <HomeIcon className="h-5 w-5" /> <span>Home</span>
          </Link>
          <Link
            to={"/about"}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition"
          >
            <InformationCircleIcon className="h-5 w-5" /> <span>About</span>
          </Link>
          <Link
            to={"/contact"}
            className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-purple-700 transition"
          >
            <EnvelopeIcon className="h-5 w-5" /> <span>Contact</span>
          </Link>
          <Link
            to={"/register"}
            className="flex items-center space-x-2 bg-[var(--color-brown)] text-white px-4 py-2 rounded-full shadow-lg hover:bg-[brown] transition"
          >
            <UserPlusIcon className="h-5 w-5" /> <span>Sign Up</span>
          </Link>
        </div>
      )}


      {/* Floating Action Button */}
      <div className="relative">
        {/* Pulse Ring */}
        <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>

        {/* Actual Button */}
        <button
          onClick={() => setOpen(!open)}
          className="relative bg-red-600 text-white p-4 rounded-full shadow-xl hover:bg-red-700 transition transform hover:rotate-90 cursor-pointer"
        >
          <PlusIcon className="h-6 w-6" />
        </button>
      </div>
    </div>
  );
}
