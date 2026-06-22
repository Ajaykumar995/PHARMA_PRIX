import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import API from "../../services/api";
import toast from "react-hot-toast";
import "../styles/AddCategory.css";

function AddCategory() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ categoryName: "", description: "", image: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadImage = async (file) => {
    if (!file) return;
    try {
      setLoading(true);
      const data = new FormData();
      data.append("image", file);
      const res = await API.post("/upload", data, { headers: { "Content-Type": "multipart/form-data" } });
      setFormData({ ...formData, image: res.data.imageUrl });
      toast.success("Image Uploaded 📸");
    } catch (error) { toast.error("Image Upload Failed ❌"); } finally { setLoading(false); }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await API.post("/categories", formData);
      toast.success("Category Created Successfully 🎉");
      navigate("/admin/categories");
    } catch (error) { toast.error("Failed to create category"); }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="add-category-page">
        <div className="admin-page-header animate-slide-up">
          <div><button className="back-btn" onClick={() => navigate(-1)}>← Back</button><h1>Add Category</h1><p>Create a new product category</p></div>
        </div>

        <form onSubmit={submitHandler} className="category-form animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="form-section">
            <h3>Category Details</h3>
            <div className="input-group">
              <label>Category Name</label>
              <input type="text" name="categoryName" placeholder="e.g. Baby Care" value={formData.categoryName} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Description</label>
              <textarea name="description" rows="3" placeholder="Short description..." value={formData.description} onChange={handleChange} />
            </div>
          </div>

          <div className="form-section">
            <h3>Category Image</h3>
            <div className="upload-container">
              <div className="upload-dropzone">
                <span className="upload-icon">📸</span><p>Click to upload</p>
                <input type="file" accept="image/*" onChange={(e) => uploadImage(e.target.files[0])} disabled={loading} />
              </div>
              {loading && <div className="upload-loading">Uploading... ⏳</div>}
              {formData.image && !loading && (
                <div className="image-preview-wrapper"><p>Preview:</p><img src={formData.image} alt="preview" className="preview-image" /></div>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="save-btn" disabled={loading}>{loading ? "Processing..." : "Create Category"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddCategory;