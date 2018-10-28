import Vue from 'vue'
import Vuex from 'vuex'
import goal from './goal'
import user from './user'
import shared from './shared'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    goal: goal,
    user: user,
    shared: shared
  }
})
