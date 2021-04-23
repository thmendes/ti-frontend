import auth from './auth'
import account from './account'
import assets from './assets'
import stocks from './stocks'

const vuex = {
  auth,
  account,
  assets,
  stocks
}

const keys = Object.keys(vuex)
const modules = keys.reduce((acc, key) => ({ ...acc, [key]: vuex[key].module}), {})
export default {modules}
