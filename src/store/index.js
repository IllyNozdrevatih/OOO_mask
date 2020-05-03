import Vue from 'vue'
import Vuex from 'vuex'
import users from './models/users'
import projects from './models/projects'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    users,
    projects
  }
})
