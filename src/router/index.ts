import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import OlympicMainPage from '@/components/OlympicMainPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import RegisterPage from '@/views/RegisterPage.vue';
import LayoutView from '@/views/LayoutView.vue';
import SportDetail from '../views/SportDetail.vue';
import CountryDetail from '@/views/CountryDetail.vue';
import ManageUser from '@/views/ManageUserView.vue';
import NotFoundView from "@/views/NotFoundView.vue";
import NetworkErrorView from "@/views/NetworkErrorView.vue";
import ProfileView from '@/views/ProfileView.vue';
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginPage,
    meta: { hideNavbar: true },
  },
  {
    path: '/home',
    name: 'home',
    component: OlympicMainPage,
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
    path: '/manage_user',
    name: 'manage user',
    component: ManageUser
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
  {
    path: '/404/:resource',
    name: '404-resource',
    component: NotFoundView,
    meta: { hideNavbar: true },
    props: true
  },
  {
      path: '/network-error',
      name: 'network-error',
      component: NetworkErrorView,
      meta: { hideNavbar: true },
  },
  {
      path: '/:catchAll(.*)',
      name: 'notfound',
      component: NotFoundView,
      meta: { hideNavbar: true },
  }
  ];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;