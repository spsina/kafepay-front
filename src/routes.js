import Home from './pages/Home.vue';
export const routes = [
    {
        path: '/',
        component: Home,
        name: 'home'
    },
    {
        path: '*',
        redirect: {name: 'home'},
        name: '404'
    }
];
