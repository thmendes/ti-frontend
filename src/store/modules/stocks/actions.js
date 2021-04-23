import * as stockService from '@/services/stocks'

export const getStocks = () => {
  return stockService.getStocks()
   .then(res => {     
      return Promise.resolve(res)
   })
   .catch(err => {
      return Promise.reject(err)
   })
}