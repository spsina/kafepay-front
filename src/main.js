import Vue from 'vue'
import VueRouter from 'vue-router';
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import RightSidebar from './components/RightSidebar.vue'
import { routes } from './routes';

Vue.use(Vuex);
Vue.use(VueAxios, axios);
Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: 'history',
});

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})

new Vue({
  el: '#navcomponent',
  router,
  // store,
  render: h => h(Navbar)
})

new Vue({
  el: '#rightsidebarcomponent',
  router,
  // store,
  render: h => h(RightSidebar)
})