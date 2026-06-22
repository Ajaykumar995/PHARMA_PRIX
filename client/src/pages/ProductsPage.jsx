import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import API from "../services/api";
import "./ProductsPage.css";

function ProductsPage() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [dbCategories, setDbCategories] = useState([]); // 🔥 REAL DATABASE CATEGORIES
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchProducts();
    fetchCategories(); // 🔥 FETCH REAL CATEGORIES ON LOAD
    window.scrollTo(0, 0);
  }, []);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get("/products");
      setProducts(data);
    } catch (error) {
      console.log("Failed to fetch products", error);
    }
  };

  const fetchCategories = async () => {
    try {
      const { data } = await API.get("/categories");
      setDbCategories(data);
    } catch (error) {
      console.log("Failed to fetch categories", error);
    }
  };

  // Generate the filter pills from the real database categories
  const categoryList = ["All", ...dbCategories.map((c) => c.categoryName)];

  // Filter products by search AND category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.productName?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Smooth scroll handler for visual category cards
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    setSearchTerm("");
    const section = document.getElementById("products-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <Navbar />

      {/* PREMIUM HERO SECTION */}
      <section className="products-hero">
        <div className="products-overlay animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <span className="hero-badge">KEERTHY MEDICALS</span>

          <h1>
            Trusted Healthcare
            <br />
            Products
          </h1>

          <p>
            Genuine medicines, wellness products, and healthcare devices delivered to your door.
          </p>

          {/* PREMIUM SEARCH BOX */}
          <div className="search-wrapper">
            <div className="search-box-container">
              <div className="input-with-icon">
                <span className="search-icon">🔍</span>
                <input
                  type="text"
                  placeholder="Search for medicines, health devices..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setSelectedCategory("All");
                  }}
                />
              </div>
              <button className="search-btn">Search</button>
            </div>

            {/* PREMIUM SEARCH DROPDOWN */}
            {searchTerm && filteredProducts.length > 0 && (
              <div className="search-dropdown">
                {filteredProducts.slice(0, 6).map((product) => (
                  <div
                    key={product._id}
                    className="search-item"
                    onClick={() => navigate(`/product/${product._id || product.id}`)}
                  >
                    <img src={product.images?.[0]} alt={product.productName} />
                    <div className="search-item-info">
                      <h4>{product.productName}</h4>
                      <p>{product.brand}</p>
                    </div>
                    <span className="search-item-price">₹{product.sellingPrice}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* PREMIUM VISUAL CATEGORIES (NOW REAL DATA) */}
      <section className="categories animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <div className="section-heading">
          <span>EXPLORE</span>
          <h2>Shop By Category</h2>
        </div>

        <div className="category-grid">
          {dbCategories.length > 0 ? (
            dbCategories.map((cat, index) => (
              <div
                key={cat._id || index}
                className="category-card"
                onClick={() => handleCategoryClick(cat.categoryName)}
              >
                <div className="category-icon">
                  {/* Safely render real image from DB, or fallback if none uploaded */}
                  <img 
                    src={cat.image || "https://placehold.co/100x100/e2e8f0/64748b?text=Img"} 
                    alt={cat.categoryName} 
                  />
                </div>
                <h3>{cat.categoryName}</h3>
                <p>{cat.description || "Explore this category"}</p>
              </div>
            ))
          ) : (
            <p style={{ textAlign: 'center', gridColumn: '1 / -1', color: '#64748b' }}>
              Loading categories...
            </p>
          )}
        </div>
      </section>

      {/* PREMIUM PRODUCTS SHOWCASE */}
      <section id="products-section" className="products-showcase animate-slide-up" style={{ animationDelay: "0.3s" }}>
        <div className="section-heading">
          <span>{selectedCategory === "All" ? "ALL INVENTORY" : selectedCategory.toUpperCase()}</span>
          <h2>{selectedCategory === "All" ? "Popular Healthcare Products" : selectedCategory}</h2>
        </div>

        {/* HORIZONTAL CATEGORY PILL FILTER */}
        <div className="category-filter-wrapper animate-slide-up" style={{ animationDelay: "0.4s" }}>
          <div className="category-tabs">
            {categoryList.map((category) => (
              <button
                key={category}
                className={`category-tab ${selectedCategory === category ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategory(category);
                  setSearchTerm("");
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* PRODUCTS GRID */}
        <div className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product, index) => (
              <div
                key={product._id}
                className="product-card animate-slide-up"
                style={{ animationDelay: `${0.1 + (index * 0.05)}s` }}
                onClick={() => navigate(`/product/${product._id || product.id}`)}
              >
                <div className="product-image">
                  <img src={product.images?.[0]} alt={product.productName} />
                </div>
                <div className="product-content">
                  <h3>{product.productName}</h3>
                  <p>{product.brand}</p>
                  <div className="price-box">₹{product.sellingPrice}</div>
                </div>
              </div>
            ))
          ) : (
            <div className="no-products-found">
              <div className="empty-icon">📦</div>
              <h3>No products found in this category</h3>
              <p>We are constantly updating our inventory. Check back soon!</p>
              <button onClick={() => setSelectedCategory("All")} className="reset-btn">
                View All Products
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductsPage;