import React from "react";
import Navbar from "../../components/layout/NavBar";
import Footer from "../../components/layout/Footer";
import "./Home.css";
import handCard from "../../assets/images/ellesPay_logos/handCard.png";
import InfoCards from "../../components/InfoCards";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1 className="text-7xl  text-center mt-5 slogan">
        Global Payments Simplified!
      </h1>

      <div className="flex justify-between">
        <section className="items-center justify-center ml-10 mt-5">
          <div className="relative inline-block mt-12 mx-auto mx-4">
            {/* Top-Right Corner (The 7) */}
            <span className="absolute -top-4 -right-4 w-6 h-6 border-t-6 border-r-6 border-[#2E5B4E] " />

            {/* Bottom-Left Corner (The L) */}
            <span className="absolute -bottom-4 -left-4 w-6 h-6 border-b-6 border-l-6 border-[#2E5B4E]" />

            <p className="text-center text-2xl px-6">
              Send and recieve money across <br /> borders in seconds.
              Safe, fast <br /> and reliable payments <br />
              that connect you to the world.
            </p>
          </div>

          <button className="py-6 px-6 mx-45 mt-15 bg-[#ED0D93] text-center transition duration-500 ease-in-out transform hover:-translate-y-2 hover:translate-x-2 hover:scale-110">
            Get Started Free
          </button>
        </section>
        <img
          src={handCard}
          alt="Hand holding bank card"
          className="w-120 h-120 "
        />
      </div>
      <h2 className="text-5xl text-center mt-[-100px] tracking-wide leading-[1.2] mb-5">
       ..." low rates,     
        <span className="bg-gradient-to-r from-[#666666] to-[#ED0D93] bg-clip-text text-transparent">
           &nbsp; zero
        </span>{" "}
        <br /> stress"
      </h2>
      <InfoCards />
      <Footer />
    </>
  );
}
