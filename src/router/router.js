import { createRouter, createWebHistory } from 'vue-router';
import Dasboard from '../view/DasboardView.vue';
import Buttons from '../view/ButtonsView.vue';
import Checkboxes from '../view/CheckBoxesView.vue';
import TooltipView from '../view/TooltipView.vue';
import CardsView from '../view/CardsView.vue';
import BadgesView from '../view/BadgesView.vue';
import CarouselView from '../view/CarouselView.vue';

const routes = [
  { path: '/', name: 'Dasboard', component: Dasboard },
  { path: '/buttons', name: 'Buttons', component: Buttons },
  { path: '/checkboxes', name: 'Checkboxes', component: Checkboxes },
  { path: '/tooltip', name: 'Tooltip', component: TooltipView },
  { path: '/cards', name: 'Cards', component: CardsView },
  { path: '/badges', name: 'Badge', component: BadgesView },
  { path: '/carousels', name: 'Carousel', component: CarouselView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
