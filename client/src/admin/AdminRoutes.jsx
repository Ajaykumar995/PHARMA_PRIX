import { Routes, Route } from "react-router-dom";

import AdminLogin from "./pages/AdminLogin";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import Products from "./pages/Products";
import EditProduct from "./pages/EditProduct";
import Categories from "./pages/Categories";
import Orders from "./pages/Orders";
import AddOrder from "./pages/AddOrder";
import AddCategory from "./pages/AddCategory";
import Settings from "./pages/Settings";
import EditCategory from "./pages/EditCategory";
function AdminRoutes() {
    return (
        <Routes>

            <Route
                path="/login"
                element={<AdminLogin />}
            />

            <Route
                path="/dashboard"
                element={<Dashboard />}
            />
            <Route
                path="/add-product"
                element={<AddProduct />}
            />

            <Route
                path="/products"
                element={<Products />}
            />
            <Route
                path="/edit-product/:id"
                element={<EditProduct />}
            />
            <Route
                path="/categories"
                element={<Categories />}
            />
            <Route
                path="/orders"
                element={<Orders />}
            />
            <Route
                path="/add-order"
                element={<AddOrder />}
            />
            <Route
                path="/add-category"
                element={<AddCategory />}
            />
            <Route
                path="/settings"
                element={<Settings />}
            />
            <Route
                path="/edit-category/:id"
                element={<EditCategory />}
            />


        </Routes>
    );
}

export default AdminRoutes;