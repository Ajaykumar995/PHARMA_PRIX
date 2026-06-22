import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: { type: String, required: true },
    brand: { type: String, required: true },
    category: { type: String, required: true },
    mrp: { type: Number, required: true },
    sellingPrice: { type: Number, required: true },
    stock: { type: Number, required: true },
    sold: { type: Number, default: 0 }, // 🔥 TRACKS UNITS SOLD FOR THE CHART
    description: { type: String, required: true },
    images: [{ type: String }], 
    rating: { type: Number, default: 4.5 }, 
  },
  { timestamps: true }
);

export default mongoose.model("Product", productSchema);