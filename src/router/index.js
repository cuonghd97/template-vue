import Vue from 'vue'
import Router from 'vue-router'

import ButtonComponent from '../components/pages/ButtonComponent'
import GeneralComponent from '../components/pages/GeneralComponent'
import TodoListComponent from '../components/pages/TodoListComponent'
import UiElementComponent from '../components/pages/UiElementComponent'
import ChartComponent from '../components/pages/ChartComponent'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: UiElementComponent
    },
    {
      path: '/button',
      component: ButtonComponent
    },
    {
      path: '/general',
      component: GeneralComponent
    },
    {
      path: '/todo-list',
      component: TodoListComponent
    },
    {
      path: '/chart',
      component: ChartComponent
    }
  ]
})

export default router