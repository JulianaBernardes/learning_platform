import { createRouter, createWebHashHistory  } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import ProfileView from '../views/ProfileView.vue'

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
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router