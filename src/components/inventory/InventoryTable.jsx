import { Plus, Minus, Inbox } from 'lucide-react';

export default function InventoryTable({ inventory = [], onIn, onOut }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50/50 border-b border-slate-100">
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Chemical Product</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Current Stock</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Adjust Stock</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-100">
            {inventory.map((item) => (
              <tr key={item.id} className="hover:bg-slate-50/50 transition-colors group">
                <td className="p-4">
                  <div className="font-bold text-slate-900">{item.product.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono">CAS: {item.product.casNumber || 'N/A'}</div>
                </td>
                <td className="p-4">
                  <div className="flex items-baseline gap-1">
                    <span className="text-lg font-black text-slate-800">{item.quantity}</span>
                    <span className="text-xs font-medium text-slate-500 uppercase">{item.product.unit}</span>
                  </div>
                </td>
                <td className="p-4">
                  {item.quantity <= 5 ? (
                    <span className="px-2.5 py-1 bg-red-50 text-red-600 rounded-full text-[10px] font-bold border border-red-100">LOW STOCK</span>
                  ) : (
                    <span className="px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-bold border border-emerald-100">IN STOCK</span>
                  )}
                </td>
                <td className="p-4">
                  <div className="flex gap-2 justify-end">
                    <button
                      onClick={() => onIn(item)}
                      className="px-4 py-2 rounded-xl bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2 text-xs font-bold"
                    >
                      <Plus size={14} strokeWidth={3} /> STOCK IN
                    </button>
                    <button
                      onClick={() => onOut(item)}
                      className="px-4 py-2 rounded-xl bg-slate-50 text-slate-600 hover:bg-red-50 hover:text-red-600 transition-all flex items-center gap-2 text-xs font-bold border border-slate-100"
                    >
                      <Minus size={14} strokeWidth={3} /> STOCK OUT
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {inventory.length === 0 && (
        <div className="p-16 flex flex-col items-center justify-center text-slate-400">
          <Inbox size={48} className="mb-4 opacity-20" />
          <p className="font-medium text-slate-500">No inventory records found</p>
          <p className="text-sm">Register products first to see them here.</p>
        </div>
      )}
    </div>
  );
}