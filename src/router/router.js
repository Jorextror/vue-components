import { createRouter, createWebHistory } from 'vue-router';
import Dasboard from '../view/dasboard/DasboardView.vue';
import Buttons from '../view/buttons/ButtonsView.vue';
import TooltipView from '../view/tooltip/TooltipView.vue';
import CardsView from '../view/cards/CardsView.vue';

const routes = [
  { path: '/', name: 'Dasboard', component: Dasboard },
  { path: '/buttons', name: 'Buttons', component: Buttons },
  { path: '/tooltip', name: 'Tooltip', component: TooltipView },
  { path: '/cards', name: 'Cards', component: CardsView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
