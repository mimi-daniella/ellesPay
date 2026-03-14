import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BellIcon,
  EyeIcon,
  EyeSlashIcon,
  CreditCardIcon,
  ArrowTrendingUpIcon,
  BanknotesIcon,
  ChartBarIcon,
  HomeIcon,
  ArrowsRightLeftIcon,
  Squares2X2Icon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [userData, setUserData] = useState(null);
  const [transactions, setTransactions] = useState([]);
  const [showBalance, setShowBalance] = useState(true);
  const [selectedTx, setSelectedTx] = useState(null);

  // Axios instance with refresh token interceptor
  const api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true, // important for refreshToken cookie
  });

  api.interceptors.response.use(
    (res) => res,
    async (err) => {
      const originalRequest = err.config;
      if (err.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        try {
          const refreshRes = await api.get("/auth/refresh");
          const newToken = refreshRes.data.token;
          localStorage.setItem("token", newToken);
          originalRequest.headers["Authorization"] = `Bearer ${newToken}`;
          return api(originalRequest);
        } catch (refreshErr) {
          console.error("Refresh token expired or invalid:", refreshErr);
          localStorage.removeItem("token");
          setUserData(null);
        }
      }
      return Promise.reject(err);
    },
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const userRes = await api.get("http://localhost:5000/user/me", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const txRes = await api.get("/payments/my-transactions", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData(userRes.data.user); // backend returns { user }
        setTransactions(txRes.data);
      } catch (err) {
        console.error("Unauthorized or no user data:", err);
        setUserData(null);
      }
    };
    fetchData();
  }, []);

  const services = [
    {
      icon: <CreditCardIcon className="w-6 h-6 text-blue-600 cursor-pointer" />,
      label: "Pay",
      bg: "bg-blue-50",
      path: "/dashboard/make-payment",
    },
    {
      icon: (
        <ArrowTrendingUpIcon className="w-6 h-6 text-emerald-600 cursor-pointer" />
      ),
      label: "Save",
      bg: "bg-emerald-50",
    },
    {
      icon: <BanknotesIcon className="w-6 h-6 text-amber-600 cursor-pointer" />,
      label: "Loan",
      bg: "bg-amber-50",
    },
    {
      icon: <ChartBarIcon className="w-6 h-6 text-purple-600 cursor-pointer" />,
      label: "Invest",
      bg: "bg-purple-50",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pb-28 font-sans text-slate-900">
      {/* --- HEADER --- */}
      <header className="bg-[#0A2540] text-white px-6 pt-10 rounded-b-[50px] shadow-lg sticky top-0 z-40">
        <div className="md:px-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={userData?.avatar || "https://via.placeholder.com/40"}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-[#8B5E3C]"
            />
            <div>
              <h2 className="font-bold md:text-2xl text-sm leading-none mb-1">
                {userData?.name || "Hi User"}
              </h2>
              <p className="text-sm text-blue-300 opacity-80">
                {userData?.email || "No email linked"}
              </p>{" "}
              <br />
              <p className="text-sm text-blue-300 opacity-80">
                {userData?.accountNumber || "No account number"}
              </p>
            </div>
          </div>

          <button className="relative p-2 bg-white/5 rounded-full hover:bg-white/15 transition-colors ml-auto">
            <BellIcon className="w-10 h-10 cursor-pointer" />
            {userData?.unreadNotifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[9px] font-black w-5 h-5 flex items-center justify-center rounded-full border-2 border-[#0A2540]">
                {userData.unreadNotifications}
              </span>
            )}
          </button>
        </div>

        <div className="max-w-md mx-auto mt-8 flex flex-col items-center mt-[-30px]">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-blue-200/60 text-xs font-semibold uppercase tracking-widest  pb-3">
              Available Balance
            </p>
            {userData && (
              <button
                onClick={() => setShowBalance(!showBalance)}
                className="text-blue-300"
              >
                {showBalance ? (
                  <EyeSlashIcon className="w-4 h-4 mt-[-10px]" />
                ) : (
                  <EyeIcon className="w-4 h-4" />
                )}
              </button>
            )}
          </div>
          <h1 className="text-3xl font-black tracking-tighter">
            {userData
              ? showBalance
                ? `₦  ${Number(userData.balance || 0).toLocaleString()}`
                : "••••••••"
              : "₦0.00"}
          </h1>
        </div>
      </header>

      {/* --- CTA if no user --- */}
      {!userData && (
        <div className="max-w-md mx-auto px-6 mt-6 mb-10">
          <div className="bg-white rounded-3xl p-6 shadow-md text-center">
            <h3 className="font-bold text-lg text-[#0A2540] mb-2">
              No account linked
            </h3>
            <p className="text-sm text-slate-500 mb-4">
              Sign up to unlock your dashboard features.
            </p>
            <Link
              to="/register"
              className="bg-[#1E90FF] text-white px-4 py-2 rounded-lg font-bold hover:bg-blue-700 transition"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}

      {/* --- SERVICES --- */}
      <main className="max-w-md mx-auto px-6 mt-6">
        <section className="bg-white rounded-3xl p-5 shadow-xl shadow-slate-200/50 flex justify-between gap-2 mb-8">
          {services.map((item, i) => (
            <Link
              key={i}
              to={item.path || "#"}
              className="flex flex-col items-center gap-2 group flex-1"
            >
              <div
                className={`${item.bg} p-3.5 rounded-2xl group-active:scale-90 transition-transform duration-200`}
              >
                {item.icon}
              </div>
              <span className="text-[11px] font-bold text-slate-500 group-hover:text-[#0A2540]">
                {item.label}
              </span>
            </Link>
          ))}
        </section>

        {/* --- TRANSACTIONS --- */}
        <section className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-extrabold text-lg text-[#0A2540]">
              Transaction History
            </h3>
            {transactions.length > 0 && (
              <button className="text-[#1E90FF] text-xs font-bold">
                See All
              </button>
            )}
          </div>

          {transactions.length === 0 ? (
            <div className="bg-white rounded-3xl p-10 flex flex-col items-center text-center border border-dashed border-slate-200">
              <h4 className="font-bold text-slate-800 mb-1">No Activity Yet</h4>
              <p className="text-xs text-slate-400 max-w-[180px]">
                Your transaction history will appear here once you start
                spending.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {transactions.map((tx) => (
                <div
                  key={tx._id}
                  onClick={() => setSelectedTx(tx)}
                  className="bg-white rounded-2xl p-4 shadow-sm flex justify-between items-center cursor-pointer hover:shadow-md transition"
                >
                  <div>
                    <p className="font-bold text-sm text-[#0A2540]">
                      {tx.recipientName}
                    </p>
                    <p className="text-xs text-slate-400">{tx.reference}</p>
                  </div>
                  <p
                    className={`font-bold ${
                      tx.type === "credit" ? "text-emerald-600" : "text-red-500"
                    }`}
                  >
                    {tx.type === "credit" ? "+" : "-"}${tx.amount.toFixed(2)}
                  </p>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* --- BOTTOM NAVBAR --- */}
      <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-full h-18 bg-[#0A2540] rounded-3xl shadow-2xl flex justify-around items-center px-4 z-50 border border-white/5">
        {[
          { id: "home", icon: <HomeIcon />, label: "Home" },
          { id: "trans", icon: <ArrowsRightLeftIcon />, path:"transactions", label: "Transactions" },
          { id: "serv", icon: <Squares2X2Icon />, label: "Services" },
          {
            id: "prof",
            icon: <UserIcon />,
            path: "user-profile",
            label: "Profile",
          },
        ].map((tab) => (
          <Link
            to={tab.path}
            key={tab.id}
            className="p-3 text-slate-400 hover:text-[#1E90FF] hover:bg-white/5 rounded-2xl transition-all duration-300 active:scale-90"
          >
            {React.cloneElement(tab.icon, { className: "w-6 h-6" })}
          </Link>
        ))}
      </nav>
    </div>
  );
}
