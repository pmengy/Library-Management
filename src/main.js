import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
axios.defaults.baseURL = 'http://www.liulongbin.top:3006';
Vue.prototype.$axios = axios;

Vue.config.productionTip = false;

Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

new Vue({
  render: (h) => h(App),
}).$mount('#app');
