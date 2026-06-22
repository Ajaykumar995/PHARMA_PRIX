import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "../components/Sidebar";
import API from "../../services/api";

import toast from "react-hot-toast";

import "../styles/AddOrder.css";

function AddOrder() {

  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({

      customerName: "",
      phone: "",
      totalAmount: "",
      status: "Pending",

    });

  const handleChange =
    (e) => {

      setForm({
        ...form,
        [e.target.name]:
          e.target.value,
      });

    };

  const submitHandler =
    async (e) => {

      e.preventDefault();

      try {

        await API.post(
          "/orders",
          form
        );

        toast.success(
          "Order Created Successfully 🎉"
        );

        navigate(
          "/admin/orders"
        );

      } catch (error) {

        toast.error(
          "Failed To Create Order ❌"
        );

      }

    };

  return (

    <div className="dashboard-layout">

      <Sidebar />

      <div className="add-order-page">

        <div className="add-order-card">

          <div className="page-title">

            <h1>
              Create New Order
            </h1>

            <p>
              Add customer order manually
            </p>

          </div>

          <form
            onSubmit={
              submitHandler
            }
          >

            <div className="form-group">

              <label>
                Customer Name
              </label>

              <input
                type="text"
                name="customerName"
                placeholder="Enter customer name"
                value={
                  form.customerName
                }
                onChange={
                  handleChange
                }
                required
              />

            </div>

            <div className="form-group">

              <label>
                Phone Number
              </label>

              <input
                type="text"
                name="phone"
                placeholder="Enter phone number"
                value={
                  form.phone
                }
                onChange={
                  handleChange
                }
                required
              />

            </div>

            <div className="form-group">

              <label>
                Total Amount
              </label>

              <input
                type="number"
                name="totalAmount"
                placeholder="Enter total amount"
                value={
                  form.totalAmount
                }
                onChange={
                  handleChange
                }
                required
              />

            </div>

            <div className="form-group">

              <label>
                Order Status
              </label>

              <select
                name="status"
                value={
                  form.status
                }
                onChange={
                  handleChange
                }
              >

                <option>
                  Pending
                </option>

                <option>
                  Confirmed
                </option>

                <option>
                  Delivered
                </option>

                <option>
                  Cancelled
                </option>

              </select>

            </div>

            <button
              type="submit"
              className="create-order-btn"
            >
              Create Order
            </button>

          </form>

        </div>

      </div>

    </div>

  );
}

export default AddOrder;