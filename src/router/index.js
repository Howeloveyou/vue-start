import Vue from 'vue'
import Router from 'vue-router'
import Page1 from '../components/Page1.vue'
import Page2 from '../components/Page2.vue'
import Page3 from '../components/Page3.vue'
import Page4 from '../components/Page4.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/', component: Page1
    },
    {
      path: '/Home', component: Page1,
    },
    {
      path: '/Reservation', component: Page2,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        requireFalse:true, //判断是否没有预约
      },
    },
    {
      path:'/Sign', component: Page3,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
        requireTrue:true, //判断是否已经预约过
      },
    },
    {
      path:'/Record', component: Page4,
      meta: {
        requireAuth: true,  // 添加该字段，表示进入这个路由是需要登录的
      },
    }
  ]
})
