import axios from "axios"
import store from '@/store'
const authURL = 'https://0gog0yikuf.execute-api.us-east-1.amazonaws.com/dev/'
export const getAccount = () => {
  return axios.get(
    `${authURL}/account/${store.state.userEmail}`,
    {
      headers: {
        Authorization: `Bearer ${store.state.token}`
      }
    }
  )
  .then(res => Promise.resolve(res.data))
  .catch(err => Promise.reject(err))
}
