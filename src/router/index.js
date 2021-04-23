import Vue from 'vue'
import { authGuard } from "../auth/authGuard"
import VueRouter from 'vue-router'
import Login from "@/views/Login.vue"
import Panel from '@/views/Panel.vue'
import Account from '@/views/Account.vue'
import Assets from '@/views/Assets.vue'
import Stocks from '@/views/Stocks.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Painel',
    component: Panel,
    beforeEnter: authGuard
  },
  {
    path: '/entrar',
    name: 'Login',
    component: Login
  },
  {
    path: '/conta',
    name: 'Account',
    component: Account
  },
  {
    path: '/ativos',
    name: 'Assets',
    component: Assets
  },
  {
    path: '/acoes',
    name: 'Stocks',
    component: Stocks
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
