import Vue from 'vue'
import Vuex from 'vuex'

import song from './modules/song'
import collection from "@/store/modules/collection";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    song,
    collection
  }
})
