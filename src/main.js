import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import VueLazyLoad from 'vue-lazyload'
import router from "./router/index"
import store from './store/index'

// 安装懒加载插件
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false
// 添加事件总线
Vue.prototype.$bus = new Vue()

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}