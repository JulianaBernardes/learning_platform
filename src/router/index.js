import { createRouter, createWebHashHistory  } from 'vue-router'
import IntroView from '../views/IntroView.vue'
import ProfileView from '../views/ProfileView.vue'
import PhysicsView from '../views/physics/PhysicsView.vue'
import QuizzView from '../views/QuizzView.vue'
import ObliqueMovementExperience from '../views/physics/experiments/ObliqueMovementExperience.vue';
import RankingView from '../views/RankingView.vue'

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
  {
    path: '/physics/oblique_movement/quizz',
    name: 'quizz',
    component: QuizzView
  },
  {
    path: '/physics/oblique_movement/experiment',
    name: 'oblique_movement_experiment',
    component: ObliqueMovementExperience
  },
  {
    path: '/ranking',
    name: 'ranking',
    component: RankingView
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router