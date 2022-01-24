import Vue from 'vue'
import { createStore } from 'vuex'

export const store = createStore({
  state () {
    return {
      lanebelopp: 20000,
      lanetid: 2,
      monthCost: 0,
    }
  },

  mutations: {
    changeLaneBeloppValue(state, cost) {
      state.lanebelopp = cost
    },
    changeLaneTid(state, year) {
      state.lanetid = year
    },
    changeMonthlyCost(state) {
      const monthInterest = 0.00825;
      const cost = state.lanebelopp;
      const year = state.lanetid
      const months = 12 * year;
      const divid = ((1 + monthInterest) ** months) - 1
      const sum = cost * monthInterest * ((1 + monthInterest) ** months) / divid;
      state.monthCost = sum
      
    }
  }
  
})