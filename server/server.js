import dotenv from "dotenv";
// import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

console.log(
  "ENV TEST:",
  process.env.CLOUDINARY_CLOUD_NAME
);
dotenv.config();

import express from "express";
import cors from "cors";
import dns from "dns";

dns.setServers(["8.8.8.8", "1.1.1.1"]);

import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import uploadRoutes from "./routes/uploadRoutes.js";
import adminRoutes from "./routes/adminRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import settingRoutes from "./routes/settingRoutes.js";

dotenv.config();

connectDB();

const app = express();
console.log("ENV TEST:", process.env.CLOUDINARY_CLOUD_NAME);

app.use(cors());
app.use(express.json());
app.use("/api/products", productRoutes);
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
app.use("/api/settings", settingRoutes);
app.get("/", (req, res) => {
  res.send("🚀 Keerthy Medical API Running...");
});

app.get("/api/test", (req, res) => {
  res.json({
    success: true,
    message: "Backend Connected Successfully"
  });
});


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🔥 Server running on port ${PORT}`);
});
