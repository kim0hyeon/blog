import { createWebHistory, createRouter } from "vue-router";
import PageList from './components/PageList.vue'
import HomePage from './components/HomePage.vue'
import DetailPage from './components/DetailPage.vue'

const routes = [
  {
    path: "/list",
    component: PageList,
  },
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/detail/:id",
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 