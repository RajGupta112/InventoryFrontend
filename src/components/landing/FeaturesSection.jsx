import { ShieldCheck, Database, LayoutDashboard } from 'lucide-react';

export default function FeaturesSection() {
  const features = [
    { icon: <Database />, title: "Smart DB Registry", desc: "Centralized database for all chemical properties." },
    { icon: <LayoutDashboard />, title: "Live Dashboard", desc: "Real-time visualization of stock movements." },
    { icon: <ShieldCheck />, title: "Audit Ready", desc: "Every transaction is logged with timestamps." },
  ];

  return (
    <section id="features" className="py-20 lg:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900">Powerful Core Features</h2>
          <p className="text-slate-600 mt-4 text-base sm:text-lg">Everything you need to manage high-stakes inventory.</p>
        </div>

        {/* Responsive Grid Logic */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((f, i) => (
            <div key={i} className="bg-white p-8 lg:p-10 rounded-3xl border border-slate-200 hover:shadow-xl transition-all">
              <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}