import { ShieldCheck, Database, LayoutDashboard, Microscope, Zap, FlaskConical } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    { 
      icon: <Database className="w-6 h-6" />, 
      title: "Molecular Registry", 
      desc: "Centralized SDS-compliant database for chemical properties, CAS numbers, and safety protocols.",
      tag: "Secure"
    },
    { 
      icon: <LayoutDashboard className="w-6 h-6" />, 
      title: "Real-time Analytics", 
      desc: "Monitor reagent levels and expiration dates with predictive consumption forecasting.",
      tag: "Live"
    },
    { 
      icon: <ShieldCheck className="w-6 h-6" />, 
      title: "GLP Compliance", 
      desc: "Automated audit trails and digital chain of custody for every substance movement.",
      tag: "Standard"
    },
    { 
      icon: <FlaskConical className="w-6 h-6" />, 
      title: "Precision Tracking", 
      desc: "Unit-level tracking (mg, μl, mol) with support for multi-location storage units.",
      tag: "Advanced"
    },
    { 
      icon: <Zap className="w-6 h-6" />, 
      title: "Rapid Procurement", 
      desc: "One-click reordering through integrated supplier APIs when stock hits critical thresholds.",
      tag: "Smart"
    },
    { 
      icon: <Microscope className="w-6 h-6" />, 
      title: "Safety First", 
      desc: "Instant hazard classification (GHS/NFPA) and automated storage incompatibility alerts.",
      tag: "Critical"
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-3">Enterprise Grade</h2>
            <h3 className="text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Optimized for modern <span className="text-slate-500">laboratory workflows.</span>
            </h3>
          </div>
          <p className="text-slate-600 text-lg max-w-sm">
            Maintain compliance and accelerate research with our unified inventory intelligence platform.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((f, i) => (
            <div key={i} className="group relative flex flex-col items-start">
              {/* Icon Container with subtle animation */}
              <div className="mb-6 p-3 rounded-2xl bg-slate-50 text-slate-700 ring-1 ring-slate-200 group-hover:bg-blue-600 group-hover:text-white group-hover:ring-blue-600 transition-all duration-300">
                {f.icon}
              </div>
              
              <div className="flex items-center gap-3 mb-3">
                <h4 className="text-xl font-bold text-slate-900 leading-none">
                  {f.title}
                </h4>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 uppercase tracking-wider">
                  {f.tag}
                </span>
              </div>
              
              <p className="text-slate-600 leading-relaxed text-sm lg:text-base">
                {f.desc}
              </p>
              
              {/* Decorative line that grows on hover */}
              <div className="mt-6 h-0.5 w-8 bg-slate-200 group-hover:w-full group-hover:bg-blue-600 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}