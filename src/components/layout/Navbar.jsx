import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/90 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="p-1.5 bg-indigo-600 rounded-lg">
              <FlaskConical className="text-white" size={20} />
            </div>
            <span className="font-bold text-lg sm:text-xl text-slate-900 tracking-tight">ChemFlow</span>
          </Link>

          {/* Desktop Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#features" className="hover:text-indigo-600 transition">Features</a>
            <a href="#problem" className="hover:text-indigo-600 transition">Solutions</a>
            <Link to="/login" className="hover:text-indigo-600 transition">Sign In</Link>
            <Link to="/register" className="bg-slate-900 text-white px-5 py-2.5 rounded-xl hover:bg-indigo-600 transition">Get Started</Link>
          </div>

          {/* Mobile Menu Button - Hidden on Desktop */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 text-slate-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-100 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          <a href="#features" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900">Features</a>
          <a href="#problem" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-900">Solutions</a>
          <hr />
          <Link to="/login" className="text-lg font-bold text-slate-900">Sign In</Link>
          <Link to="/register" className="w-full bg-indigo-600 text-white text-center py-4 rounded-xl font-bold">Get Started</Link>
        </div>
      )}
    </nav>
  );
}