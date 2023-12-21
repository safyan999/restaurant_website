import { createApp } from 'vue';
import App from './App.vue';
import router from './routes';



// Create the Vue app instance and use BootstrapVue
createApp(App).use(router).mount('#app');