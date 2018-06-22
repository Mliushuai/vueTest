import Vue from 'vue'
import Router from 'vue-router'
import DemoHome from '@/components/DemoHome'
import DemoAbout from '@/components/DemoAbout'
import DemoContact from '@/components/DemoContact'

Vue.use(Router)
// axios.defaults.baseURL = process.env.API;
export default new Router({
  mode: 'history',//不使用mode会造成地址http://localhost:8080/#/home
  //配置路由
  routes: [
    {
      path: '/home',
      component: DemoHome,
    },
    {
      path: '/about',
      component: DemoAbout
    },
    {
      path: '/contact',
      component: DemoContact
    }
  ]
})

