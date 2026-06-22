import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import API from "../services/api";

import "./CategoryPage.css";

function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [sortBy, setSortBy] = useState("default");

  useEffect(() => {
    fetchProducts();
    window.scrollTo(0, 0);
  }, [category]);

  const fetchProducts = async () => {
    try {
      const { data } = await API.get(
        `/products/category/${category}`
      );

      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  let filteredProducts = [...products];

  if (sortBy === "price-low") {
    filteredProducts.sort(
      (a, b) => a.sellingPrice - b.sellingPrice
    );
  }

  if (sortBy === "price-high") {
    filteredProducts.sort(
      (a, b) => b.sellingPrice - a.sellingPrice
    );
  }

  if (sortBy === "rating") {
    filteredProducts.sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="category-hero">

        <div className="hero-content">

          <span>CATEGORY</span>

          <h1>{category}</h1>

          <p>
            Genuine healthcare products from
            trusted brands.
          </p>

        </div>

      </section>

      {/* TOOLBAR */}

      <section className="category-toolbar">

        <h3>
          {filteredProducts.length} Products Found
        </h3>

        <select
          value={sortBy}
          onChange={(e) =>
            setSortBy(e.target.value)
          }
        >
          <option value="default">
            Sort Products
          </option>

          <option value="price-low">
            Price: Low to High
          </option>

          <option value="price-high">
            Price: High to Low
          </option>

          <option value="rating">
            Top Rated
          </option>
        </select>

      </section>

      {/* PRODUCTS */}

      <section className="category-products">

        {filteredProducts.length > 0 ? (

          <div className="products-grid">

            {filteredProducts.map((product) => (

              <div
                key={product._id}
                className="product-card"
                onClick={() =>
                  navigate(
                    `/product/${product._id}`
                  )
                }
              >

                <div className="product-image">

                  <img
                    src={product.images?.[0]}
                    alt={product.productName}
                  />

                  {product.discountPercentage > 0 && (

                    <div className="discount-tag">
                      {product.discountPercentage}% OFF
                    </div>

                  )}

                  <div className="stock-tag">
                    In Stock
                  </div>

                </div>

                <div className="product-content">

                  <div className="rating">
                    ⭐ {product.rating || 4.5}
                  </div>

                  <h3>
                    {product.productName}
                  </h3>

                  <p className="brand">
                    {product.brand}
                  </p>

                  <div className="price-box">

                    ₹{product.sellingPrice}

                    <span>
                      ₹{product.mrp}
                    </span>

                  </div>

                  <button
                    className="view-btn"
                  >
                    View Details
                  </button>

                </div>

              </div>

            ))}

          </div>

        ) : (

          <div className="no-products">

            <h2>
              No Products Found
            </h2>

            <p>
              Products will appear here soon.
            </p>

          </div>

        )}

      </section>

      <Footer />
    </>
  );
}

export default CategoryPage;