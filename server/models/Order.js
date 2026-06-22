import mongoose from "mongoose";

const orderSchema =
new mongoose.Schema({

  customerName:{
    type:String,
    required:true
  },

  phone:{
    type:String,
    required:true
  },

  products:[
    {
      productName:String,
      quantity:Number,
      price:Number
    }
  ],

  totalAmount:{
    type:Number,
    default:0
  },

  status:{
    type:String,

    enum:[
      "Pending",
      "Confirmed",
      "Delivered",
      "Cancelled"
    ],

    default:"Pending"
  }

},
{
  timestamps:true
});

export default mongoose.model(
  "Order",
  orderSchema
);