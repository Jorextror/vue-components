import { createRouter, createWebHistory } from 'vue-router';
import Dasboard from '../view/Dasboards/DasboardView.vue';
import ButtonsView from '../view/buttons/ButtonsView.vue';
import Checkboxes from '../view/Buttons/CheckBoxesView.vue';
import TooltipView from '../view/Tooltips/TooltipView.vue';
import CardsView from '../view/CardsView.vue';
import BadgesView from '../view/Buttons/BadgesView.vue';
import CarouselView from '../view/Carousels/CarouselView.vue';
import TogglesView from '../view/Buttons/TogglesView.vue';
import LoadersView from '../view/Progress/LoadersView.vue';
import InputsView from '../view/InputsView.vue';
import RadiosView from "../view/Buttons/RadiosView.vue";
import FormsView from "../view/FormsView.vue";
import PatternsView from "../view/PatternsView.vue";
import ModalsView from "../view/ModalsView.vue";
import TablesView from "../view/TablesView.vue";
import TabsView from "../view/TabsView.vue";
import AccordionsView from "../view/Buttons/AccordionsView.vue";
import AlertsView from "../view/AlertsView.vue";
import BreadcrumbsView from "../view/Progress/BreadcrumbsView.vue";
import DropdownsView from "../view/Buttons/DropdownsView.vue";
import PaginationView from "../view/PaginationView.vue";
import PopoversView from "../view/Tooltips/PopoversView.vue";
import SlidersView from "../view/Carousels/SlidersView.vue";
import ProgressView from "../view/Progress/ProgressView.vue";

const routes = [
  { path: '/', name: 'Dasboard', component: Dasboard },
  { path: '/buttons', name: 'Buttons', component: ButtonsView },
  { path: '/checkboxes', name: 'Checkboxes', component: Checkboxes },
  { path: '/toggles', name: 'Toggles', component: TogglesView },
  { path: '/cards', name: 'Cards', component: CardsView },
  { path: '/loaders', name: 'Loaders', component: LoadersView },
  { path: '/inputs', name: 'Inputs', component: InputsView },
  { path: '/radio', name: 'Radio', component: RadiosView },
  { path: '/forms', name: 'Forms', component: FormsView },
  { path: '/patterns', name: 'Patterns', component: PatternsView },
  { path: '/tooltip', name: 'Tooltip', component: TooltipView },
  { path: '/modals', name: 'Modals', component: ModalsView },
  { path: '/tables', name: 'Tables', component: TablesView },
  { path: '/tabs', name: 'Tabs', component: TabsView },
  { path: '/accordions', name: 'Accordions', component: AccordionsView },
  { path: '/alerts', name: 'Alerts', component: AlertsView },
  { path: '/badges', name: 'Badge', component: BadgesView },
  { path: '/breadcrumbs', name: 'Breadcrumbs', component: BreadcrumbsView },
  { path: '/carousels', name: 'Carousel', component: CarouselView },
  { path: '/dropdowns', name: 'Dropdowns', component: DropdownsView },
  { path: '/pagination', name: 'Pagination', component: PaginationView },
  { path: '/popovers', name: 'Popovers', component: PopoversView },
  { path: '/sliders', name: 'Sliders', component: SlidersView },
  { path: '/progress', name: 'Progress', component: ProgressView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
