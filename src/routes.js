import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Logout from './pages/Logout.vue';

import Payment from './pages/Payment.vue';


import Dashboard from './pages/Dashboard.vue';
import DashboardHome from './pages/dashboard/DashboardHome.vue';
import NewProduct from './pages/dashboard/NewProduct.vue';
import Products from './pages/dashboard/Products.vue';

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '/login',
        component: Login,
        name: 'login'
    },
    {
        path: '/register',
        component: Register,
        name: 'register'
    },
    {
        path: '/logout',
        component: Logout,
        name: 'logout'
    },
    {
        path: '/dashboard',
        component: Dashboard,
        name: 'dashboard',
        children: [
            {
                path:'',
                component: DashboardHome,
                name: 'dashboard-home'
            },
            {
                path:'new-product',
                component: NewProduct,
                name: 'dashboard-new-product'
            },
            {
                path:'products',
                component: Products,
                name: 'dashboard-products'
            }
        ]
    },
    {
        path: '/payment/:payment_id/',
        component: Payment,
        name: 'payment'
    },
    {
        path: '*',
        redirect: {name: 'home'},
        name: '404'
    },
];
