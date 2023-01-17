import { createRouter, createWebHashHistory } from 'vue-router';
import Test from '@/page/test.vue';

const routes = [
  //   { path: '/', component: Test },
  { path: '/test', component: Test },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export { router };
