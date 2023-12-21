<template>
<div class="register">
    <h1>Sign UP</h1>
    <form>

        <input type="text" placeholder="safyan" name="name" v-model="username">
        <input type="text" placeholder="user@email.com" name="gmail" v-model="useremail">
        <input type="text" placeholder="password" name="password" v-model="userpassword">
        <button type="button" v-on:click="registerBtn">SignUP</button>
    </form>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: "signUP",
    data() {
        return {
            username: null,
            useremail: null,
            userpassword: null,
        }

    },
    methods: {
       async registerBtn() {
            let result = await axios.post("http://localhost:3000/user", {
                name: this.username,
                email: this.useremail,
                password: this.userpassword
            });
            console.log(result.status) 
            if(result.status ===201) {
                alert("submitted Form");  
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'MyHome'})
            }         
        }
    }
}
</script>

<style>
.register {
    align-items: center;
    width: 50%;
    text-align: center;
    border: 1px solid black;
    margin-left: 20%;
    margin-top: 50px;

}

.register input {
    display: block;
    margin: 20px;
    padding: 20px;
    width: 80%;

}

.register button {
    width: 40%;
    padding: 5px;
    margin-bottom: 10px;
    background-color: aquamarine;
    font-size: larger;
    border-radius: 20px;
}
</style>
