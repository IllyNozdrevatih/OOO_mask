import api from '@/services/api'

export default {
  fetchUsers () {
    return api().get('users')
  },
  getUser (params) {
    return api().get('users/item', params)
  },
  getAuthUser (params) {
    return api().get('users/auth', params)
  },
  setAuthUser (params) {
    return api().post('users/auth', params)
  },
  fetchProjects () {
    return api().get('projects')
  },
  getProject (params) {
    return api().post('projects/item', params)
  },
}