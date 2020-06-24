import Vue from "vue";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueCookies from 'vue-cookies'
import './assets/iconfont/iconfont.css'

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueCookies)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
