import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../../services/api";
import toast from "react-hot-toast";
import "../styles/Settings.css";

function Settings() {
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [formData, setFormData] = useState({
    storeName: "", phone: "", email: "", whatsapp: "", address: "",
    logo: "", deliveryCharge: 0, facebook: "", instagram: "", youtube: "", linkedin: "",
  });

  useEffect(() => { fetchSettings(); }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      const { data } = await API.get("/settings");
      if (data) setFormData(data);
    } catch (error) {
      toast.error("Failed to load settings ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const uploadLogo = async (file) => {
    if (!file) return;
    try {
      setSaving(true);
      const data = new FormData();
      data.append("image", file);
      const res = await API.post("/upload", data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setFormData((prev) => ({ ...prev, logo: res.data.imageUrl }));
      toast.success("Logo uploaded! 📸");
    } catch (error) {
      toast.error("Upload failed ❌");
    } finally {
      setSaving(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setSaving(true);
      await API.put("/settings", formData);
      toast.success("Settings updated! 🚀");
    } catch (error) {
      toast.error("Failed to update ❌");
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="dashboard-layout"><Sidebar /><div className="settings-page">Loading...</div></div>;

  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="settings-page">
        <div className="admin-page-header animate-slide-up">
          <h1>Global Store Settings</h1>
        </div>

        <form onSubmit={handleSubmit} className="edit-form animate-slide-up">
          {/* Identity */}
          <div className="form-section">
            <h3>General Identity</h3>
            <div className="form-grid">
              <div className="input-group">
                <label>Pharmacy Name</label>
                <input type="text" name="storeName" value={formData.storeName} onChange={handleChange} required />
              </div>
              <div className="input-group">
                <label>Delivery Fee (₹)</label>
                <input type="number" name="deliveryCharge" value={formData.deliveryCharge} onChange={handleChange} />
              </div>
            </div>
          </div>

          {/* Communications */}
          <div className="form-section">
            <h3>Communication Strings</h3>
            <div className="form-grid">
              <div className="input-group">
                <label>Helpline Number</label>
                <input type="text" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="input-group">
                <label>WhatsApp Number</label>
                <input type="text" name="whatsapp" value={formData.whatsapp} onChange={handleChange} />
              </div>
              <div className="input-group full-width">
                <label>Support Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <div className="input-group full-width">
                <label>Address</label>
                <textarea name="address" rows="3" value={formData.address} onChange={handleChange} />
              </div>
            </div>
          </div>
          <div className="form-section">
  <h3>Media Branding Asset</h3>
  <div className="upload-container">
    {/* 🔥 THIS IS THE UPLOAD BOX */}
    <div className="upload-dropzone">
      <span className="upload-icon">🖼️</span>
      <p>Click here to {formData.logo ? "replace" : "upload"} logo</p>
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => uploadLogo(e.target.files[0])} 
        disabled={saving} 
      />
    </div>

    {/* 🔥 THIS IS THE PREVIEW BOX */}
    {formData.logo && (
      <div className="image-preview-wrapper">
        <p>Active Logo:</p>
        <div className="logo-preview-box">
          <img src={formData.logo} alt="Store Branding Logo" />
          <button 
            type="button" 
            className="delete-logo-btn" 
            onClick={() => setFormData(prev => ({ ...prev, logo: "" }))}
          >
            ✕
          </button>
        </div>
      </div>
    )}
  </div>
</div>
          {/* Social Links */}
          <div className="form-section">
            <h3>Social Footprint</h3>
            <div className="form-grid">
              <input type="url" name="facebook" placeholder="Facebook URL" value={formData.facebook} onChange={handleChange} />
              <input type="url" name="instagram" placeholder="Instagram URL" value={formData.instagram} onChange={handleChange} />
              <input type="url" name="youtube" placeholder="YouTube URL" value={formData.youtube} onChange={handleChange} />
              <input type="url" name="linkedin" placeholder="LinkedIn URL" value={formData.linkedin} onChange={handleChange} />
            </div>
          </div>

          <button type="submit" className="save-btn" disabled={saving}>
            {saving ? "Saving..." : "Save System Changes"}
          </button>
        </form>
      </div>
    </div>
  );
}
export default Settings;