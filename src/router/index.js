import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import MainContent from '@/components/MainContent'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainContent
    }
  ]
})
