import Vue from "vue";
import VueRouter from "vue-router";
import VueCookies from 'vue-cookies'
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  // 获取token
  let tokenStr = VueCookies.get('userInfo');
  console.log(tokenStr);
  tokenStr = tokenStr ? tokenStr.token : tokenStr;
  console.log(tokenStr);
  if (!tokenStr) return next('/login')
  next()
})

export default router;
