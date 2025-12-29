import React, { useState, useEffect } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import { Package, Boxes, AlertTriangle, TrendingUp, ArrowRight, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../services/api';

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalStock: 0,
    lowStock: 0,
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const products = await apiRequest('/products');
        const inventory = await apiRequest('/inventory');
        
        setStats({
          totalProducts: products.length,
          totalStock: inventory.reduce((acc, item) => acc + item.quantity, 0),
          lowStock: inventory.filter(item => item.quantity <= 5).length,
        });
      } catch (err) {
        console.error("Failed to load dashboard stats", err);
      }
    }
    fetchStats();
  }, []);

  const statCards = [
    { label: 'Total Chemicals', value: stats.totalProducts, icon: Package, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { label: 'Stock Volume', value: stats.totalStock, icon: Boxes, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'Low Stock Alerts', value: stats.lowStock, icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  return (
    <DashboardLayout>
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Welcome back, Admin 👋
          </h2>
          <p className="text-slate-500 mt-1">Here is what's happening with your inventory today.</p>
        </div>
        <Link 
          to="/products"
          className="flex items-center justify-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-2xl font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-200 w-fit"
        >
          <Plus size={20} />
          New Product
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        {statCards.map((card, index) => (
          <div key={index} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-2xl ${card.bg} ${card.color}`}>
                <card.icon size={24} />
              </div>
              <span className="flex items-center gap-1 text-emerald-500 text-xs font-bold bg-emerald-50 px-2 py-1 rounded-lg">
                <TrendingUp size={14} /> 
              </span>
            </div>
            <p className="text-slate-500 text-sm font-medium">{card.label}</p>
            <h3 className="text-3xl font-black text-slate-900 mt-1">{card.value}</h3>
          </div>
        ))}
      </div>

      {/* Quick Navigation / Recent Activity Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Quick Operations</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link to="/inventory" className="group p-4 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/50 transition-all">
              <div className="flex items-center justify-between text-indigo-600 mb-2">
                <Boxes size={24} />
                <ArrowRight size={18} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
              </div>
              <p className="font-bold text-slate-800">Adjust Stock</p>
              <p className="text-xs text-slate-500 mt-1">Record IN/OUT movements</p>
            </Link>
            
            <Link to="/products" className="group p-4 rounded-2xl border border-slate-100 hover:border-emerald-100 hover:bg-emerald-50/50 transition-all">
              <div className="flex items-center justify-between text-emerald-600 mb-2">
                <Package size={24} />
                <ArrowRight size={18} className="-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
              </div>
              <p className="font-bold text-slate-800">Registry</p>
              <p className="text-xs text-slate-500 mt-1">View chemical database</p>
            </Link>
          </div>
        </div>

        
      </div>
    </DashboardLayout>
  );
}