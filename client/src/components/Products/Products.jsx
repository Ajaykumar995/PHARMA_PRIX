import { useEffect, useState } from "react";
import API from "../../services/api";
import "./Products.css";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await API.get("/products");

        setProducts(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <section className="products" id="products">
      <div className="products-container">

        <div className="section-title">
          <span>OUR PRODUCTS</span>
          <h2>
            Healthcare Products
            <br />
            We Offer
          </h2>
        </div>

        <div className="products-grid">

          {products.map((product) => (
            <div
              className="product-card"
              key={product._id}
            >
              <div className="product-image">
                <img
                  src={product.images?.[0]}
                  alt={product.productName}
                />
              </div>

              <div className="product-content">

                <h3>
                  {product.productName}
                </h3>

                <p>
                  {product.brand}
                </p>

                <div className="price-box">
                  ₹{product.sellingPrice}

                  <span>
                    ₹{product.mrp}
                  </span>
                </div>

                <a
                  href={`https://wa.me/918341713335?text=Hello Keerthy Medicals, I am interested in ${product.productName}`}
                  target="_blank"
                  rel="noreferrer"
                  className="whatsapp-btn"
                >
                  Enquire on WhatsApp
                </a>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Products;