import * as types from './types'

export default {
  [types.GET_USER] (state, user) {
    state.user = user
  },

  [types.IS_AUTHENTICATED] (state, isAuthenticated) {
    state.isAuthenticated = isAuthenticated
  }
}
