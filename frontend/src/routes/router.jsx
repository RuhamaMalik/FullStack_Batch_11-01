import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
// import Dashboard from '../pages/dashboard/Dashboard';
import AdminPanel from '../pages/AdminPanel';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthForm from '../components/AuthForm';
import Home from '../pages/Home';
import DashboardLayout from '../layout/DashboardLayout';
<<<<<<< HEAD
import Orders from '../components/dashboard/components/Orders';
import Products from '../components/dashboard/components/Products';
import Saved from '../components/dashboard/components/Saved';
import Messages from '../components/dashboard/components/Messages';
import Customers from '../components/dashboard/components/Customers';
import Analytics from '../components/dashboard/components/Analytics';
import Setting from '../components/dashboard/components/Setting';
import Profile from '../components/dashboard/components/Profile';
=======
import ForgotPswd from '../pages/ForgotPswd';
import ResetPaswd from '../pages/ResetPaswd';
>>>>>>> 5228593e6f761cde7319547daac16b030d8ea5a9

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
                        <Orders />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'products',
                element: (
                    <ProtectedRoute>
                        <Products />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'saved',
                element: (
                    <ProtectedRoute>
                        <Saved />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'messages',
                element: (
                    <ProtectedRoute>
                        <Messages />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'customers',
                element: (
                    <ProtectedRoute>
                        <Customers />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'profile',
                element: (
                    <ProtectedRoute role="admin">
                        <Profile />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'analytics',
                element: (
                    <ProtectedRoute>
                        <Analytics />
                    </ProtectedRoute>
                ),
            },
            {
                path: 'setting',
                element: (
                    <ProtectedRoute>
                        <Setting />
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
        path: 'forgot-password',
        element: <ForgotPswd />,
    },
    { path: '/auth', element: <AuthForm /> }
]);

export default router;
