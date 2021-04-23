import * as types from './types'

export const setAuthorizationToken = ({commit}, token) => {
  commit(types.SET_AUTHORIZATION_TOKEN, token)
}

export const setUserEmail = ({commit}, email) => {
  commit(types.SET_USER_EMAIL, email)
}

export const setUserName = ({commit}, email) => {
  commit(types.SET_USER_NAME, email)
}

export const setSnackbar = ({ commit }, snackbar) => {
  commit(types.SET_SNACKBAR, snackbar)
}