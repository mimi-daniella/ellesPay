import React from "react";
import Navbar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import "./Home.css";
import handCard from "../../assets/images/ellesPay_logos/hand&Card.png";
import InfoCards from "../../components/InfoCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-6xl md:text-7xl  text-center mt-5 slogan ">
        Global Payments Simplified!
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
        {/* Left Section: Text */}
        <section className="items-center justify-center ml-4 md:ml-10 mt-5 text-center md:text-left">
          <div className="relative inline-block mt-8 md:mt-12">
            {/* Top-Right Corner (The 7) */}
            <span className="absolute -top-4 -right-4 w-6 h-6 border-t-6 border-r-6 border-[var(--color-brown)]" />

            {/* Bottom-Left Corner (The L) */}
            <span className="absolute -bottom-4 -left-4 w-6 h-6 border-b-6 border-l-6 border-[var(--color-brown)]" />

            <p className="text-lg md:text-2xl px-2 md:px-6">
              Send and recieve money across <br /> borders in seconds. Safe,
              fast <br /> and reliable payments <br />
              that connect you to the world.
            </p>
          </div>
        </section>

        {/* Right Section: Image */}
        <img
          src={handCard}
          alt="Hand holding bank card"
          className="w-78 h-78 md:w-106 md:h-96 mt-6 md:mt-0"
        />
      </div>

      {/* Button placed separately at the bottom */}
      <div className="flex justify-center mt-[-10px] mb-7 md:mt-[-80px] ">
        <button className="py-4 px-6 bg-[var(--color-blue-dark)] text-center transition duration-500 ease-in-out transform hover:-translate-y-2 hover:translate-x-2 hover:scale-110">
          Get Started Free
        </button>
      </div>
      <h2 className="text-5xl text-center mb-5 md:leading-[1.2]">
        ..." low rates,
        <span className="bg-gradient-to-r from-[var(--color-blue-light)] to-[var(--color-brown)] bg-clip-text text-transparent">
          &nbsp; zero
        </span>
        <br /> stress"
      </h2>
      <InfoCards />
      <Footer />
    </>
  );
}
