import { Trash2, Pencil, PackageOpen } from 'lucide-react';
import { apiRequest } from '../../services/api';

export default function ProductTable({ products = [], onDelete, onEdit }) {
  const handleDelete = async (id) => {
    if (!confirm('Warning: Deleting this product will also delete its inventory records. Continue?')) return;
    try {
      await apiRequest(`/products/${id}`, { method: 'DELETE' });
      onDelete();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      {/* Mobile-Friendly Table Wrapper */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Product Info</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider">CAS Number</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-center">Unit</th>
              <th className="p-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {products?.map((p) => (
              <tr key={p.id} className="hover:bg-slate-50/50 transition-colors">
                <td className="p-4">
                  <div className="font-bold text-slate-900">{p.name}</div>
                  <div className="text-[10px] text-slate-400 font-mono">ID: {p.id}</div>
                </td>
                <td className="p-4">
                  <span className="font-medium text-slate-600">{p.casNumber || 'Not Set'}</span>
                </td>
                <td className="p-4 text-center">
                  <span className="px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-[10px] font-bold">
                    {p.unit}
                  </span>
                </td>
                <td className="p-4">
                  <div className="flex gap-2 justify-end">
                    <button 
                      onClick={() => onEdit(p)} 
                      className="p-2 text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                      title="Edit Product"
                    >
                      <Pencil size={18} />
                    </button>
                    <button 
                      onClick={() => handleDelete(p.id)} 
                      className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Product"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {(!products || products.length === 0) && (
        <div className="p-20 flex flex-col items-center justify-center text-slate-400">
          <PackageOpen size={48} className="mb-4 opacity-20" />
          <p className="font-medium">No chemicals found in your registry.</p>
        </div>
      )}
    </div>
  );
}