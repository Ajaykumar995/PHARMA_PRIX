import Product from "../models/Product.js";
import Order from "../models/Order.js";

export const getDashboardStats =
async (req,res)=>{

try{

const totalProducts =
await Product.countDocuments();

const pending =
await Order.countDocuments({
status:"Pending"
});

const confirmed =
await Order.countDocuments({
status:"Confirmed"
});

const delivered =
await Order.countDocuments({
status:"Delivered"
});

const cancelled =
await Order.countDocuments({
status:"Cancelled"
});

const outOfStock =
await Product.countDocuments({
stock:0
});

res.json({
totalProducts,
pending,
confirmed,
delivered,
cancelled,
outOfStock
});

}catch(error){

res.status(500).json({
message:error.message
});

}
};