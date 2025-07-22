import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/Dashboard';
import AdminPanel from '../pages/AdminPanel';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthForm from '../components/AuthForm';
import Home from '../pages/Home';
import DashboardLayout from '../layout/DashboardLayout';
import Setting from '../pages/Home/Setting';
import Collections from '../pages/Collections';
import Blogs from '../pages/Blogs';
import Sections from '../pages/Sections';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'Home', 
        element: <Home />,
        children: [
          {
            path: 'Dashboard',
            element: <Dashboard />,
          },
          {
            path: 'Setting',
            element: <Setting />,
          },
        ],
      },

      {
        path: 'admin',
        element: (
          <ProtectedRoute role="admin">
            <AdminPanel />
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: 'dashboard',
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <h1>Profile Page</h1>,
      },
      {
        path: 'orders',
        element: (
          <ProtectedRoute>
            <h1>Order Page</h1>
          </ProtectedRoute>
        ),
      },
      {
        path: 'profile',
        element: (
          <ProtectedRoute role="admin">
            <h1>Profile Page</h1>
          </ProtectedRoute>
        ),
      },
    ],
  },

  {
    path: '/auth',
    element: <AuthForm />,
  },

 {
    path: '/Collections',
    element: <Collections/>,
  },
  

  {
    path: '/Blogs',
    element: <Blogs/>,
  },

  {
    path: '/Sections',
    element: <Sections/>,
  },


]);

export default router;
