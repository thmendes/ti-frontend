import axios from "axios"
import store from '@/store'
const authURL = 'https://lek4t6dsf0.execute-api.us-east-1.amazonaws.com/dev/'
export const getAssets = () => {
  return axios.get(
    `${authURL}/assets/${store.state.userEmail}`,
    {
      headers: {
        Authorization: `Bearer ${store.state.token}`
      }
    }
  )
  .then(res => Promise.resolve(res.data))
  .catch(err => Promise.reject(err))
}
