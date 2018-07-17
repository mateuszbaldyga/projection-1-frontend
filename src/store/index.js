import Vuex from 'vuex'

import nav from './nav'
import ui from './ui'

const modules = {
  nav,
  ui
}

export default new Vuex.Store({
  modules
})
