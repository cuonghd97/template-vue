import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    { path: '/general' },
    { path: '/button' },
    { path: '/gallery' },
    { path: '/topo-list' }
  ]
})

export default router