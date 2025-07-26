// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products"; //

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
         <Route path="products" element={<Products />} /> 
      </Route>
    </Routes>
  );
}

export default AppRoutes;
