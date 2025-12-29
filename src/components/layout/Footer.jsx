import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-2 bg-indigo-600 rounded-lg">
                <FlaskConical className="text-white" size={20} />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Chem<span className="text-indigo-600">Flow</span>
              </span>
            </div>
            <p className="text-slate-500 text-base max-w-xs leading-relaxed mb-6">
              The modern operating system for chemical inventory. Built for accuracy, safety, and compliance.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/rajgupta7813589" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-colors">
                <Twitter size={18} />
              </a>
              <a href="https://github.com/RajGupta112" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-colors">
                <Github size={18} />
              </a>
              <a href="https://www.linkedin.com/in/raj-gupta-34752133a/" className="p-2 bg-white border border-slate-200 rounded-full text-slate-400 hover:text-indigo-600 hover:border-indigo-200 transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Product</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><Link to="/inventory" className="hover:text-indigo-600 transition">Live Stock</Link></li>
              <li><Link to="/products" className="hover:text-indigo-600 transition">CAS Registry</Link></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Security</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">API Docs</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><a href="#" className="hover:text-indigo-600 transition">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Features</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Contact</a></li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6 uppercase text-xs tracking-widest">Legal</h4>
            <ul className="space-y-4 text-sm text-slate-600 font-medium">
              <li><a href="" className="hover:text-indigo-600 transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-indigo-600 transition">Cookie Policy</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} ChemFlow. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm font-medium">
            Designed for <span className="text-slate-900 font-bold underline decoration-indigo-500/30">Raj Gupta</span> 
          </p>
        </div>
      </div>
    </footer>
  );
}