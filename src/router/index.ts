import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import OlympicMainPage from '@/components/OlympicMainPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import LayoutView from '@/views/LayoutView.vue';
import SportDetail from '../views/SportDetail.vue';
import CountryDetail from '@/views/CountryDetail.vue';
import ProfileView from '@/views/ProfileView.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: OlympicMainPage,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: { hideNavbar: true },
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterPage,
    meta: { hideNavbar: true },

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/event/:id',
    name: 'event-layout-view',
    component: LayoutView,
    props: true,
    children: [
      {
        path: 'countrydetail/:id',
        name: 'country-detail',
        component: CountryDetail,
        props: true
      },
      {
        path: 'sportdetail/:id',
        name: 'sport-detail',
        component: SportDetail,
        props: true
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;