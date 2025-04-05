import { createRouter, createWebHistory } from 'vue-router';
import Dasboard from '../view/dasboard/dasboard.vue';
import Buttons from '../view/buttons/buttons.vue';

const routes = [
  { path: '/', name: 'Dasboard', component: Dasboard },
  { path: '/buttons', name: 'Buttons', component: Buttons },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
