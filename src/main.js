import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'

import LoginComponent from './pages/Login/LoginComponent'
import HomeComponent from './pages/home/HomeComponent'
import ProductsComponent from './pages/products/ProductsComponent'
import ClientsComponent from './pages/clientes/ClientsComponent'

Vue.config.productionTip = false
Vue.use(VueRouter);

axios.defaults.baseURL = 'http://localhost:8000/api';

const routes = [
  { path: '/', name: 'login', component: LoginComponent },
  { path: '/home', name:'home',component: HomeComponent },
  { path: '/products', name: 'products', component: ProductsComponent },
  { path: '/clientes', name: 'clients', component: ClientsComponent },
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
