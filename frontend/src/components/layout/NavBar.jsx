import { useState, useEffect } from "react";
import mainLogo from "../../assets/images/ellesPay_logos/mainLogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll)
  }, []);

  return (
    <nav className={`sticky top-0 w-full z-50 backdrop-blur-md transition-colors duration-300 ${scrolled ? "bg-white/30 shadow-md" : "bg-transparent"}  pt-2 flex justify-between px-2 items-center relative  pb-4 text-black`}>
      <img className="w-40 cursor-pointer" src={mainLogo} alt="Logo" />

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden focus:outline-none text-white"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-8 h-8 text-[#2E5B4E]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Desktop Links */}
      <div className="hidden md:flex space-x-15 ">
        <Link
          to="/"
          className="hover:border-b-2 hover:border-[#2E5B4E] transition-transform duration-300 ease-in hover:-translate-y-1 "
          href="/"
        >
          Home
        </Link>
        <Link
          to=""
          className="hover:border-b-2 hover:border-[#2E5B4E] transition-transform duration-300 ease-in hover:-translate-y-1"
          href="/services"
        >
          Services
        </Link>
        <Link
          className="hover:border-b-2  hover:border-[#2E5B4E] transition-transform duration-300 ease-in hover:-translate-y-1"
          href="/contact"
        >
          Contact
        </Link>
        <Link
          className="hover:border-b-2  hover:border-[#2E5B4E] transition-transform duration-300 ease-in hover:-translate-y-1"
          href="/about-us"
        >
          About us
        </Link>
      </div>

      <div className="hidden md:flex space-x-8">
        <Link
          to="/register"
          className="rounded-md border-1 p-3 bg-[#ED0D93] transition-transform duration-300 ease-in-out  hover:-translate-y-1 hover:shadow-lg"
          href="/register"
        >
          Get Started
        </Link>
        <Link
          className="rounded-md p-3 border-1 border-black bg-[#ED0D9342] transition-transform duration-300 ease-in-out  hover:-translate-y-1 hover:shadow-lg hover:text-black"
          to={"/login"}  
        >
          Login
        </Link>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-full left-0 w-full lg:hidden flex flex-col items-center py-5 space-y-4">
          <Link className="hover:border-b-2 hover:border-[#ED0D93]" href="/">
            Home
          </Link>
          <Link
            className="hover:border-b-2 hover:border-[#ED0D93]"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="hover:border-b-2 hover:border-[#ED0D93]"
            href="/contact"
          >
            Contact
          </Link>
          <Link
            className="hover:border-b-2 hover:border-[#ED0D93]"
            href="/about-us"
          >
            About us
          </Link>
          <Link
            className="rounded-xl p-3 bg-bluegreen hover:bg-white"
            href="/started"
          >
            Get Started
          </Link>
          <Link
            className="rounded-xl p-3 border-2 border-white hover:bg-white hover:text-black"
            href="/talk"
          >
            Login
          </Link>
        </div>
      )}
    </nav>
  );
}
