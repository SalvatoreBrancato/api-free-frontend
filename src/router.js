import { createRouter, createWebHistory } from 'vue-router';
import AppHome from './pages/appHome.vue';
import creaPost from './pages/creaPost.vue';
import updatePost from './pages/modificaPost.vue';
import singlePost from './pages/singlePost.vue';

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
        {
            path: '/update',
            name: 'update',
            component: updatePost
        },
        {
            path: '/singlePost/:slug',
            name: 'singlePost',
            component: singlePost,
        },
    ]
});
export { router };