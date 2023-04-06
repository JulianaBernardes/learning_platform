<template>
    <div class="menu">
            <div class="menu_items">
                <router-link to="/">Introdução</router-link>
                <router-link to="/profile">Perfil</router-link>
            </div>
            <div class="menu_logo"></div>
    </div>
</template>

<style scoped lang="css" src="../styles/menu.css"></style>

<script>
export default {
    name: 'Menu',
    methods: {
    }
};
</script>