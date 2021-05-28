import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import catalog from './catalog'

export default new Vuex.Store({
  modules: {
    catalog,
  }
})
