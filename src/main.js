import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
const app = createApp(App);
import axios from 'axios';

app.use(router);
app.config.globalProperties.$axios = axios;


app.mount('#app');