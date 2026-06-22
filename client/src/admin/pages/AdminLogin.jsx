import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../services/api";
import toast from "react-hot-toast";
import "../styles/AdminLogin.css";
import { useSettings } from "../../context/SettingsContext";

function AdminLogin() {
  const { settings } =
  useSettings();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await API.post("/admin/login", { email, password });
      localStorage.setItem("adminToken", data.token);
      toast.success("Welcome back, Admin! 🚀");
      navigate("/admin/dashboard");
    } catch (error) {
      toast.error("Invalid Credentials ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login-page">
      <div className="admin-login-card animate-slide-up">
        <div className="logo-circle">

          {settings?.logo ? (
            <img
              src={settings.logo}
              alt="logo"
              className="login-logo"
            />
          ) : (
            "💊"
          )}

        </div>

        <h1>
          {settings?.storeName ||
            "Medical Store"}
        </h1>

        <p>
          Secure Admin Portal
        </p>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="email"
              placeholder="Admin Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="Security Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn" disabled={loading}>
            {loading ? "Authenticating..." : "Access Dashboard"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AdminLogin;