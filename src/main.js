import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'

//importare bootstrap js
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

//importare router
import {router} from './router';

createApp(App).use(router).mount('#app')
