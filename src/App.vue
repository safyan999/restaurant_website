<template>
    <div>           
      <router-link class="nav-link" to="/signUP">SignUP</router-link>
      <br>
      <router-link class="nav-link" to="/loginForm">Login</router-link>
      <router-view></router-view>
    </div>
  </template>
  
  <script>
  export default {
    name: 'App'
  }
  </script>
  