<template>
    <div class="menu">
            <div class="menu_items">
                <!-- <router-link to="/profile"><font-awesome-icon icon="user" /></router-link> -->
                <router-link to="/login"><font-awesome-icon icon="user" /></router-link>
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