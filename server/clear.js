
import dns from "dns";
dns.setServers(["8.8.8.8","1.1.1.1"]);
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import Product from "./models/Product.js";

dotenv.config();

await connectDB();

await Product.deleteMany();

console.log("All Products Deleted");

process.exit();