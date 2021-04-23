import * as types from './types'
export default {
  [types.SET_AUTHORIZATION_TOKEN] (state, token) {
    state.token = token
  },
  [types.SET_USER_EMAIL] (state, email){
    state.userEmail = email
  },
  [types.SET_USER_NAME] (state, name){
    state.userName = name
  },
  [types.SET_SNACKBAR] (state, snackbar) {
    state.snackbar = snackbar
  }
  
}