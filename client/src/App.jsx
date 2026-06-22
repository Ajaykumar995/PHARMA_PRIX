import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ProductsPage from "./pages/ProductsPage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
// import ProductDetails from "./pages/ProductDetails";
import AdminRoutes from "./admin/AdminRoutes";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/products"
          element={<ProductsPage />}
        />

        <Route
          path="/category/:category"
          element={<CategoryPage />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />
        <Route
          path="/admin/*"
          element={<AdminRoutes />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;