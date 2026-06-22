import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import API from "../../services/api";
import toast from "react-hot-toast";

import "../styles/EditProduct.css";

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]); // NEW: Store categories

  const [product, setProduct] = useState({
    productName: "",
    brand: "",
    category: "",
    sellingPrice: "",
    mrp: "",
    stock: "",
    description: "",
    images: [""],
  });

  useEffect(() => {
    fetchProduct();
    fetchCategories(); // NEW: Fetch categories on load
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await API.get("/categories");
      setCategories(data);
    } catch (error) {
      toast.error("Failed to load categories");
    }
  };

  const fetchProduct = async () => {
    try {
      const { data } = await API.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch product details");
    }
  };

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const uploadImage = async (file) => {
    if (!file) return;
    try {
      setLoading(true);
      const formData = new FormData();
      formData.append("image", file);

      const { data } = await API.post("/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setProduct({
        ...product,
        images: [data.imageUrl],
      });

      toast.success("Image Uploaded Successfully 📸");
    } catch (error) {
      console.log(error);
      toast.error("Image Upload Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/products/${id}`, product);
      toast.success("Product Updated Successfully ✅");
      navigate("/admin/products"); 
    } catch (error) {
      console.log(error);
      toast.error("Failed To Update Product ❌");
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="edit-product-page">
        <div className="admin-page-header animate-slide-up">
          <div>
            <button className="back-btn" onClick={() => navigate(-1)}>
              ← Back
            </button>
            <h1>Edit Product</h1>
            <p>Update product details, pricing, and media.</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="edit-form animate-slide-up" style={{ animationDelay: "0.1s" }}>
          
          <div className="form-section">
            <h3>Basic Information</h3>
            <div className="form-grid">
              <div className="input-group full-width">
                <label>Product Name</label>
                <input type="text" name="productName" value={product.productName} onChange={handleChange} required />
              </div>

              <div className="input-group">
                <label>Brand</label>
                <input type="text" name="brand" value={product.brand} onChange={handleChange} required />
              </div>

              <div className="input-group">
                <label>Category</label>
                {/* PREMIUM DYNAMIC DROPDOWN */}
                <select name="category" value={product.category} onChange={handleChange} required>
                  <option value="" disabled>Select Category</option>
                  {categories.map((cat) => (
                    <option key={cat._id} value={cat.categoryName}>
                      {cat.categoryName}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Pricing & Inventory</h3>
            <div className="form-grid">
              <div className="input-group"><label>Selling Price (₹)</label><input type="number" name="sellingPrice" value={product.sellingPrice} onChange={handleChange} required /></div>
              <div className="input-group"><label>Maximum Retail Price (₹)</label><input type="number" name="mrp" value={product.mrp} onChange={handleChange} required /></div>
              <div className="input-group"><label>Available Stock</label><input type="number" name="stock" value={product.stock} onChange={handleChange} required /></div>
            </div>
          </div>

          <div className="form-section">
            <h3>Product Details</h3>
            <div className="input-group full-width">
              <label>Description</label>
              <textarea name="description" value={product.description} onChange={handleChange} required />
            </div>
          </div>

          <div className="form-section">
            <h3>Product Media</h3>
            <div className="upload-container">
              <div className="upload-dropzone">
                <span className="upload-icon">📸</span>
                <p>Click to upload or drag and drop</p>
                <span>SVG, PNG, JPG or GIF (max. 5MB)</span>
                <input type="file" accept="image/*" onChange={(e) => uploadImage(e.target.files[0])} disabled={loading} />
              </div>

              {loading && <div className="upload-loading">Uploading Image... ⏳</div>}

              {product.images?.[0] && !loading && (
                <div className="image-preview-wrapper">
                  <p>Current Image:</p>
                  <img src={product.images[0]} alt="Preview" className="preview-image" />
                </div>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="save-btn" disabled={loading}>
              {loading ? "Processing..." : "Save Changes"}
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default EditProduct;