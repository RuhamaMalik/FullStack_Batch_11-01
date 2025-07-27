import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Dashboard from '../pages/dashboard/Dashboard';
import AdminPanel from '../pages/AdminPanel';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthForm from '../components/AuthForm';
import Home from '../pages/Home';
import DashboardLayout from '../layout/DashboardLayout';
import ForgotPswd from '../pages/ForgotPswd';
import ResetPaswd from '../pages/ResetPaswd';
import Wishlist from '../pages/Wishlist';
import Products from '../pages/Products';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: (
                    <Home />
                ),
            },

                 {
                path: 'wishlist',
                element:( 
                <Wishlist />
            ),
            },


            {
                path: 'admin',
                element: (
                    <ProtectedRoute role="admin">
                        <AdminPanel />
                    </ProtectedRoute>
                ),
            },
            // { path: '/auth', element: <AuthForm />}

        ],
    },


    {
        path: 'dashboard',
        element: (
            <ProtectedRoute>
                <DashboardLayout />
            </ProtectedRoute>),
        children: [
            {
                index: true,
                element: (
                    <h1>Profile Page</h1>
                ),
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
            // { path: '/auth', element: <AuthForm />}

        ],
    },
    {
        path: 'reset-password',
        element: <ResetPaswd />,
    },

     {
                path: 'products',
                element:( 
                <Products/>
            ),
            },

    {
        path: 'forgot-password',
        element: <ForgotPswd />,
    },
    { path: '/auth', element: <AuthForm /> }
]);

export default router;
