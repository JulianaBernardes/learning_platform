<template>
    <div class="login">
        <form action="" name="login_form" class="login-form" method="post">
            <h1>Aceda ao seu perfil</h1>
            <input type="text" placeholder="Email" aria-label="Email" name="email" v-model="email" required
                autofocus>
            <input type="password" placeholder="Palavra-passe" aria-label="Password" name="password" v-model="password" required>
            <button type="submit" :disabled="!(email.length && password.length)">Entrar</button>
            <p class="register">Não tem conta? <a href="#/register">Registe-se</a></p>
        </form>
    </div>
</template>
    
<style scoped lang="css" src="../styles/access_form.css"></style>
    
<script>
export default {
    name: 'Login',
    components: {
    },
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {

    },
    mounted: function () {

    },
    unmounted: function () {

    }
};
</script>