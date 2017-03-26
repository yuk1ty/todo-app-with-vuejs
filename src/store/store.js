import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tasks: []
}
const action = {
  add({ commit }, task) {
    commit('add', task)
  }
}
const getters = {
  availableTasks: state => {
    // TODO 完了したやつのみ表示したいが、一旦このまま
    return state.tasks;
  }
}
const mutations = {
  add(task) {
    state.tasks.push(task)
  }
}

export const store = new Vuex.Store({
  state,
  action,
  getters,
  mutations
})
