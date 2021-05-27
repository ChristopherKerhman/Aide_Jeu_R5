import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/aideDeJeu',
    name: 'aideDeJeu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "aide de jeu" */ '../views/aide_de_jeu.vue')
  },
  {
    path: '/tir',
    name: 'adjTir',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Tir" */ '../views/moduleTir.vue')
  },
  {
    path: '/closecombat',
    name: 'adjCloseCombat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Close" */ '../views/moduleClose.vue')
  },
  {
    path: '/expertCombat',
    name: 'adjCombat',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "Expert" */ '../views/expert.vue')
  },
  {
    path: '/DommageVehicule',
    name: 'adjVehicule',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "DommageVehicule" */ '../views/vehicule.vue')
  },
  {
    path: '/supportTactique',
    name: 'adjSupportTactique',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "supportTactique" */ '../views/supportTactique.vue')
  },
  {
    path: '/:catchAll(.*)*',
    name: 'NotFound',
    // Navigation pour gérer les erreurs 404.
    component: () => import(/* webpackChunkName: "404" */ '../views/notFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
