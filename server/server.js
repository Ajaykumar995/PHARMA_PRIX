import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

import express from "express";
import cors from "cors";
import dns from "dns";
import rateLimit from "express-rate-limit";

import connectDB from "./config/db.js";

import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import settingRoutes from "./routes/settingRoutes.js";

// DNS Configuration
dns.setServers([
  "8.8.8.8",
  "1.1.1.1",
]);

// Connect Database
connectDB();

const app = express();

// Environment Check
console.log(
  "ENV TEST:",
  process.env.CLOUDINARY_CLOUD_NAME
);

// =============================
// API RATE LIMITER
// =============================
const apiLimiter = rateLimit({

  windowMs: 10 * 60 * 1000, // 10 Minutes

  max: 1000,

  standardHeaders: true,

  legacyHeaders: false,

  message: {
    success: false,
    message:
      "Too many requests. Please try again after 10 minutes.",
  },

});

// =============================
// MIDDLEWARE
// =============================
app.use(cors());

app.use(express.json());

app.use("/api", apiLimiter);

// =============================
// ROUTES
// =============================
app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/orders",
  orderRoutes
);

app.use(
  "/api/upload",
  uploadRoutes
);

app.use(
  "/api/admin",
  adminRoutes
);

app.use(
  "/api/categories",
  categoryRoutes
);

app.use(
  "/api/settings",
  settingRoutes
);

// =============================
// TEST ROUTES
// =============================
app.get("/", (req, res) => {

  res.send(
    "🚀 PHARMA-PRIX API Running..."
  );

});

app.get("/api/test", (req, res) => {

  res.json({

    success: true,

    message:
      "Backend Connected Successfully",

  });

});

// =============================
// SERVER
// =============================
const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {

  console.log(
    `🔥 Server running on port ${PORT}`
  );

});