import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ModifierPage from '../views/ModifierPage.vue'

Vue.use(VueRouter)

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
    path: '/ajout',
    name: 'Ajout',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Ajout.vue')
  },
  {
    // path:'individu/:id/modifier',
    path:'/individu/:id/modifier',
    name: 'ModifierPage',
    // component: () => import(/* webpackChunkName: "about" */ '../views/Modifier.vue')
    component: ModifierPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
