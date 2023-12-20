<template>
<div id="app">
    <signUP />
    <LoginForm/>
</div>
</template>

<script>
import LoginForm from './components/loginForm.vue';
import signUP from './components/signUP.vue';
export default {
    name: 'App',
    components: {
    signUP,
    LoginForm
}

}
</script>

<style>

</style>
