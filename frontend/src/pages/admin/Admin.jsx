import React, { useState } from "react";
import {
  UsersIcon,
  BanknotesIcon,
  ShieldExclamationIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  AdjustmentsHorizontalIcon,
  MagnifyingGlassIcon,
  TrashIcon,
  NoSymbolIcon,
  CheckBadgeIcon,
  ArrowPathIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/outline";

const Admin = () => {
  const [stats] = useState([
    {
      label: "Total Platform Volume",
      value: "₦0.00",
      growth: "+0.00%",
      icon: <BanknotesIcon className="w-6 h-6 text-blue-600" />,
    },
    {
      label: "Active Users",
      value: "1",
      growth: "+1.2%",
      icon: <UsersIcon className="w-6 h-6 text-emerald-600" />,
    },
    {
      label: "Pending Loans",
      value: "₦0.00",
      growth: "-2.1%",
      icon: <ChartBarIcon className="w-6 h-6 text-amber-600" />,
    },
    {
      label: "Security Flags",
      value: "",
      growth: "Critical",
      icon: <ShieldExclamationIcon className="w-6 h-6 text-red-600" />,
    },
  ]);

  const [users] = useState([
    {
      id: 1,
      name: "Mimi Daniella",
      email: "mimidee@gmail.com",
      status: "Active",
      balance: "₦0.00",
      joined: "Feb 2026",
    },
    {
      id: 2,
      name: "Guy Hawkins",
      email: "hawkins02@gmail.com",
      status: "Offline",
      balance: "₦20,000.00",
      joined: "Feb 2026",
    },
    {
      id: 3,
      name: "John Doe",
      email: "johndoe@gmail.com",
      status: "Active",
      balance: "₦100.00",
      joined: "Feb 2026",
    },
  ]);

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* --- SIDEBAR (Deep Blue) --- */}
      <aside className="w-64 bg-[#0A2540] text-white hidden lg:flex flex-col p-6 sticky top-0 h-screen">
        <div className="flex items-center gap-2 mb-10 px-2">
          <div className="w-8 h-8 bg-[#8B5E3C] rounded-lg"></div>
          <h1 className="text-xl font-black tracking-tighter">
            ellesPay <span className="text-blue-400">HQ</span>
          </h1>
        </div>

        <nav className="flex-1 space-y-2">
          {[
            {
              label: "Overview",
              icon: <ChartBarIcon className="w-5 h-5" />,
              active: true,
            },
            {
              label: "User Management",
              icon: <UsersIcon className="w-5 h-5" />,
            },
            {
              label: "Transaction Logs",
              icon: <BanknotesIcon className="w-5 h-5" />,
            },
            {
              label: "Feedback Inbox",
              icon: <ChatBubbleLeftRightIcon className="w-5 h-5" />,
            },
            {
              label: "App Settings",
              icon: <AdjustmentsHorizontalIcon className="w-5 h-5" />,
            },
          ].map((item, i) => (
            <button
              key={i}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${item.active ? "bg-[#1E90FF] text-white shadow-lg" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}
            >
              {item.icon} {item.label}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-4 bg-white/5 rounded-2xl border border-white/10">
          <p className="text-[10px] text-blue-300 font-black uppercase mb-2">
            System Status
          </p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-xs font-bold text-slate-200">
              All Systems Online
            </span>
          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 p-8 overflow-y-auto">
        {/* Header */}
        <header className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-black text-[#0A2540]">
              Admin Dashboard
            </h2>
            <p className="text-slate-400 text-sm font-medium">
              Welcome back, SuperAdmin Alex.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search users, TXIDs..."
                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-xl text-sm w-64 focus:outline-none focus:ring-2 focus:ring-[#1E90FF] transition-all"
              />
            </div>
            <button className="p-2.5 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors">
              <ArrowPathIcon className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </header>

        {/* --- STATS GRID --- */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-slate-50 rounded-2xl">{stat.icon}</div>
                <span
                  className={`text-[10px] font-black px-2 py-1 rounded-lg ${stat.growth.startsWith("+") ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}
                >
                  {stat.growth}
                </span>
              </div>
              <div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-1">
                  {stat.label}
                </p>
                <h3 className="text-2xl font-black text-[#0A2540] tracking-tight">
                  {stat.value}
                </h3>
              </div>
            </div>
          ))}
        </section>

        {/* --- USER TABLE & CONTROLS --- */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {/* User Management */}
          <section className="xl:col-span-2 bg-white rounded-[32px] shadow-sm border border-slate-100 overflow-hidden">
            <div className="p-6 border-b border-slate-50 flex justify-between items-center">
              <h3 className="font-black text-[#0A2540]">
                Recent User Activity
              </h3>
              <button className="text-[#1E90FF] text-xs font-bold">
                Manage All Users
              </button>
            </div>
            <table className="w-full text-left">
              <thead className="bg-slate-50/50 text-[10px] uppercase text-slate-400 font-black">
                <tr>
                  <th className="px-6 py-4">User</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Balance</th>
                  <th className="px-6 py-4">Joined</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {users.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#0A2540] flex items-center justify-center text-white text-[10px] font-bold">
                          {user.name.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm font-bold text-slate-800">
                            {user.name}
                          </p>
                          <p className="text-[10px] text-slate-400">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-xs">
                      <span
                        className={`px-2.5 py-1 rounded-full font-bold ${user.status === "Active" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"}`}
                      >
                        {user.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm font-black text-slate-800">
                      {user.balance}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-500 font-medium">
                      {user.joined}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-2">
                        <button
                          title="Suspend User"
                          className="p-1.5 text-slate-400 hover:text-rose-600 transition-colors"
                        >
                          <NoSymbolIcon className="w-5 h-5" />
                        </button>
                        <button
                          title="Delete Account"
                          className="p-1.5 text-slate-400 hover:text-slate-900 transition-colors"
                        >
                          <TrashIcon className="w-5 h-5" />
                        </button>
                        <button className="p-1.5 text-slate-400 hover:text-[#1E90FF]">
                          <EllipsisVerticalIcon className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          {/* Feedback & App Controls */}
          <div className="space-y-8">
            {/* Feedback Section */}
            <section className="bg-white rounded-[32px] p-6 shadow-sm border border-slate-100">
              <h3 className="font-black text-[#0A2540] mb-6 flex items-center justify-between">
                User Feedback
                <span className="text-[10px] bg-[#8B5E3C] text-white px-2 py-0.5 rounded-md">
                  4 NEW
                </span>
              </h3>
              <div className="space-y-4">
                {[
                  {
                    from: "Mimi Daniella",
                    msg: "Hi",
                    time: "0m ago",
                  },
                  {
                    from: "Guy Hawkins",
                    msg: "How do I upgrade to Tier 3 kyc?",
                    time: "1h ago",
                  },
                ].map((msg, i) => (
                  <div
                    key={i}
                    className="p-4 bg-slate-50 rounded-2xl hover:border-[#1E90FF] border border-transparent transition-all cursor-pointer"
                  >
                    <div className="flex justify-between mb-1">
                      <span className="font-bold text-xs text-slate-800">
                        {msg.from}
                      </span>
                      <span className="text-[10px] text-slate-400">
                        {msg.time}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 line-clamp-1">
                      {msg.msg}
                    </p>
                  </div>
                ))}
              </div>
              <button className="w-full mt-6 py-3 border-2 border-dashed border-slate-200 text-slate-400 rounded-2xl text-xs font-black hover:bg-slate-50 transition-colors">
                VIEW ALL MESSAGES
              </button>
            </section>

            {/* Platform Settings */}
            <section className="bg-[#0A2540] rounded-[32px] p-6 text-white shadow-xl">
              <h3 className="font-black mb-6">Quick Controls</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-blue-200">
                    Maintenance Mode
                  </span>
                  <div className="w-10 h-5 bg-slate-700 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 w-3 h-3 bg-slate-400 rounded-full"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-blue-200">
                    New Enrollments
                  </span>
                  <div className="w-10 h-5 bg-[#1E90FF] rounded-full relative cursor-pointer shadow-[0_0_10px_rgba(30,144,255,0.4)]">
                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
