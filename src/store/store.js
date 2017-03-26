import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tasks: []
}
const action = {
  addTask: ({ commit }, task) => {
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
  add(state, task) {
    state.tasks.push(task)
  }
}

export const store = new Vuex.Store({
  state,
  action,
  getters,
  mutations
})
