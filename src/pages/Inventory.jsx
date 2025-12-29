import { useEffect, useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import InventoryTable from '../components/inventory/InventoryTable';
import StockActionModal from '../components/inventory/StockActionModal';
import { apiRequest } from '../services/api';
import { RefreshCcw } from 'lucide-react';

export default function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [selected, setSelected] = useState(null);
  const [action, setAction] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchInventory = async () => {
    setLoading(true);
    try {
      const data = await apiRequest('/inventory');
      setInventory(data || []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInventory();
  }, []);

  return (
    <DashboardLayout>
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Real-time Inventory</h2>
          <p className="text-slate-500 mt-1">Track current stock levels and record movement.</p>
        </div>
        <button 
          onClick={fetchInventory}
          className="p-2.5 text-slate-500 hover:bg-white hover:text-indigo-600 rounded-xl border border-transparent hover:border-slate-200 transition-all"
          title="Refresh Data"
        >
          <RefreshCcw size={20} className={loading ? 'animate-spin' : ''} />
        </button>
      </div>

      <InventoryTable
        inventory={inventory}
        onIn={(item) => {
          setSelected(item);
          setAction('in');
        }}
        onOut={(item) => {
          setSelected(item);
          setAction('out');
        }}
      />

      {selected && (
        <StockActionModal
          item={selected}
          type={action}
          onClose={() => {
            setSelected(null);
            setAction(null);
          }}
          onSuccess={fetchInventory}
        />
      )}
    </DashboardLayout>
  );
}