import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Catalog Home',
    component: function () {
      return import('../views/Catalog.vue')
    }
  },
  {
    path: '/catalog',
    name: 'Catalog List',
    component: function () {
      return import('../views/Catalog.vue')
    }
  },
  {
    path: '/catalog/:id',
    name: 'CatalogInner',
    component: function () {
      return import('../views/CatalogInnerPage.vue')
    }
  },
  { 
    path: '/404', 
    name: '404', 
    component: function () {
      return import('../views/NotFound.vue')
    }
  }, 
  { 
    path: '*', 
    redirect: '/404' 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
