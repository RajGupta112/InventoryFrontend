import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="relative py-20 lg:py-32 px-6 overflow-hidden bg-slate-900">
      {/* Optimized Background Blurs for Mobile */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-[10%] w-[300px] sm:w-[500px] h-[300px] bg-indigo-500/10 rounded-full blur-[80px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-[10%] w-[300px] sm:w-[500px] h-[300px] bg-purple-500/10 rounded-full blur-[80px] sm:blur-[120px]" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-indigo-300 text-xs sm:text-sm font-medium mb-8">
          <Sparkles size={16} />
          <span>Ready to secure your lab?</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-8">
          Stop managing chemicals <br className="hidden sm:block" /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
            the old-fashioned way.
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-10">
          <Link
            to="/register"
            className="w-full sm:w-auto group px-8 py-4 bg-indigo-600 text-white rounded-xl font-bold text-lg hover:bg-indigo-500 transition-all flex items-center justify-center gap-2"
          >
            Get Started <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/login"
            className="w-full sm:w-auto px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all text-center"
          >
            Sign In
          </Link>
        </div>
        
        <p className="mt-8 text-slate-500 text-xs sm:text-sm font-medium">
          No credit card required • Secure JWT Auth
        </p>
      </div>
    </section>
  );
}