import React from 'react';
import { Search, Bell, ChevronDown, Menu } from 'lucide-react';

export default function Topbar({ onMenuClick }) {
  // Manual data as requested
  const user = {
    name: "User Name",
    role: "Administrator"
  };

  // Logic to get the first letter of the name
  const initial = user.name.charAt(0).toUpperCase();

  return (
    <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-40 px-4 sm:px-8 flex items-center justify-between">
      <div className="flex items-center gap-4">
        {/* Mobile Menu Button - Shows only on small screens */}
        <button 
          onClick={onMenuClick} 
          className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu size={24} />
        </button>

        {/* Search Bar */}
        <div className="relative hidden md:block w-72 lg:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input 
            type="text" 
            placeholder="Search CAS#, chemicals..."
            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-5">
        {/* Notifications */}
        <button className="relative p-2.5 text-slate-500 hover:bg-slate-50 rounded-full transition-colors">
          <Bell size={20} />
          <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
        </button>

        <div className="h-8 w-[1px] bg-slate-200 mx-2 hidden sm:block"></div>

        {/* User Profile Section */}
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 leading-none group-hover:text-indigo-600 transition-colors">
              {user.name}
            </p>
            <p className="text-[11px] text-slate-500 mt-1 font-medium italic">
              {user.role}
            </p>
          </div>
          
          <div className="w-10 h-10 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-100 ring-2 ring-white">
            {initial}
          </div>
          
          <ChevronDown size={16} className="text-slate-400 group-hover:text-slate-600 transition-colors hidden sm:block" />
        </div>
      </div>
    </header>
  );
}