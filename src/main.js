import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios'
import ElementUI from 'element-ui';
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';

//修改vue所对应的axios原型链
Vue.prototype.$axios = axios
//使用Element 组件 配置国际化
Vue.use(ElementUI);
Vue.use(ElementUI, {locale})

//设置重定向 默认跳转主页
router.replace('/home')

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
