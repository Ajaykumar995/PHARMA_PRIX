import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import API from "../../services/api";
import toast from "react-hot-toast";

import "../styles/Categories.css";

function Categories() {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const { data } = await API.get("/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to fetch categories");
    }
  };

  const deleteCategory = async () => {
    try {
      await API.delete(`/categories/${selectedCategory._id}`);
      toast.success("Category Deleted Successfully 🗑️");
      setShowDeleteModal(false);
      setSelectedCategory(null);
      fetchCategories();
    } catch (error) {
      toast.error("Delete Failed ❌");
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="categories-page">
        <div className="page-header animate-slide-up">
          <div>
            <h1>Categories</h1>
            <p>Manage product categories and inventory structures</p>
          </div>
          <button className="add-category-btn" onClick={() => navigate("/admin/add-category")}>
            + Add Category
          </button>
        </div>

        <div className="categories-admin-grid animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {categories.map((category) => (
            <div key={category._id} className="admin-cat-card">
              <div className="cat-card-image">
                <img 
                  src={category.image || "https://placehold.co/400x400/e2e8f0/64748b?text=No+Image"} 
                  alt={category.categoryName} 
                />
              </div>
              
              <div className="cat-card-content">
                <h2>{category.categoryName}</h2>
                <p>{category.description || "No description provided."}</p>
                
                <div className="action-buttons">
                  <button className="edit-btn" onClick={() => navigate(`/admin/edit-category/${category._id}`)}>
                    Edit
                  </button>
                  <button className="delete-btn" onClick={() => { setSelectedCategory(category); setShowDeleteModal(true); }}>
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}

          {categories.length === 0 && (
            <div className="empty-state">No categories found. Create one to get started!</div>
          )}
        </div>

        {/* PREMIUM DELETE MODAL */}
        {showDeleteModal && (
          <div className="modal-overlay">
            <div className="delete-modal animate-pop-in">
              <div className="modal-warning-icon">⚠️</div>
              <h2>Delete Category</h2>
              <p>Are you sure you want to delete<br/><strong>{selectedCategory?.categoryName}</strong>?<br/><span>This action cannot be undone.</span></p>
              <div className="modal-actions">
                <button className="cancel-btn" onClick={() => { setShowDeleteModal(false); setSelectedCategory(null); }}>Cancel</button>
                <button className="confirm-delete-btn" onClick={deleteCategory}>Yes, Delete</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Categories;