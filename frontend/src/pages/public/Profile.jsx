import React, { useState } from 'react';
import { 
  UserCircleIcon, 
  ShieldCheckIcon, 
  BellAlertIcon, 
  CreditCardIcon, 
  CameraIcon,
  CheckIcon,
  ChevronRightIcon
} from '@heroicons/react/24/solid';

const Profile = () => {
  // --- DYNAMIC FORM STATE ---
  const [profile, setProfile] = useState({
    fullName: "Mmi Daniella",
    email: "mimidee05@gmail.com",
    phone: "+234 903 082 7482",
    kycStatus: "Email Verified",
    notifications: true
  });

  const [isSaving, setIsSaving] = useState(false);

  const handleUpdate = (e) => {
    e.preventDefault();
    setIsSaving(true);
    // Simulate API Call
    setTimeout(() => setIsSaving(false), 1500);
  };

  const sections = [
    { id: 'security', label: 'Security & Password', icon: <ShieldCheckIcon className="w-5 h-5 text-emerald-500" />, desc: 'Biometrics, 2FA, Pins' },
    { id: 'limits', label: 'Account Limits', icon: <CreditCardIcon className="w-5 h-5 text-[#1E90FF]" />, desc: 'View your spending caps' },
    { id: 'prefs', label: 'Notification Prefs', icon: <BellAlertIcon className="w-5 h-5 text-amber-500" />, desc: 'Email, Push, SMS' },
  ];

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen pb-24 animate-in fade-in duration-500">
      {/* --- PROFILE HEADER --- */}
      <div className="bg-[#0A2540] pt-12 pb-20 px-6 rounded-b-[40px] text-center relative">
        <div className="relative inline-block">
          <div className="w-28 h-28 rounded-full border-4 border-[#8B5E3C] overflow-hidden bg-slate-100 shadow-2xl mx-auto">
            <img 
              src="" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <button className="absolute bottom-1 right-1 bg-[#1E90FF] p-2 rounded-full border-4 border-[#0A2540] text-white hover:scale-110 transition-transform">
            <CameraIcon className="w-4 h-4" />
          </button>
        </div>
        <h2 className="text-white font-black text-xl mt-4">{profile.fullName}</h2>
        <p className="text-blue-300 text-xs font-bold uppercase tracking-widest">{profile.kycStatus}</p>
      </div>

      {/* --- SETTINGS FORM --- */}
      <div className="px-6 -mt-10">
        <form onSubmit={handleUpdate} className="bg-white rounded-[32px] p-6 shadow-xl shadow-slate-200 border border-slate-50 space-y-5">
          <h3 className="font-black text-[#0A2540] text-sm uppercase tracking-tight">Personal Information</h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Full Name</label>
              <input 
                type="text" 
                value={profile.fullName}
                onChange={(e) => setProfile({...profile, fullName: e.target.value})}
                className="w-full bg-slate-50 border-none rounded-2xl px-4 py-3.5 text-sm font-bold text-[#0A2540] focus:ring-2 focus:ring-[#1E90FF] transition-all"
              />
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase ml-1">Email Address</label>
              <input 
                type="email" 
                value={profile.email}
                className="w-full bg-slate-100 border-none rounded-2xl px-4 py-3.5 text-sm font-bold text-slate-400 cursor-not-allowed"
                disabled
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#8B5E3C] text-white py-4 rounded-2xl font-black text-sm shadow-lg shadow-orange-900/20 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            {isSaving ? (
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <>Save Changes <CheckIcon className="w-5 h-5" /></>
            )}
          </button>
        </form>

        {/* --- MENU OPTIONS --- */}
        <div className="mt-8 space-y-3">
          <h3 className="font-black text-[#0A2540] text-sm uppercase tracking-tight ml-2">Preferences</h3>
          {sections.map((item) => (
            <button 
              key={item.id} 
              className="w-full flex items-center justify-between p-4 bg-white rounded-2xl hover:bg-slate-50 transition-colors border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="p-2.5 bg-slate-50 rounded-xl">
                  {item.icon}
                </div>
                <div className="text-left">
                  <p className="font-bold text-sm text-[#0A2540]">{item.label}</p>
                  <p className="text-[10px] text-slate-400 font-medium">{item.desc}</p>
                </div>
              </div>
              <ChevronRightIcon className="w-5 h-5 text-slate-300" />
            </button>
          ))}
        </div>

        {/* --- LOGOUT --- */}
        <button className="w-full mt-10 text-rose-500 font-black text-sm py-4 rounded-2xl hover:bg-rose-50 transition-colors border border-transparent hover:border-rose-100">
          Sign Out of EllesPay
        </button>
      </div>
    </div>
  );
};

export default Profile;
