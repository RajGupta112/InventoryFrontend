import { LayoutDashboard, Package, Boxes, LogOut, FlaskConical, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Sidebar({ isOpen, setIsOpen }) {
  const location = useLocation();
  const menuItems = [
    { path: '/dashboard', icon: LayoutDashboard, label: 'Overview' },
    { path: '/products', icon: Package, label: 'Chemical Registry' },
    { path: '/inventory', icon: Boxes, label: 'Stock Levels' },
  ];

  return (
    <aside className={`
      fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:h-screen
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-3 px-2">
          <div className="p-2 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-100">
            <FlaskConical className="text-white" size={22} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">ChemFlow</span>
        </div>
        {/* Close button for mobile */}
        <button onClick={() => setIsOpen(false)} className="lg:hidden p-2 text-slate-500">
          <X size={20} />
        </button>
      </div>

      <nav className="flex-1 px-4 py-4 space-y-1">
        <p className="px-4 text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Main Menu</p>
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                isActive ? 'bg-indigo-50 text-indigo-600 shadow-sm' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <item.icon size={20} />
              <span className="font-semibold text-sm">{item.label}</span>
            </Link>
          );
        })}
      </nav>

    <Link to="/" className="p-4 border-t border-slate-100">
      <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-slate-500 hover:bg-red-50 hover:text-red-600 transition-colors group font-semibold text-sm">
        <LogOut size={20} />
        Sign Out
      </button>
    </Link>
    </aside>
  );
}