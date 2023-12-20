<template>
  <div class="loginBox">
    <h1> Login Form</h1>
    <form>

    
        <input type="text" placeholder="user@email.com" name="gmail" v-model="useremail">
        <input type="text" placeholder="password" name="password" v-model="userpassword">
        <button type="button" v-on:click="loginbtn">login</button>
    </form>
</div>
</template>
<script>
import axios from 'axios'
export default{
    name:"loginForm",
    data() {
        return {
          
            useremail: null,
            userpassword: null,
        }

    },
    methods: {
       async loginbtn() {
            let result = await axios.get(`http://localhost:3000/user?email=${this.username}&password=${this.userpassword}`);
            console.log(result) 
        }
    }
}
</script>


<style>
.loginBox {
    align-items: center;
    width: 50%;
    text-align: center;
    border: 1px solid black;
    margin-left: 20%;
    margin-top: 50px;
    
}

.loginBox input {
    display: block;
    margin: 20px;
    padding: 20px;
    width: 80%;
    
}

.loginBox button {
    width: 40%;
    padding: 5px;
    margin-bottom: 10px;
    background-color: aquamarine;
    font-size: larger;
    border-radius: 20px;
}

</style>
