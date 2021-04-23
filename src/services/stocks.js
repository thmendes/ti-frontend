import axios from "axios"
import store from '@/store'
const authURL = 'https://ndibkg90qd.execute-api.us-east-1.amazonaws.com/dev/'
export const getStocks = () => {
  return axios.get(
    `${authURL}/stocks`,
    {
      headers: {
        Authorization: `Bearer ${store.state.token}`
      }
    }
  )
  .then(res => Promise.resolve(res.data))
  .catch(err => Promise.reject(err))
}
