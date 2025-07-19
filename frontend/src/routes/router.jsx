import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Dashboard from "../pages/Dashboard";
import AdminPanel from "../pages/AdminPanel";
import ProtectedRoute from "../components/ProtectedRoute";
import AuthForm from "../components/AuthForm";
import Home from "../pages/Home";
import ProductDetailPage from "../pages/ProductDetailPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "detail",
        element: <ProductDetailPage />,
      },
      {
        path: "admin",
        element: (
          <ProtectedRoute role="admin">
            <AdminPanel />
          </ProtectedRoute>
        ),
      },
      // { path: '/auth', element: <AuthForm />}
    ],
  },
  { path: "/auth", element: <AuthForm /> },
]);

export default router;
