import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  getters: {
    getTasks: s => s.tasks,
    getTask: s => id => s.tasks.find(t => t.id === id)
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task)
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    delete(state, id) {
      state.tasks = state.tasks.filter(t => t.id !== id)
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    edit(state, task) {
      const idx = state.tasks.findIndex(t => t.id === task.id)
      const newTask = {
        ...state.tasks[idx],
        title: task.title,
        description: task.description
      };
      state.tasks[0] = newTask
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }
  },
  actions: {
    createNewTask({commit}, task) {
      commit('addTask', task);
    },
    deleteTask({commit}, id) {
      commit('delete', id);
    },
    editTask({commit}, task) {
      commit('edit', task)
    }
  }
})
