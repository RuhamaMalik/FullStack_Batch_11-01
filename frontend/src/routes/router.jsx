import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import ProtectedRoute from '../components/ProtectedRoute';

import Orders from '../components/dashboard/admin/Orders';
import Analytics from '../components/dashboard/admin/Analytics';
import Messages from '../components/dashboard/admin/Messages';
import Customers from '../components/dashboard/admin/Customers';
import Products from '../components/dashboard/admin/Products';
import Categories from '../components/dashboard/admin/Categories';
import Setting from '../components/dashboard/admin/Setting';
import AuthForm from '../components/AuthForm';
import DashboardLayout from '../layout/DashboardLayout';

import PrivacyPolicy from '../pages/PrivacyPolicy';
import RefundPolicy from '../pages/RefundPolicy';
import FAQS from '../pages/FAQS';
import TermsOfServices from '../pages/TermsOfService';

import AccountSetting from '../components/dashboard/user/AccountSetting';
import UserOrders from '../components/dashboard/user/Orders';
import Address from '../components/dashboard/user/Address';
import Whishlist from '../components/dashboard/user/Whishlist';
import ChangePassword from '../components/dashboard/user/ChangePassword';
import Dashboard from '../components/dashboard/admin/Dashboard';




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
            // { path: '/auth', element: <AuthForm />}

        ],
    },

    ////////// Dashboard 

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
                path: 'account-settings',
                element: (
                    <AccountSetting />
                ),
            },
            {
                path: 'orders',
                element: (
                    <UserOrders />
                ),
            },
            {
                path: 'whishlist',
                element: (
                    <Whishlist />
                ),
            },
            {
                path: 'address',
                element: (
                    <Address />
                ),
            },
            {
                path: 'change-password',
                element: (
                    <ChangePassword />
                ),
            },

            // { path: '/auth', element: <AuthForm />}

        ],
    },


    ////////// ADMIN 

    {
        path: 'admin',
        element: (
            <ProtectedRoute role="admin">
                <DashboardLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                index: true,
                element: (
                    <Dashboard />
                ),
            },
            {
                path: "dashboard", element: (
                    <Dashboard />
                ),
            },
            {
                path: 'orders',
                element: (
                    <Orders />
                ),
            },
            {
                path: 'categories',
                element: (
                    <Categories />
                ),
            },
            {
                path: 'products',
                element: (
                    <Products />
                ),
            },
            {
                path: 'customers',
                element: (
                    <Customers />
                ),
            },
            {
                path: 'messages',
                element: (
                    <Messages />
                ),
            },
            {
                path: 'analytics',
                element: (
                    <Analytics />
                ),
            },
            {
                path: 'settings',
                element: (
                    <Setting />
                ),
            },
        ]
    },

    { path: '/auth', element: <AuthForm /> }
]);

export default router;
