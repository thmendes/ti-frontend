import axios from "axios"
const authURL = 'https://nbvxij0q0h.execute-api.us-east-1.amazonaws.com/dev'
export const signin = (credentials) => {
  return axios.post(
    `${authURL}/signin`,
    {
      'email': credentials.email,
      'password': credentials.password
    }
  )
  .then(res => Promise.resolve(res.data))
  .catch(err => Promise.reject(err))
}
