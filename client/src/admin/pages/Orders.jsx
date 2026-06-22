import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import API from "../../services/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "../styles/Order.css";

function Orders() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const { data } = await API.get("/orders");
      setOrders(data);
    } catch (error) {
      console.log(error);
      toast.error("Failed to load orders");
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await API.put(`/orders/${id}`, { status });
      toast.success("Order Updated Successfully 🚚");
      fetchOrders();
    } catch (error) {
      toast.error("Failed To Update Order ❌");
    }
  };

  return (
    <div className="dashboard-layout">
      <Sidebar />

      <div className="orders-page">
        <div className="orders-header animate-slide-up">
          <div>
            <h1>Orders Management</h1>
            <p>Manage customer orders and fulfillment status</p>
          </div>

          <button
            className="add-order-btn"
            onClick={() => navigate("/admin/add-order")}
          >
            + Create Order
          </button>
        </div>

        <div className="table-container animate-slide-up" style={{ animationDelay: "0.2s" }}>
          <table>
            <thead>
              <tr>
                <th>Customer</th>
                <th>Phone</th>
                <th>Total</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr key={order._id}>
                    <td className="fw-600">{order.customerName}</td>
                    <td className="text-gray">{order.phone}</td>
                    <td className="fw-700 text-teal">₹{order.totalAmount}</td>
                    <td className="text-gray">
                      {new Date(order.createdAt).toLocaleDateString('en-GB', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </td>
                    <td>
                      <span
                        className={`status-badge ${order.status.toLowerCase()}`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td>
                      <select
                        className="status-select"
                        value={order.status}
                        onChange={(e) => updateStatus(order._id, e.target.value)}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="empty-table">
                    No orders found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Orders;