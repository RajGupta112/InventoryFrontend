import { XCircle, CheckCircle2, Zap } from 'lucide-react';

export default function WhatProblemWeSolve() {
  const pains = [
    { text: "Manual CAS tracking leads to dangerous duplicates." },
    { text: "Spreadsheets don't prevent negative stock levels." },
    { text: "No real-time visibility during critical audits." },
  ];

  return (
    <section id="problem" className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <div className="relative">
            <div className="absolute -top-12 -left-12 w-48 sm:w-64 h-48 sm:h-64 bg-red-50 rounded-full blur-3xl opacity-70" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Legacy systems are <br />
                <span className="text-red-500 italic">risky and inefficient.</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-600 mb-8">
                Managing hazardous chemicals in Excel isn't just slow—it's a compliance nightmare. One wrong entry can ruin your inventory accuracy.
              </p>
              
              <div className="space-y-3">
                {pains.map((pain, i) => (
                  <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <XCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
                    <p className="text-slate-700 font-medium text-sm sm:text-base">{pain.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="absolute -bottom-12 -right-12 w-48 sm:w-64 h-48 sm:h-64 bg-indigo-50 rounded-full blur-3xl opacity-70" />
            <div className="relative bg-slate-900 rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-10 text-white shadow-2xl border border-slate-800">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-bold mb-6">
                <Zap size={14} /> THE CHEMFLOW FIX
              </div>
              <h3 className="text-2xl font-bold mb-8">Built for Chemical Logistics</h3>
              
              <ul className="space-y-8">
                {[
                  { title: "Smart CAS Integrity", desc: "Automated constraints ensure no duplicates." },
                  { title: "Zero-Floor Protection", desc: "Logic prevents stock from dropping below zero." },
                  { title: "Instant Audit Logs", desc: "Real-time history of every stock movement." }
                ].map((item, i) => (
                  <li key={i} className="flex gap-4">
                    <CheckCircle2 className="text-indigo-400 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-bold text-white text-lg leading-tight">{item.title}</p>
                      <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}