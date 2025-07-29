import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
// import Dashboard from '../pages/dashboard/Dashboard';
import AdminPanel from '../pages/AdminPanel';
import ProtectedRoute from '../components/ProtectedRoute';
import AuthForm from '../components/AuthForm';
import Home from '../pages/Home';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import RefundPolicy from '../pages/RefundPolicy';
import FAQS from '../pages/FAQS';
import TermsOfServices from '../pages/TermsOfService';
import DashboardLayout from '../layout/DashboardLayout';
import Orders from '../components/dashboard/components/Orders';
import Products from '../components/dashboard/components/Products';
import Saved from '../components/dashboard/components/Saved';
import Messages from '../components/dashboard/components/Messages';
import Customers from '../components/dashboard/components/Customers';
import Analytics from '../components/dashboard/components/Analytics';
import Setting from '../components/dashboard/components/Setting';
import Profile from '../components/dashboard/components/Profile';
import ForgotPswd from '../pages/ForgotPswd';
import ResetPaswd from '../pages/ResetPaswd';

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
                path: 'faqs',
                element: (
                    <FAQS />
                ),
            },
            {
                path: 'terms-of-services',
                element: (
                    <TermsOfServices />
                ),
            },
            {
                path: 'privacy-policy',
                element: (
                    <PrivacyPolicy />
                ),
            },
            {
                path: 'refund-policy',
                element: (
                    <RefundPolicy />
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
        path: 'reset-password/:token',
        element: <ResetPaswd />,
    },


    {
        path: 'forgot-password',
        element: <ForgotPswd />,
    },
    { path: '/auth', element: <AuthForm /> }
]);

export default router;
