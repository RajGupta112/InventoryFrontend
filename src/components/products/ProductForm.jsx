import { useState, useEffect } from 'react';
import { apiRequest } from '../../services/api';
import { Save, X } from 'lucide-react';

export default function ProductForm({ product, onCancel, onSuccess }) {
  const initialState = { name: '', casNumber: '', unit: 'KG' };
  const [form, setForm] = useState(initialState);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name || '',
        casNumber: product.casNumber || '',
        unit: product.unit || 'KG',
      });
    } else {
      setForm(initialState);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const method = product ? 'PUT' : 'POST';
      const endpoint = product ? `/products/${product.id}` : '/products';

      await apiRequest(endpoint, {
        method,
        body: JSON.stringify(form),
      });

      setForm(initialState);
      onSuccess();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 sticky top-24">
      <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        {product ? 'Edit Product' : 'Add New Product'}
      </h3>
      
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">Product Name</label>
          <input
            required
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="e.g. Sodium Chloride"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">CAS Number</label>
          <input
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all"
            value={form.casNumber}
            onChange={(e) => setForm({ ...form, casNumber: e.target.value })}
            placeholder="e.g. 7647-14-5"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-slate-700 mb-1.5">Unit of Measure</label>
          <select
            className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all cursor-pointer"
            value={form.unit}
            onChange={(e) => setForm({ ...form, unit: e.target.value })}
          >
            <option value="KG">Kilograms (KG)</option>
            <option value="MT">Metric Tons (MT)</option>
            <option value="Litre">Liters (Litre)</option>
            <option value="UNIT">Units (Count)</option>
          </select>
        </div>

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 bg-indigo-600 text-white py-3 rounded-xl font-bold hover:bg-indigo-700 disabled:opacity-50 shadow-lg shadow-indigo-100 flex items-center justify-center gap-2"
          >
            {loading ? 'Saving...' : <><Save size={18} /> {product ? 'Update' : 'Save'}</>}
          </button>
          
          {product && (
            <button
              type="button"
              onClick={onCancel}
              className="px-4 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-all"
            >
              <X size={20} />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}