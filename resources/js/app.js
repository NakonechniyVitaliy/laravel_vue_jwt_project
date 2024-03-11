import './bootstrap';
import { createApp } from 'vue';
import router from "./router/index.js";
import App from './App.vue'

const app = createApp({
    components:{
        App
    }
});

app.use(router)
app.mount('#app');
