import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import API from "../../services/api";
import toast from "react-hot-toast";
import "../styles/AddCategory.css"; // We use the shared form CSS!

function AddProduct() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]); // Real Data State

  const [formData, setFormData] = useState({
    productName: "", brand: "", category: "", mrp: "", sellingPrice: "", stock: "", description: "", image: "",
  });

  useEffect(() => { fetchCategories(); }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await API.get("/categories");
      setCategories(data);
    } catch (error) { toast.error("Failed to load categories ❌"); }
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const uploadImage = async (file) => {
    if (!file) return;
    try {
      setLoading(true);
      const data = new FormData(); data.append("image", file);
      const res = await API.post("/upload", data, { headers: { "Content-Type": "multipart/form-data" } });
      setFormData({ ...formData, image: res.data.imageUrl });
      toast.success("Image Uploaded Successfully 📸");
    } catch (error) { toast.error("Image Upload Failed ❌"); } finally { setLoading(false); }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.image) return toast.error("Please upload a product image!");
    try {
      await API.post("/products", { ...formData, images: [formData.image] });
      toast.success("Product Added Successfully ✅");
      navigate("/admin/products");
    } catch (error) { toast.error("Failed To Add Product ❌"); }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="add-category-page">
        <div className="admin-page-header animate-slide-up">
          <div><button className="back-btn" onClick={() => navigate(-1)}>← Back</button><h1>Add Product</h1></div>
        </div>

        <form onSubmit={handleSubmit} className="category-form animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="form-section">
            <h3>Basic Info</h3>
            <div className="form-grid">
              <div className="input-group full-width"><label>Product Name</label><input type="text" name="productName" value={formData.productName} onChange={handleChange} required /></div>
              <div className="input-group"><label>Brand</label><input type="text" name="brand" value={formData.brand} onChange={handleChange} required /></div>
              
              {/* REAL DATABASE CATEGORIES */}
              <div className="input-group">
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange} required>
                  <option value="" disabled>Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat.categoryName}>{cat.categoryName}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Pricing & Stock</h3>
            <div className="form-grid">
              <div className="input-group"><label>Selling Price (₹)</label><input type="number" name="sellingPrice" value={formData.sellingPrice} onChange={handleChange} required /></div>
              <div className="input-group"><label>MRP (₹)</label><input type="number" name="mrp" value={formData.mrp} onChange={handleChange} required /></div>
              <div className="input-group"><label>Stock</label><input type="number" name="stock" value={formData.stock} onChange={handleChange} required /></div>
            </div>
          </div>

          <div className="form-section">
            <h3>Description & Media</h3>
            <div className="input-group"><textarea name="description" rows="4" value={formData.description} onChange={handleChange} required /></div>
            <div className="upload-container">
              <div className="upload-dropzone">
                <span className="upload-icon">📸</span><p>Upload Image</p>
                <input type="file" onChange={(e) => uploadImage(e.target.files[0])} disabled={loading} />
              </div>
              {loading && <div className="upload-loading">Uploading... ⏳</div>}
              {formData.image && !loading && (<img src={formData.image} alt="preview" className="preview-image" />)}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="save-btn" disabled={loading}>{loading ? "Processing..." : "Save Product"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddProduct;