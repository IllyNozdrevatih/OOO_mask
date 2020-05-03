import Vue from 'vue'
import VueRouter from 'vue-router'

import Projects from '../views/Projects.vue'
import SingleProject from '../views/SingleProject.vue'
import Users from '../views/Users'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/projects/:id',
    name: 'SingleProject',
    component: SingleProject,
    props: true
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
]

const router = new VueRouter({
  routes
})

export default router
