import * as types from './types'
import * as authService from '@/services/auth'
import store from '@/store'
import router from '@/router'

export const logout = ({ commit }) => {
  commit(types.IS_AUTHENTICATED, false)
  router.push({name: 'Login'})
}

export const signin = ({ commit }, credentials) => {
  return authService.signin(credentials)
   .then(res => {     
      commit(types.GET_USER, res)
      commit(types.IS_AUTHENTICATED, true) 
      store.dispatch('setAuthorizationToken', res.AuthenticationResult.AccessToken)
      store.dispatch('setUserEmail', res.UserAttributes.find(att => att.Name == 'email').Value)
      store.dispatch('setUserName', res.UserAttributes.find(att => att.Name == 'name').Value)
      return Promise.resolve(res)
   })
   .catch(err => {
      commit(types.IS_AUTHENTICATED, false)
      return Promise.reject(err)
   })
}