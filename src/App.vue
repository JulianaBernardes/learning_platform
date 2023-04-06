<template>
  <Menu :class="[{'collapsed' : collapsed}]"/>
  <div id="container" :class="[{'collapsed' : collapsed}]"> 
    <router-view />
  </div>
  <sidebar-menu 
    :menu="menu"
    v-model:collapsed="collapsed"
  />
</template>
<script>
import Menu from './components/Menu.vue'
import { SidebarMenu } from 'vue-sidebar-menu'
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css'
import './styles/sidebar_menu.css'

export default {
  name: 'App',
  components: {
    Menu,
    SidebarMenu
  },
  mounted() {

  },
  data() {
    return {
      menu: [
        {
          header: 'Matérias',
          hiddenOnCollapse: true
        },
        {
          href: '/',
          title: 'Introdução',
          icon: 'fa fa-user'
        },
        {
          href: '/physics',
          title: 'Física',
          icon: 'fa fa-chart-area',
          child: [
            {
              // href: '/physics/oblique_movement',
              title: 'Movimento oblíquo',
              child: [
                {
                  href: '/physics/oblique_movement/quizz',
                  title: 'Quizz'
                },
                {
                  href: '/physics/oblique_movement/experiment',
                  title: 'Experimento'
                }
              ]
            }
          ]
        }
      ],
      collapsed: false
      
    }
  },
}
</script>

<style>
#container {
  padding-left: 290px;
  -webkit-transition: .3s ease;
  transition: .3s ease
}

#container.collapsed,#container.onmobile {
  padding-left: 65px;
}

</style>

<style lang="css" src="./styles/sidebar_menu.css"></style>