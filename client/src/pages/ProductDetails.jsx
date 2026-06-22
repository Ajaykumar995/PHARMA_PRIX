import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSettings } from "../context/SettingsContext"; // 🔥 IMPORT CONTEXT
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import API from "../services/api";
import "./ProductDetails.css";

function stockStatus(stock) {
  if (stock === 0) return { label: "Out of Stock", cls: "out", icon: "✕" };
  if (stock <= 10) return { label: `Only ${stock} left in stock`, cls: "low", icon: "⚠" };
  return { label: "In Stock", cls: "in", icon: "✅" };
}

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { settings } = useSettings(); // 🔥 USE SETTINGS FROM CONTEXT

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    fetchProduct();
    setActiveImage(0);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const fetchProduct = async () => {
    try {
      const { data } = await API.get(`/products/${id}`);
      setProduct(data);
      const related = await API.get(`/products/category/${data.category}`);
      setRelatedProducts(
        related.data.filter((item) => item._id !== data._id).slice(0, 4)
      );
    } catch (error) {
      console.log(error);
    }
  };

  // 🔥 CHECK FOR PRODUCT AND SETTINGS LOAD
  if (!product || !settings) {
    return (
      <div className="loader-container">
        <h1>Loading Premium Details...</h1>
      </div>
    );
  }

  const stock = stockStatus(product.stock);
  const images = product.images?.length ? product.images : [];

  return (
    <>
      <Navbar />

      <section className="product-top-banner fade-in-up" style={{ animationDelay: "0.1s" }}>
        <h1>Trusted Healthcare Products</h1>
        <p>Genuine medicines from authorized brands delivered with care.</p>
      </section>

      <section className="product-details-container">
        <div className="product-gallery fade-in-up" style={{ animationDelay: "0.2s" }}>
          <div className="main-image">
            <span className="verified-seal">✓ Verified Genuine</span>
            <img
              src={images[activeImage]}
              alt={product.productName}
              className="premium-product-image"
            />
          </div>

          {images.length > 1 && (
            <div className="gallery-thumbs">
              {images.map((img, index) => (
                <img
                  key={img}
                  src={img}
                  alt={`${product.productName} ${index + 1}`}
                  className={index === activeImage ? "active" : ""}
                  onClick={() => setActiveImage(index)}
                />
              ))}
            </div>
          )}
        </div>

        <div className="product-info fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="product-badges">
            <div className="product-category">{product.category}</div>
          </div>

          <h1>{product.productName}</h1>
          <h3>{product.brand}</h3>

          <div className="product-rating">★ {Number(product.rating || 4.5).toFixed(1)} Rating</div>

          <div className="product-price">
            ₹{product.sellingPrice}
            {product.mrp > product.sellingPrice && <span>₹{product.mrp}</span>}
          </div>

          <div className={`stock-badge ${stock.cls}`}>
            {stock.icon} {stock.label}
          </div>

          <p className="product-description">{product.description}</p>

          {/* 🔥 DYNAMIC WHATSAPP BUTTON */}
          <a
            href={`https://wa.me/${settings?.whatsapp || ""}?text=${encodeURIComponent(
              `Hello ${settings?.storeName || "Keerthy Medicals"},

I am interested in:

Product: ${product.productName}
Brand: ${product.brand}
Price: ₹${product.sellingPrice}

Please provide more details.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Order On WhatsApp
          </a>
          <p className="whatsapp-note">Usually replies within a few minutes</p>
        </div>
      </section>

      <section className="trust-strip fade-in-up" style={{ animationDelay: "0.4s" }}>
        <div>🚚 Fast Delivery</div>
        <div>💊 Genuine Medicines</div>
        <div>🔒 Secure Payments</div>
        <div>⭐ Trusted Pharmacy</div>
      </section>

      <section className="related-products fade-in-up" style={{ animationDelay: "0.5s" }}>
        <div className="section-heading">
          <span>RELATED PRODUCTS</span>
          <h2>You May Also Like</h2>
        </div>

        <div className="related-grid">
          {relatedProducts.map((item, index) => (
            <div
              className="related-card fade-in-up"
              key={item._id}
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              onClick={() => navigate(`/product/${item._id}`)}
            >
              <div className="related-image">
                <img src={item.images?.[0]} alt={item.productName} />
              </div>
              <h3>{item.productName}</h3>
              <p>₹{item.sellingPrice}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;