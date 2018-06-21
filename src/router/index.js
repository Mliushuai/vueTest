import Vue from 'vue'
import Router from 'vue-router'
import Logo from '@/page/Logo'
import App from '@/App'
import Home from '@/components/Home'
import BomList from '@/components/BomList'

Vue.use(Router)

export default new Router({
  mode: 'history', // 使用HTML5 History默认是哈希值的方式
  router: [
    {
      path: '/Home',
      component: Home
    }, {
      path: '/BomList',
      component: BomList
    }
  ]
})
