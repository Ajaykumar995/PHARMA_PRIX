import Order from "../models/Order.js";

/* =====================
   GET ALL ORDERS
===================== */

export const getOrders =
async (req, res) => {
  try {

    const orders =
      await Order.find()
      .sort({
        createdAt: -1,
      });

    res.status(200).json(
      orders
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};

/* =====================
   CREATE ORDER
===================== */

export const createOrder =
async (req, res) => {
  try {

    const order =
      await Order.create(
        req.body
      );

    res.status(201).json(
      order
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};

/* =====================
   UPDATE ORDER STATUS
===================== */

export const updateOrderStatus =
async (req, res) => {
  try {

    const order =
      await Order.findByIdAndUpdate(

        req.params.id,

        {
          status:
            req.body.status,
        },

        {
          new: true,
        }

      );

    res.status(200).json(
      order
    );

  } catch (error) {

    res.status(500).json({
      message:
        error.message,
    });

  }
};