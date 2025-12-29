import { useEffect, useState } from 'react';
import DashboardLayout from '../components/dashboard/DashboardLayout';
import ProductForm from '../components/products/ProductForm';
import ProductTable from '../components/products/ProductTable';
import { apiRequest } from '../services/api';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const data = await apiRequest('/products');
      setProducts(Array.isArray(data) ? data : []); 
    } catch (err) {
      console.error("Fetch error:", err);
      setProducts([]); 
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Chemical Registry</h2>
        <p className="text-slate-500 mt-1">Manage your lab inventory and CAS database.</p>
      </div>

      {/* Changed to flex-col on mobile, grid on desktop */}
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-8">
        {/* Left Side: Form (Takes 4 columns) */}
        <div className="lg:col-span-4">
          <ProductForm
            product={editingProduct}
            onCancel={() => setEditingProduct(null)}
            onSuccess={() => {
              setEditingProduct(null);
              fetchProducts();
            }}
          />
        </div>

        {/* Right Side: Table (Takes 8 columns) */}
        <div className="lg:col-span-8">
          <ProductTable
            products={products}
            onDelete={fetchProducts}
            onEdit={(product) => {
              setEditingProduct(product);
              window.scrollTo({ top: 0, behavior: 'smooth' }); // Better mobile UX
            }}
          />
        </div>
      </div>
    </DashboardLayout>
  );
}