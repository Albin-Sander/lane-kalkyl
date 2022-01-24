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
      let monthInterest = 0.00825;
      let cost = state.lanebelopp;
      let year = state.lanetid
      let months = 12 * year;
      let divid = ((1 + monthInterest) ** months) - 1
      let sum = cost * monthInterest * ((1 + monthInterest) ** months) / divid;
      state.monthCost = sum
      
    }
  }
  
})