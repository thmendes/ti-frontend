import * as assetsService from '@/services/assets'

export const getAssets = () => {
  return assetsService.getAssets()
   .then(res => {     
      return Promise.resolve(res)
   })
   .catch(err => {
      return Promise.reject(err)
   })
}