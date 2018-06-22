import Vue from 'vue'
import Router from 'vue-router'
import axios from 'axios'
import DemoHome from '@/components/DemoHome'
import DemoAbout from '@/components/DemoAbout'
import DemoContact from '@/components/DemoContact'

Vue.use(Router)
// axios.defaults.baseURL = process.env.API;
export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/home',
      component:DemoHome,
    },
    {path: '/about', component:DemoAbout},
    {path: '/contact', component:DemoContact}
  ]
})

