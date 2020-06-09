import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/chat',
    name: 'Chat',
    component: () => import('../modules/ChatPage/ChatPage.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
