import { Link } from 'react-router-dom';

export default function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Decorative background blur - Fixed to prevent horizontal scroll */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none">
        <div className="absolute top-[-5%] left-[-5%] w-[50%] h-[40%] bg-indigo-100 rounded-full blur-[100px] opacity-60" />
        <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[30%] bg-purple-100 rounded-full blur-[100px] opacity-60" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-[10px] sm:text-xs font-bold mb-8 tracking-wide uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
          </span>
          Next-Gen Inventory Control
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 sm:mb-8 leading-[1.1]">
          Chemical Tracking <br className="hidden sm:block" /> 
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Without the Chaos.
          </span>
        </h1>

        <p className="text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop using spreadsheets for hazardous materials. Manage CAS numbers, 
          real-time stock levels, and safety compliance in one sleek dashboard.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link to="/register" className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all text-center">
            Start Your Inventory Free
          </Link>
          <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
            Watch Demo
          </button>
        </div>
      </div>
    </section>
  );
}