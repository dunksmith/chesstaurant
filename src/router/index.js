import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MainOptions from '@/components/MainOptions'
import GamesList from '@/components/GamesList'
import FoodList from '@/components/FoodList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/main-options',
      name: 'main-options',
      component: MainOptions
    },
    {
      path: '/games-list',
      name: 'games',
      component: GamesList
    },
    {
      path: '/food-list',
      name: 'food',
      component: FoodList
    },
  ]
})
