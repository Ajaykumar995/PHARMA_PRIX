import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import API from "../../services/api";
import "../styles/Products.css";
import toast from "react-hot-toast";

function Products() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // REAL DATA
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await API.get("/categories");
      setCategories(data);
    } catch (error) { toast.error("Failed to load categories"); }
  };

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data);
    } catch (error) { console.log(error); }
  };

  const deleteProduct = async () => {
    try {
      await API.delete(`/products/${selectedProduct._id}`);
      toast.success("Product Deleted Successfully 🗑️");
      setShowDeleteModal(false);
      setSelectedProduct(null);
      fetchProducts();
    } catch (error) { toast.error("Failed To Delete Product ❌"); }
  };

  const filteredProducts = products.filter((product) => {
    const searchMatch = product.productName?.toLowerCase().includes(search.toLowerCase());
    const categoryMatch = category === "All" ? true : product.category === category;
    return searchMatch && categoryMatch;
  });

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="products-page">
        <div className="products-header">
          <div><h1>Product Management</h1><p>Manage medicines and healthcare products</p></div>
          <button className="add-btn" onClick={() => navigate("/admin/add-product")}>+ Add Product</button>
        </div>

        <div className="filters">
          <div className="search-input-wrapper">
            <span className="filter-icon">🔍</span>
            <input type="text" placeholder="Search Product..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>

          <div className="select-wrapper">
            {/* REAL DATABASE DROPDOWN */}
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="All">All Categories</option>
              {categories.map((cat) => (
                <option key={cat._id} value={cat.categoryName}>{cat.categoryName}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="product-count">Showing <span>{filteredProducts.length}</span> Products</div>

        <div className="table-container">
          <table>
            <thead><tr><th>Image</th><th>Name</th><th>Brand</th><th>Category</th><th>Price</th><th>Stock</th><th>Actions</th></tr></thead>
            <tbody>
              {filteredProducts.map((product) => (
                <tr key={product._id}>
                  <td><img src={product.images?.[0]} alt={product.productName} className="table-image" /></td>
                  <td className="fw-600">{product.productName}</td>
                  <td className="text-gray">{product.brand}</td>
                  <td><span className="table-category-badge">{product.category}</span></td>
                  <td className="fw-700 text-teal">₹{product.sellingPrice}</td>
                  <td><span className={product.stock > 0 ? "in-stock" : "out-stock"}>{product.stock > 0 ? "In Stock" : "Out Of Stock"}</span></td>
                  <td>
                    <div className="action-buttons">
                      <button className="edit-btn" onClick={() => navigate(`/admin/edit-product/${product._id}`)}>Edit</button>
                      <button className="delete-btn" onClick={() => { setSelectedProduct(product); setShowDeleteModal(true); }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
              {filteredProducts.length === 0 && (<tr><td colSpan="7" className="empty-table">No products found.</td></tr>)}
            </tbody>
          </table>
        </div>

        {/* DELETE MODAL */}
        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="delete-modal animate-pop-in">
              <div className="modal-warning-icon">⚠️</div>
              <h2>Delete Product</h2>
              <p>Are you sure you want to delete<br/><strong>{selectedProduct?.productName}</strong>?<br/><span>This action cannot be undone.</span></p>
              <div className="modal-actions">
                <button className="cancel-btn" onClick={() => { setShowDeleteModal(false); setSelectedProduct(null); }}>Cancel</button>
                <button className="confirm-delete-btn" onClick={deleteProduct}>Yes, Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default Products;