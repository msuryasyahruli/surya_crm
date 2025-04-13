import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DashboardLayout from "../../components/Layout";
import Dashboard from "../../pages/Dashboard";
import Lead from "../../pages/Lead";
import Products from "../../pages/Products";
import Customers from "../../pages/Customers";
import Login from "../../pages/Login";

function Router() {
  const isLogin = localStorage.getItem("email");

  return (
    <BrowserRouter>
      <Routes>
        {!isLogin ? (
          <>
            <Route path="*" element={<Navigate to="/login" replace />} />
            <Route path="/login" element={<Login />} />
          </>
        ) : (
          <>
            <Route path="/" element={<DashboardLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="leads" element={<Lead />} />
              <Route path="products" element={<Products />} />
              <Route path="customers" element={<Customers />} />
            </Route>

            <Route path="/login" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
