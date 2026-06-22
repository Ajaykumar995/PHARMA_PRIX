import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  searchProducts,
  getProductsByCategory,
  getRelatedProducts,
  updateProduct,
  deleteProduct,
  getDashboardStats,
  getCategoryStats,
} from "../controllers/productController.js";

const router = express.Router();

/* =========================
   DASHBOARD
========================= */
router.get("/dashboard/stats", getDashboardStats);

/* =========================
   CATEGORY STATS
========================= */
router.get("/categories/stats", getCategoryStats);

/* =========================
   PRODUCTS
========================= */
router.post("/", createProduct);
router.get("/", getProducts);
router.get("/search", searchProducts);
router.get("/category/:category", getProductsByCategory);
router.get("/related/:id", getRelatedProducts);

/* =========================
   PRODUCT DETAILS
========================= */
router.get("/:id", getProductById);
router.put("/:id", updateProduct); // Fixed duplicate PUT route
router.delete("/:id", deleteProduct);

export default router;