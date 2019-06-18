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
      component: UiElementComponent,
      name: 'ui-element',
      props: true
    },
    {
      path: '/button',
      component: ButtonComponent,
      name: 'button',
      props: true
    },
    {
      path: '/general',
      component: GeneralComponent,
      name: 'general',
      props: true
    },
    {
      path: '/todo-list',
      component: TodoListComponent,
      name: 'todo-list',
      props: true
    },
    {
      path: '/chart',
      component: ChartComponent,
      name: 'chart',
      props: true
    }
  ]
})

export default router