import { useState } from 'react';
import { apiRequest } from '../../services/api';
import { X, ArrowUpCircle, ArrowDownCircle, Loader2 } from 'lucide-react';

export default function StockActionModal({ item, type, onClose, onSuccess }) {
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(false);
  const isStockIn = type === 'in';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!quantity || quantity <= 0) return;
    
    setLoading(true);
    try {
      await apiRequest(`/inventory/update`, {
        method: 'POST',
        body: JSON.stringify({ 
          productId: item.product.id,
          quantity: Number(quantity),
          type: type.toUpperCase() 
        }),
      });
      onSuccess();
      onClose();
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-end sm:items-center justify-center z-[100] p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        {/* Header */}
        <div className={`p-6 flex items-center justify-between ${isStockIn ? 'bg-indigo-50' : 'bg-red-50'}`}>
          <div className="flex items-center gap-3">
            {isStockIn ? 
              <ArrowUpCircle className="text-indigo-600" /> : 
              <ArrowDownCircle className="text-red-600" />
            }
            <h3 className="font-bold text-slate-900">
              Stock {isStockIn ? 'Increase' : 'Decrease'}
            </h3>
          </div>
          <button onClick={onClose} className="p-1 hover:bg-black/5 rounded-lg transition-colors">
            <X size={20} className="text-slate-500" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <p className="text-sm text-slate-500 mb-4">
            Adjusting inventory for <span className="font-bold text-slate-900">{item.product.name}</span>. 
            Current stock: {item.quantity} {item.product.unit}
          </p>

          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Quantity to Change</label>
              <div className="relative">
                <input
                  type="number"
                  placeholder="0.00"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-200 text-lg font-bold px-4 py-3 rounded-xl focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500 outline-none transition-all"
                  autoFocus
                  required
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 font-bold text-slate-400 uppercase text-xs">
                  {item.product.unit}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            <button 
              type="button"
              onClick={onClose} 
              className="flex-1 px-4 py-3 text-slate-600 font-bold hover:bg-slate-50 rounded-xl transition-all border border-slate-200"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`flex-[2] py-3 rounded-xl font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                isStockIn ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100' : 'bg-red-600 hover:bg-red-700 shadow-red-100'
              } ${loading ? 'opacity-50' : ''}`}
            >
              {loading ? <Loader2 className="animate-spin" size={20} /> : `Confirm ${type.toUpperCase()}`}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}