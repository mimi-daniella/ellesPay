import React from "react";

export default function PrivacyPolicy() {
  const sections = [
    { id: "intro", title: "Introduction" },
    { id: "info", title: "Information We Collect" },
    { id: "use", title: "How We Use Information" },
    { id: "protection", title: "Data Protection" },
    { id: "rights", title: "Your Rights" },
    { id: "changes", title: "Changes to Policy" },
    { id: "contact", title: "Contact" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-white shadow-md px-6 py-3 flex gap-4 overflow-x-auto">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="text-sm font-semibold text-blue-900 hover:text-[#cf6819] transition"
          >
            {s.title}
          </a>
        ))}
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">
            Privacy Policy
          </h1>

          {/* 1. Introduction */}
          <section id="intro" className="mb-8 scroll-mt-20">
            <h2 className="text-xl font-semibold text-[#cf6819] mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-600">
              At ellesPay, we value your privacy and are committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use, and safeguard your data when you use our services.
            </p>
          </section>

          {/* 2. Information We Collect */}
          <section id="info" className="mb-8 scroll-mt-20">
            <h2 className="text-xl font-semibold text-[#cf6819] mb-4">
              2. Information We Collect
            </h2>
            <div className="bg-gray-50 rounded-lg p-6">
              <ul className="space-y-4 text-gray-600">
                <li className="flex gap-3">
                  <svg
                    className="h-6 w-6 text-blue-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Personal details such as your name, email, and phone.
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="h-6 w-6 text-blue-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Transaction information including payment details.
                  </span>
                </li>
                <li className="flex gap-3">
                  <svg
                    className="h-6 w-6 text-blue-600 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>
                    Technical data such as IP address and device info.
                  </span>
                </li>
              </ul>
            </div>
          </section>

          {/* 3. How We Use Information */}
          <section id="use" className="mb-8 scroll-mt-20">
            <h2 className="text-xl font-semibold text-[#cf6819] mb-4">
              3. How We Use Information
            </h2>
            <p className="text-gray-600">
              We use your information to provide secure payment services,
              improve our platform, communicate with you, and comply with legal
              obligations. ellesPay does not sell your personal data to third
              parties.
            </p>
          </section>

          {/* 4. Data Protection */}
          <section id="protection" className="mb-8 scroll-mt-20">
            <h2 className="text-xl font-semibold text-[#cf6819] mb-4">
              4. Data Protection
            </h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <p className="text-sm text-yellow-700">
                We implement industry-standard security measures to protect your
                data from unauthorized access, alteration, disclosure, or
                destruction. However, no method of transmission over the
                internet is 100% secure.
              </p>
            </div>
          </section>

          {/* 5. Your Rights */}
          <section id="rights" className="mb-8 scroll-mt-20">
            <h2 className="text-xl font-semibold text-[#cf6819] mb-4">
              5. Your Rights
            </h2>
            <p className="text-gray-600">
              You have the right to access, update, or delete your personal
              information. You may also opt out of marketing communications at
              any time.
            </p>
          </section>

          {/* 6. Changes */}
          <section id="changes" className="mb-8 scroll-mt-20">
            <h2 className="text-xl font-semibold text-[#cf6819] mb-4">
              6. Changes to This Policy
            </h2>
            <p className="text-gray-600">
              ellesPay may update this Privacy Policy from time to time. Any
              changes will be posted on this page with an updated revision date.
            </p>
          </section>

          {/* 7. Contact */}
          <section id="contact" className="scroll-mt-20">
            <h2 className="text-xl font-semibold text-[#cf6819] mb-4">
              7. Contact
            </h2>
            <div className="bg-gray-50 rounded-lg p-6 flex items-center justify-between">
              <p className="text-gray-600">
                Questions about this Privacy Policy?
              </p>
              <a
                href="mailto:privacy@ellespay.com"
                className="inline-flex items-center text-blue-600 hover:text-blue-500"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Contact Us
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
