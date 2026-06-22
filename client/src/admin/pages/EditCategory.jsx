import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import API from "../../services/api";
import toast from "react-hot-toast";
import "../styles/AddCategory.css";

function EditCategory() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ categoryName: "", description: "", image: "" });

  useEffect(() => { fetchCategory(); }, []);

  const fetchCategory =
async () => {

  try {

    const { data } =
      await API.get(
        `/categories/${id}`
      );

    setFormData(data);

  } catch (error) {

    toast.error(
      "Failed to load category"
    );

  }
};

  const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

  const uploadImage = async (file) => {
    if (!file) return;
    try {
      setLoading(true);
      const data = new FormData(); data.append("image", file);
      const res = await API.post("/upload", data, { headers: { "Content-Type": "multipart/form-data" } });
      setFormData({ ...formData, image: res.data.imageUrl });
      toast.success("Image Updated 📸");
    } catch (error) { toast.error("Image Upload Failed ❌"); } finally { setLoading(false); }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await API.put(`/categories/${id}`, formData);
      toast.success("Category Updated Successfully ✅");
      navigate("/admin/categories");
    } catch (error) { toast.error("Failed to update category"); }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="add-category-page">
        <div className="admin-page-header animate-slide-up">
          <div><button className="back-btn" onClick={() => navigate(-1)}>← Back</button><h1>Edit Category</h1><p>Update category details and image</p></div>
        </div>

        <form onSubmit={submitHandler} className="category-form animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="form-section">
            <h3>Category Details</h3>
            <div className="input-group">
              <label>Category Name</label>
              <input type="text" name="categoryName" value={formData.categoryName} onChange={handleChange} required />
            </div>
            <div className="input-group">
              <label>Description</label>
              <textarea name="description" rows="3" value={formData.description} onChange={handleChange} />
            </div>
          </div>

          <div className="form-section">
            <h3>Category Image</h3>
            <div className="upload-container">
              <div className="upload-dropzone">
                <span className="upload-icon">📸</span><p>Click to change image</p>
                <input type="file" accept="image/*" onChange={(e) => uploadImage(e.target.files[0])} disabled={loading} />
              </div>
              {loading && <div className="upload-loading">Uploading... ⏳</div>}
              {formData.image && !loading && (
                <div className="image-preview-wrapper"><p>Current Image:</p><img src={formData.image} alt="preview" className="preview-image" /></div>
              )}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="cancel-btn" onClick={() => navigate(-1)}>Cancel</button>
            <button type="submit" className="save-btn" disabled={loading}>{loading ? "Processing..." : "Save Changes"}</button>
          </div>
        </form>
      </div>
    </div>
  );
}
export default EditCategory;