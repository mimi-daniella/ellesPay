import React, { useState, useEffect } from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  PaperAirplaneIcon,
  ChatBubbleLeftRightIcon,
  ChevronDownIcon,
  UserCircleIcon,
  ShieldCheckIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Megaphone from "../../assets/images/illustrations/megaphone.png";
import Logo from "../../assets/images/ellesPay_logos/mainLogo.png";
import FloatingMenu from "../../components/FloatingMenu";
import Aos from "aos";
import "aos/dist/aos.css";

const ContactPage = () => {
  useEffect(() => {
    Aos.init({ duration: 800, once: true, easing: "ease-in-out" });
  });

  const [activeTab, setActiveTab] = useState("client");
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      q: "How do I reset my ellesPay transaction PIN?",
      a: "Navigate to Settings > Security > Reset PIN. You will need to verify your identity via SMS or Biometrics.",
    },
    {
      q: "Are international transfers supported?",
      a: "Yes, ellesPay supports SWIFT and SEPA transfers to over 120 countries with real-time conversion rates.",
    },
    {
      q: "What should I do if I lose my physical card?",
      a: "Freeze your card immediately in the 'Cards' tab of the app and request a replacement.",
    },
  ];

  return (
    <>
      <div
        className="min-h-screen bg-[#f8fafc] text-slate-900"
        data-aos="fade-up"
      >
        {/* Hero Section */}
        <header className="bg-gradient-to-r from-black to-gray-400 text-white py-0 px-6 text-center border-b-4 border-[var(--color-brown)]">
          <div className="flex items-center justify-center">
            <img src={Logo} alt="logo" className="w-15 md:w-20 mr-auto" />
            <h1 className="text-2xl md:text-5xl font-extrabold tracking-tight">
              ellesPay Concierge
            </h1>
            <img
              src={Megaphone}
              alt="megaphone and notifications"
              className="w-[170px] h-[50px] md:w-[250px] h-[200px]"
            />
          </div>
          <p className="text-blue-100 max-w-2xl mx-auto text-lg font-light">
            Premium support for your premier banking experience.
          </p>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-12 -mt-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar:  */}
            <div className="lg:col-span-1 space-y-6">
              <section className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
                <h2 className="text-xl font-bold text-[var(--color-blue-dark)] mb-6 flex items-center gap-2">
                  <ChatBubbleLeftRightIcon className="h-6 w-6 text-[var(--color-brown)]" />
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="bg-slate-100 p-3 rounded-full group-hover:bg-[var(--color-brown)] group-hover:text-white transition-colors">
                      <PhoneIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-400">
                        24/7 Priority
                      </p>
                      <p className="font-medium text-[var(--color-blue-dark)]">
                        +1 (800) ELLES-PAY
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="bg-slate-100 p-3 rounded-full group-hover:bg-[var(--color-brown)] group-hover:text-white transition-colors">
                      <EnvelopeIcon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs uppercase font-bold text-slate-400">
                        Secure Email
                      </p>
                      <p className="font-medium text-[var(--color-blue-dark)]">
                        wealth@ellespay.com
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="bg-white p-8 rounded-xl shadow-md border border-slate-200">
                <div className="relative mb-6">
                  <input
                    type="text"
                    placeholder="Search help topics..."
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[var(--color-brown)]"
                  />
                  <MagnifyingGlassIcon className="h-5 w-5 text-slate-400 absolute left-3 top-2.5" />
                </div>
                <div className="space-y-2">
                  {faqs.map((faq, idx) => (
                    <div
                      key={idx}
                      className="border-b border-slate-50 last:border-0"
                    >
                      <button
                        onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                        className="w-full py-4 flex justify-between items-center text-left transition-all"
                      >
                        <span className="text-sm font-semibold text-slate-700">
                          {faq.q}
                        </span>
                        <ChevronDownIcon
                          className={`h-4 w-4 text-[var(--color-brown)] transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                        />
                      </button>
                      {openFaq === idx && (
                        <div className="pb-4 text-sm text-slate-500 leading-relaxed animate-fadeIn">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Main Interaction Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-slate-200">
                {/* Tab Navigation */}
                <div className="flex bg-slate-50 border-b border-slate-200">
                  <button
                    onClick={() => setActiveTab("client")}
                    className={`flex-1 py-5 px-6 font-bold text-sm flex items-center justify-center gap-2 border-b-2 transition-all ${activeTab === "client" ? "border-[var(--color-brown)] text-[var(--color-blue-dark)] bg-white" : "border-transparent text-slate-400 hover:bg-slate-100"}`}
                  >
                    <UserCircleIcon className="h-5 w-5" /> CLIENT PORTAL
                  </button>
                  <button
                    onClick={() => setActiveTab("admin")}
                    className={`flex-1 py-5 px-6 font-bold text-sm flex items-center justify-center gap-2 border-b-2 transition-all ${activeTab === "admin" ? "border-[var(--color-brown)] text-[var(--color-blue-dark)] bg-white" : "border-transparent text-slate-400 hover:bg-slate-100"}`}
                  >
                    <ShieldCheckIcon className="h-5 w-5" /> ADMIN OVERRIDE
                  </button>
                </div>

                <div className="p-8 md:p-12">
                  {activeTab === "client" ? (
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-2xl font-bold text-[var(--color-blue-dark)]">
                          Secure Correspondence
                        </h3>
                        <p className="text-slate-500">
                          Submit an official inquiry to our banking specialists.
                        </p>
                      </div>

                      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-1">
                          <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">
                            Full Legal Name
                          </label>
                          <input
                            type="text"
                            className="w-full p-4 rounded-lg border border-slate-200 focus:border-[var(--color-blue-dark)] outline-none bg-slate-50 shadow-sm"
                            placeholder="e.g., Alexandra Elles"
                          />
                        </div>
                        <div className="md:col-span-1">
                          <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">
                            Account Reference
                          </label>
                          <input
                            type="text"
                            className="w-full p-4 rounded-lg border border-slate-200 focus:border-[var(--color-blue-dark)] outline-none bg-slate-50 shadow-sm"
                            placeholder="Optional"
                          />
                        </div>
                        <div className="md:col-span-2">
                          <label className="block text-xs font-bold text-slate-500 mb-2 tracking-widest uppercase">
                            Your Message
                          </label>
                          <textarea
                            rows="4"
                            className="w-full p-4 rounded-lg border border-slate-200 focus:border-[var(--color-blue-dark)] outline-none bg-slate-50 shadow-sm"
                            placeholder="How can we assist you?"
                          ></textarea>
                        </div>
                        <button className="md:col-span-2 bg-[var(--color-blue-dark)] hover:bg-[#162d6b] text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 transition-all transform active:scale-[0.98] shadow-lg">
                          <PaperAirplaneIcon className="h-5 w-5" />
                          SEND ENCRYPTED MESSAGE
                        </button>
                      </form>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex justify-between items-center border-b border-slate-100 pb-4">
                        <div>
                          <h3 className="text-xl font-bold text-[var(--color-brown)]">
                            Compliance Messenger
                          </h3>
                          <p className="text-xs text-slate-400 uppercase tracking-tighter">
                            Authorized Personnel Only
                          </p>
                        </div>
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                          <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        </div>
                      </div>

                      <div className="bg-slate-900 rounded-xl p-6 h-64 overflow-y-auto space-y-4 font-mono text-sm shadow-inner">
                        <div className="text-blue-400">
                          <span className="text-slate-500">[14:02]</span>{" "}
                          System: Admin Session Authenticated.
                        </div>
                        <div className="text-white">
                          <span className="text-slate-500 text-xs block mb-1">
                            USER_4492:
                          </span>
                          <div className="bg-slate-800 p-3 rounded-r-lg rounded-bl-lg border-l-2 border-[var(--color-brown)]">
                            Requesting limit increase for corporate payroll.
                          </div>
                        </div>
                        <div className="text-white flex flex-col items-end">
                          <span className="text-slate-500 text-xs block mb-1 text-right">
                            YOU:
                          </span>
                          <div className="bg-[var(--color-brown)] p-3 rounded-l-lg rounded-br-lg max-w-[80%]">
                            Verified. Processing compliance check...
                          </div>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <input
                          type="text"
                          className="flex-1 p-4 bg-slate-50 border border-slate-200 rounded-lg outline-none focus:border-[var(--color-brown)]"
                          placeholder="Type response..."
                        />
                        <button className="bg-[#92400e] p-4 text-white rounded-lg hover:bg-[#78350f]">
                          <PaperAirplaneIcon className="h-6 w-6" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>

        <footer className="max-w-7xl mx-auto px-4 py-8 border-t border-slate-200 mt-12 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs uppercase tracking-widest font-semibold">
          <p>© 2026 ellesPay International</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[#92400e]">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#92400e]">
              Regulatory Disclosure
            </a>
          </div>
        </footer>
      </div>
      <FloatingMenu />
    </>
  );
};

export default ContactPage;
