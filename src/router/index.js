import Vue from 'vue'
import VueRouter from 'vue-router'
import CartPage from '../views/CartPage';
import ProductDetails from '../views/ProductDetails';
import ProductsPage from '../views/ProductsPage';
import NotFoundPage from '../views/NotFoundPage';

Vue.use(VueRouter);

const routes = [
  {
    path: '/products',
    name:'Products',
    component: ProductsPage

  },
  {
    path: '/products/:id',
    name:'ProductDetails',
    component: ProductDetails
  },
  {
    path: '/cart',
    name:'Cart',
    component: CartPage
  },
  {
    path:'/',
    redirect:'/products'
  },
    {
        path: '*',
        component:NotFoundPage,
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
