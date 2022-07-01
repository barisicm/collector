import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/SongsListView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/song',
    name: 'song',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SongView.vue')
  },
  {
    path: '/collection',
    name: 'collection',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CollectionView.vue')
  },
  {
    path: '/collections-list',
    name: 'collections-list',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/CollectionsListView.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import(/*  webpackChunkName: "about" */ '../views/SettingsView.vue')
  }

]

const router = new VueRouter({
  routes
})

export default router
