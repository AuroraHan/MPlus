import { createRouter, createWebHashHistory } from 'vue-router';
import Test from '@/page/MyTest/test.vue';
import Home from '@/page/home/home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/test', component: Test },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
