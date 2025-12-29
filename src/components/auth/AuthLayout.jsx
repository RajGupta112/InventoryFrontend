import { FlaskConical, Quote, ArrowLeft, ShieldCheck, Beaker } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AuthLayout({ children }) {
  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-white selection:bg-indigo-100">
      
      {/* LEFT SIDE: The Form (Login or Register) */}
      <div className="flex flex-col justify-center px-8 py-12 lg:px-16 xl:px-24 relative z-10">
        
        {/* Navigation / Logo */}
        <div className="absolute top-8 left-8 right-8 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-indigo-600 rounded-xl group-hover:rotate-6 transition-transform shadow-lg shadow-indigo-200">
              <FlaskConical className="text-white" size={22} />
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-900">
              Chem<span className="text-indigo-600">Flow</span>
            </span>
          </Link>
          
          <Link to="/" className="flex items-center gap-1 text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">
            <ArrowLeft size={16} />
            Home
          </Link>
        </div>

        {/* This is where LoginForm or RegisterForm will appear */}
        <div className="w-full max-w-sm mx-auto">
          {children}
        </div>

        {/* Footer */}
        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-center">
          <p className="text-slate-400 text-[11px] font-bold tracking-widest uppercase">
            © 2025 ChemFlow
          </p>
          <div className="flex items-center gap-1 text-slate-300">
            <ShieldCheck size={14} />
            <span className="text-[11px] font-bold uppercase tracking-widest">ISO 27001 Certified</span>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE: The Sleek Visual (Fixed for both pages) */}
      <div className="hidden lg:flex bg-slate-50 items-center justify-center p-16 relative overflow-hidden border-l border-slate-100">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-50 rounded-full blur-[80px] -ml-32 -mb-32"></div>
        
        <div className="relative z-10 w-full max-w-lg">
          <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative">
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center border border-indigo-100 shadow-sm rotate-12 transition-transform hover:rotate-0">
              <Beaker className="text-indigo-600" size={32} />
            </div>
            <Quote className="text-indigo-100 mb-6" size={48} fill="currentColor" />
            <p className="text-2xl font-semibold text-slate-800 leading-snug mb-10 italic">
              "ChemFlow transformed our laboratory safety standards. The unique CAS logic is a lifesaver."
            </p>
            <div className="flex items-center gap-4 pt-8 border-t border-slate-50">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">SJ</div>
              <div>
                <p className="font-extrabold text-slate-900 text-lg">Sarah Jenkins</p>
                <p className="text-sm text-indigo-600 font-bold uppercase tracking-wider">Inventory Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}