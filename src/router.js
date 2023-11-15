import { createWebHistory, createRouter } from "vue-router";
import PageList from './components/PageList.vue'
import HomePage from './components/HomePage.vue'
import DetailPage from './components/DetailPage.vue'
import AuthorPage from './components/AuthorPage.vue'
import CommentPage from './components/CommentPage.vue'

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
    children : [
      {
        path : "author",
        component : AuthorPage,
      },
      {
        path : "comment",
        component : CommentPage,
      },
    ]
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 