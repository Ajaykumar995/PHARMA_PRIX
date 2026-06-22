import Product from "../models/Product.js";
import Category from "../models/Category.js";
import Order from "../models/Order.js";

// 🔥 REAL DASHBOARD ANALYTICS AGGREGATION
export const getDashboardStats = async (req, res) => {
  try {
    const totalProducts = await Product.countDocuments();
    const totalCategories = await Category.countDocuments();
    const inStock = await Product.countDocuments({ stock: { $gt: 0 } });
    const outStock = await Product.countDocuments({ stock: { $lte: 0 } });

    // Revenue Data (Last 6 Months)
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

    const revenueAggregation = await Order.aggregate([
      { 
        $match: { 
          createdAt: { $gte: sixMonthsAgo },
          status: "Delivered" 
        } 
      },
      {
        $group: {
          _id: { month: { $month: "$createdAt" }, year: { $year: "$createdAt" } },
          revenue: { $sum: "$totalAmount" },
          orders: { $sum: 1 }
        }
      },
      { $sort: { "_id.year": 1, "_id.month": 1 } }
    ]);

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const revenueData = revenueAggregation.map(item => ({
      name: monthNames[item._id.month - 1],
      revenue: item.revenue,
      orders: item.orders
    }));

    // Inventory vs Sales Data
    const inventoryAggregation = await Product.aggregate([
      {
        $group: {
          _id: "$category",
          stock: { $sum: "$stock" },
          sold: { $sum: "$sold" }
        }
      },
      { $sort: { sold: -1 } },
      { $limit: 6 } 
    ]);

    const inventoryData = inventoryAggregation.map(item => ({
      name: item._id,
      stock: item.stock,
      sold: item.sold
    }));

    res.status(200).json({
      totalProducts,
      totalCategories,
      inStock,
      outStock,
      revenueData,
      inventoryData
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// STANDARD CRUD OPERATIONS
export const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not found" });
    res.status(200).json(product);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const searchProducts = async (req, res) => {
  try {
    const keyword = req.query.keyword || "";
    const products = await Product.find({
      productName: { $regex: keyword, $options: "i" },
    });
    res.status(200).json(products);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.category });
    res.status(200).json(products);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const getRelatedProducts = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    const related = await Product.find({ category: product.category, _id: { $ne: product._id } }).limit(4);
    res.status(200).json(related);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(product);
  } catch (error) { res.status(500).json({ message: error.message }); }
};

export const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product Deleted" });
  } catch (error) { res.status(500).json({ message: error.message }); }
};

// Fallback for Category Stats if needed anywhere else
export const getCategoryStats = async (req, res) => {
  try {
    const stats = await Product.aggregate([
      { $group: { _id: "$category", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]);
    res.status(200).json(stats);
  } catch (error) { res.status(500).json({ message: error.message }); }
};