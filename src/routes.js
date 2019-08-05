import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import Register from './pages/Register.vue';
import Logout from './pages/Logout.vue';
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
        path: '*',
        redirect: {name: 'home'},
        name: '404'
    },
];
