import store from '../store'

export const authGuard = (to, from, next) => {
  if (to.name !== 'Login' && !store.getters['auth/isAuthenticated']){
    next({ name: 'Login' })
  }
  else next()
}
