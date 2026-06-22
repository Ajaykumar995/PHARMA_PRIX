import dotenv from "dotenv";
dotenv.config();

import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import connectDB from "./config/db.js";
import Product from "./models/Product.js";
import products from "./data/products.js";

const importData = async () => {
  try {
    await connectDB();
    console.log(
  "ENUMS:",
  Product.schema.path("category").enumValues
);

    await Product.deleteMany();

    function transformProduct(p) {
      const categoryMap = {
        "Prescription Medicines": "Prescription Medicine",
        "OTC Medicines": "OTC Medicine",
        "Healthcare Devices": "Healthcare Device",
        "Nutrition & Supplements": "Nutrition",
      };

      const discountPercentage = p.oldPrice
        ? Math.round(
            ((p.oldPrice - p.price) / p.oldPrice) * 100
          )
        : 0;

      const stockQty =
        p.stock === "Low Stock" ? 5 : 50;

      return {
        productName: p.name,
        brand: p.brand,

        category:
          categoryMap[p.category] || p.category,

        description: `${p.name} by ${p.brand}. Trusted healthcare product.`,

        images: [p.image],

        mrp: p.oldPrice || p.price,

        sellingPrice: p.price,

        discountPercentage,

        stock: stockQty,

        rating: p.rating || 0,

        reviewsCount: 0,

        featured: true,

        trending: false,

        bestSeller: false,

        active: true,
      };
    }

    const transformedProducts =
      products.map(transformProduct);

    await Product.insertMany(
      transformedProducts
    );

    console.log(
      `✅ ${transformedProducts.length} Products Inserted Successfully`
    );

    process.exit();
  } catch (error) {
    console.error("❌ Seeder Error:");
    console.error(error);

    process.exit(1);
  }
};

importData();