import React from "react";
import { useLocation } from "react-router-dom";

export default function Transactions() {
  const location = useLocation();
  const tx = location.state;

  // Static Sarah Jones transaction
  const staticTx = {
    sender: "Mimi Daniella",
    recipient: "Sarah Jones",
    amount: 5000, // you can change this default
    transactionId: "TXN-STATIC-001",
    address: "24 Marina Road, Lagos, Nigeria",
  };

  // Build a list of transactions
  const transactions = [];
  if (tx) transactions.push(tx);
  transactions.push(staticTx);

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-xl font-bold text-[#0A2540] mb-4">Transactions</h2>

        {transactions.length > 0 ? (
          <div className="space-y-4">
            {transactions.map((t, i) => (
              <div
                key={i}
                className="border rounded-lg p-4 shadow-sm hover:shadow-md transition"
              >
                <p>
                  <strong>Sender:</strong> {t.sender}
                </p>
                <p>
                  <strong>Recipient:</strong> {t.recipient}
                </p>
                <p>
                  <strong>Amount:</strong> ₦{Number(t.amount).toLocaleString()}
                </p>
                <p>
                  <strong>Transaction ID:</strong> {t.transactionId}
                </p>
                <p>
                  <strong>Address:</strong> {t.address}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-slate-500">No transaction data available.</p>
        )}
      </div>
    </div>
  );
}
