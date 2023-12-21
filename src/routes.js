import { createWebHistory, createRouter } from "vue-router";
import loginForm from './components/loginForm.vue';
import signUP from './components/signUP.vue';
import MyHome from './components/Home.vue';

const routes=[
    {
        name: 'MyHome',
        path:'/',
        component:MyHome


    },
    {
        name: 'signUP',
        path:'/signUP',
        component:signUP


    },
    {
        name: 'loginForm',
        path:'/loginForm',
        component:loginForm

    }

];
const router =createRouter(
    {
        history:createWebHistory(),routes
    }
);
export default router
