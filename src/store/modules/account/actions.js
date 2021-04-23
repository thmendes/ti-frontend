import * as accountService from '@/services/account'

export const getAccount = () => {
  return accountService.getAccount()
   .then(res => {     
      return Promise.resolve(res)
   })
   .catch(err => {
      return Promise.reject(err)
   })
}