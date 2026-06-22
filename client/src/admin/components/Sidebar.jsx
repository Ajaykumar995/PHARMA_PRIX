import { NavLink, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "./Sidebar.css";
import { useSettings } from "../../context/SettingsContext";
function Sidebar() {

  const navigate =
    useNavigate();
  const { settings } =
    useSettings();

  const handleLogout =
    () => {

      localStorage.removeItem(
        "admin"
      );

      localStorage.removeItem(
        "adminToken"
      );

      toast.success(
        "Logged Out Successfully 👋"
      );

      setTimeout(() => {

        navigate("/");

      }, 1000);
    };

  return (

    <div className="sidebar">

      <div className="sidebar-logo">

  {settings?.logo && (
    <img
      src={settings.logo}
      alt="Store Logo"
      className="sidebar-brand-logo"
    />
  )}

  <h2>
    {settings?.storeName || "Medical Store"}
  </h2>

  <p>
    Admin Panel
  </p>

</div>
      <div className="sidebar-links">

        <NavLink
          to="/admin/dashboard"
        >
          📊 Dashboard
        </NavLink>

        <NavLink
          to="/admin/products"
        >
          💊 Products
        </NavLink>

        <NavLink
          to="/admin/add-product"
        >
          ➕ Add Product
        </NavLink>

        <NavLink
          to="/admin/categories"
        >
          📂 Categories
        </NavLink>

        <NavLink
          to="/admin/orders"
        >
          🛒 Orders
        </NavLink>

        <NavLink
          to="/admin/settings"
        >
          ⚙ Settings
        </NavLink>

      </div>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        Logout
      </button>

    </div>

  );
}

export default Sidebar;