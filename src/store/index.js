import Vue from 'vue'
import Vuex from 'vuex'
import message from './message'
import movie from './movie'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    message,
    movie
  }
})