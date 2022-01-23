import Vue from 'vue'
import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      lanebelopp: 0,
      lanetid: 0,
    }
  },

  mutations: {
    changeLaneBeloppValue(state, belopp) {
      state.lanebelopp = belopp
    },
    changeLaneTid(state, tid) {
      state.lanetid = tid
    }
  }
  
})