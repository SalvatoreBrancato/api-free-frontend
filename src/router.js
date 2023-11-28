import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/appHome.vue';
import creaPost from './pages/creaPost.vue'


const router = createRouter({
history: createWebHistory(),
routes: [
{
path: '/',
name: 'home',
component: AppHome
},
{
path: '/create',
name: 'create',
component: creaPost
},
]
});
export { router };