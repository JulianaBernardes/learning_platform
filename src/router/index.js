import { createRouter, createWebHashHistory  } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import ProfileView from '../views/ProfileView.vue'
import PhysicsView from '../views/physics/PhysicsView.vue'

const routes = [
  {
    path: '/',
    name: 'intro',
    component: IntroView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },

  // side menu
  {
    path: '/physics',
    name: 'physics',
    component: PhysicsView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router