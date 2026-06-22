import multer from "multer";

import {
  CloudinaryStorage,
} from "multer-storage-cloudinary";

import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "keerthy_medicals_products",
    resource_type: "auto", // 🔥 Now accepts images AND 3D files
  },
});

const upload =
  multer({
    storage,
  });

export default upload;