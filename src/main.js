import './styles/style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faArrowRight, faHatWizard, faHouse, faRocket, faTrophy, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faHatWizard, faArrowRight, faRocket, faHouse, faUser, faTrophy)
import jQuery from 'jquery';
window.$ = window.jQuery = jQuery;

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(router)
    .use(VueSidebarMenu)
    .mount('#app')