import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

export default function MakePayment() {
  const [amount, setAmount] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md space-y-4"
        >
          <h2 className="text-xl font-bold text-[#0A2540] mb-4">
            Make a Payment
          </h2>

          <input
            type="text"
            placeholder="Account Number"
        
            className="w-full border rounded-lg p-2"
            required
          />

          <input
            type="number"
            placeholder="Enter Amount "
            className="w-full border rounded-lg p-2"
            required
          />

          <textarea
            placeholder="Description"

            className="w-full border rounded-lg p-2"
            required
          />

          <button
            type="submit"
            className="w-full bg-[#1E90FF] text-white py-2 rounded-lg font-bold hover:bg-blue-700 transition"
          >
            Pay Now
          </button>
        </form>
      ) : (
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md text-center">
          <CheckCircleIcon className="w-12 h-12 text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-[#0A2540] mb-4">
            Payment Successful
          </h2>

          <p className="text-sm text-slate-600 mb-2">
            <strong>Sender:</strong> Mimi Daniella
          </p>
          <p className="text-sm text-slate-600 mb-2">
            <strong>Recipient:</strong> Sarah Jones
          </p>
          <p className="text-sm text-slate-600 mb-2">
            <strong>Amount:</strong> ₦{Number(amount).toLocaleString()}
          </p>
          <p className="text-sm text-slate-600 mb-2">
            <strong>Transaction ID:</strong> TXN-9876543210
          </p>
          <p className="text-sm text-slate-600 mb-2">
            <strong>Address:</strong> 24 Marina Road, Lagos, Nigeria
          </p>
        </div>
      )}
    </div>
  );
}
