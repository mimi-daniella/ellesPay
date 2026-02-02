import Building from "../../assets/images/illustrations/building.jpeg";
import Merchant from "../../assets/images/illustrations/merchant.jpeg";
import Security from "../../assets/images/illustrations/security.jpeg";
import Utility from "../../assets/images/illustrations/utility.jpeg";
import "./Services.css";
import FloatingMenu from "../../components/FloatingMenu";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <div className="px-4" data-aos="fade-in">
        <h2 className="font-bold text-4xl text-center mt-6 text-[var(--color-blue-dark)]">
          Your Trusted Payment Partner
        </h2>
        <p className="font-bold text-3xl text-center mt-4">
          Here at ellesPay, we offer you:
        </p>

        {/* first block */}
        <div
          className="flex flex-col sm:flex-row mt-10 justify-between px-4 sm:gap-15 sm:px-4 md:px-10"
          data-aos="fade-up"
        >
          <img
            src={Building}
            alt="image of a sky scraper"
            className="w-[550px] h-[350px] mb-4 md:w-[400px] sm:h-[400px] shadow-lg "
            data-aos="fade-right"
          />
          <div className="flex flex-col md:ml-8">
            <h3 className="font-bold text-3xl">Instant Transfers</h3>
            <p className="text-lg mt-6">
              We offer a secure and reliable payment <br /> gateway that allows
              you to make payments <br /> from anywhere in the world in seconds.{" "}
              <br /> We use the most secure payment gateway <br /> available in
              the industry .
            </p>
          </div>
        </div>

        {/* second block */}
        <div
          className="flex flex-col sm:flex-row mt-10 justify-between px-4 sm:gap-15 sm:px-4 md:px-10 service-reverse"
          data-aos="fade-up"
        >
          <img
            src={Merchant}
            className="w-[550px] h-[350px] mb-4 md:w-[400px] sm:h-[400px] shadow-lg"
            data-aos="fade-left"
          />
          <div className="flex flex-col md:ml-8">
            <h3 className="font-bold text-3xl">Merchant Solutions</h3>
            <p className="text-lg mt-6">
              Accept card, mobile, and online payments <br /> with ease. Sign
              up, request a card, & get it <br /> delivered to your doorstep in
              less than 3 days! <br /> With real-time settlement & detailed
              analytics, <br /> you can focus on growing your business <br />{" "}
              while we handle the transactions.
            </p>
          </div>
        </div>

        {/* third block */}
        <div
          className="flex flex-col sm:flex-row mt-10 justify-between px-4 sm:gap-15 sm:px-4 md:px-10"
          data-aos="zoom-in-up"
        >
          <img
            src={Security}
            alt="security icon"
            className="w-[550px] h-[350px] mb-4 md:w-[400px] sm:h-[400px] shadow-lg"
          />
          <div className="flex flex-col md:ml-8">
            <h3 className="font-bold text-3xl">Fraud Protection</h3>
            <p className="text-lg mt-6">
              Your safety is our priority! <br /> Our fraud protection system
              uses AI-driven <br /> monitoring, multi-factor authentication,{" "}
              <br /> & real-time alerts to safeguard <br /> every transaction.
              Whether you're <br /> sending money or receiving payments, <br />{" "}
              we ensure your funds and data remain <br />
              secure against evolving threats.
            </p>
          </div>
        </div>

        {/* fourth block */}
        <div
          className="flex flex-col sm:flex-row mt-10 justify-between px-10 sm:gap-15 sm:px-4 service-reverse pb-10"
          data-aos="fade-up"
        >
          <img
            src={Utility}
            alt="utility bills"
            className="w-[550px] h-[350px] mb-4 md:w-[400px] sm:h-[400px] shadow-lg"
          />
          <div className="flex flex-col md:ml-8">
            <h3 className="font-bold text-3xl">Bill Payments</h3>
            <p className="text-lg mt-6">
              From electricity and water to subscriptions <br /> and school
              fees, pay all your bills in one place. <br />
              Our platform makes recurring payments <br />
              effortless, with reminders and instant confirmations <br /> so you
              never miss a due date. <br /> Manage your life's essentials with
              just a few taps.
            </p>
          </div>
        </div>
      </div>
      <FloatingMenu />
    </>
  );
}
