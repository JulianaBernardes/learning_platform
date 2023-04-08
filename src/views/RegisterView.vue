<template>
    <div class="register">
        <form action="" name="login_form" class="login-form" method="post">
            <h1>Registe-se na plataforma</h1>
            <div class="required_field">
                <input type="text" placeholder="Utilizador" aria-label="Utilizador" name="username" v-model="username" required
                    autofocus>
            </div>
            <div class="required_field">
                <input type="text" class="required_field" placeholder="Email" aria-label="Email" name="email" v-model="email" required>
            </div>
            <div class="required_field">
                <input type="password" class="required_field" placeholder="Palavra-passe" aria-label="Palavra-passe" name="password" v-model="password" required>
            </div>
            <div class="required_field">
                <input type="password" class="required_field" placeholder="Confirmar Palavra-passe" aria-label="Confirmar Palavra-passe" name="confirm_password" v-model="confirm_password" required>
            </div>
            <button type="submit" :disabled="!(username.length && password.length && confirm_password.length && email.length)">Entrar</button>
            <p class="register">Já tem conta? <a href="#/login">Login</a></p>
        </form>
    </div>
</template>
    
<style scoped lang="css" src="../styles/access_form.css"></style>
    
<script>
export default {
    name: 'Register',
    components: {
    },
    data() {
        return {
            username: "",
            password: "",
            confirm_password: "",
            email: "",
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