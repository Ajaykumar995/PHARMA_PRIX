import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import dns from "dns";
dns.setServers(["8.8.8.8", "1.1.1.1"]);

import Admin from "./models/Admin.js";

dotenv.config();

console.log(
  "MONGO_URI:",
  process.env.MONGO_URI
);

await mongoose.connect(
  process.env.MONGO_URI
);

const createAdmin = async () => {
  try {

    const existingAdmin =
      await Admin.findOne({
        email:
          "admin@pharmaprix.com",
      });

    if (existingAdmin) {

      console.log(
        "Admin Already Exists"
      );

      process.exit();
    }

    const hashed =
      await bcrypt.hash(
        "admin123",
        10
      );

    await Admin.create({
      email:
        "admin@pharmaprix.com",

      password:
        hashed,
    });

    console.log(
      "✅ Admin Created"
    );

    process.exit();

  } catch (error) {

    console.log(error);

    process.exit();
  }
};

createAdmin();