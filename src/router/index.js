import Vue from 'vue';
import VueRouter from 'vue-router';

//引入路由视图
const Home = () => import('views/home/Home');
const Category = () => import('views/category/Category');
const Shop = () => import('views/shop/Shop');
const User = () => import('views/user/User');
const List = () => import('views/list/List');
const Detail = () => import('views/detail/Detail');
// 1.安装插件
Vue.use(VueRouter)

//2.创建路由对象
const routes = [{
    path: '',
    redirect: "/home"
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/user',
    component: User
  },
  {
    path: '/list',
    component: List
  }, {
    path: '/detail',
    component: Detail
  }
]
const router = new VueRouter({
  routes,
  mode: 'history'
})

// 3.导出router
export default router