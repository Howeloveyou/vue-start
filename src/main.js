// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store';
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

Vue.use(ElementUI);

/* 路由验证*/
router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    console.log(store.state.login.isLogin)
    if(!store.state.login.isLogin || store.state.login.mark === 2){
      console.log("do..");
      next({
        path:'/Home'
      })
    }else{
      if (to.meta.requireFalse){
        if(store.state.login.mark === 0){
          next();
        }else {
          next({path:'/Sign'})
        }
      }else if(to.meta.requireTrue){
        if(store.state.login.mark === 1){
          next();
        }else {
          next({path:'Reservation'})
        }
      }
      else{
        next();
      }

    }
  }else{
    next();
  }
});

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
