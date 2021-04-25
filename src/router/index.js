import Vue from 'vue'
import { authGuard } from "../auth/authGuard"
import VueRouter from 'vue-router'
import Login from "@/views/Login.vue"
import Account from '@/views/Account.vue'
import Assets from '@/views/Assets.vue'
import Stocks from '@/views/Stocks.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/entrar',
    name: 'Login',
    component: Login,

  },
  {
    path: '/conta',
    name: 'Account',
    component: Account,
    beforeEnter: authGuard
  },
  {
    path: '/ativos',
    name: 'Assets',
    component: Assets,
    beforeEnter: authGuard
  },
  {
    path: '/acoes',
    name: 'Stocks',
    component: Stocks,
    beforeEnter: authGuard
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
