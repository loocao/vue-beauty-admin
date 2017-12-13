import Vue from 'vue'
import Router from 'vue-router'
import {MainLayout} from 'components/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      icon: 'smile-o',
      title: '首页',
      component: MainLayout,
      children: [{
        name: 'home_index',
        path: '',
        title: '首页',
        component: () => import('views/home.vue')
      }]
    }
  ]
})
