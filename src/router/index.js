import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: { title: 'Home' },
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    meta: { title: 'About' },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/contact',
    name: 'Contact',
    meta: { title: 'Contact' },
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/pdf',
    name: 'Pdf',
    meta: { title: 'Pdf' },
    component: () => import(/* webpackChunkName: "pdf" */ '../views/Pdf.vue'),
  },
  {
    path: '/resume',
    name: 'Resume',
    meta: { title: 'Resume' },
    component: () => import(/* webpackChunkName: "resume" */ '../views/Resume.vue'),
  },
  {
    path: '/invoice',
    name: 'Invoice',
    meta: { title: 'Invoice' },
    component: () => import(/* webpackChunkName: "invoice" */ '../views/Invoice.vue'),
  },
  {
    path: '/business-card',
    name: 'Card',
    meta: { title: 'Card' },
    component: () => import(/* webpackChunkName: "business-card" */ '../views/Card.vue'),
  },
  {
    path: '/ticket',
    name: 'Ticket',
    meta: { title: 'Ticket' },
    component: () => import(/* webpackChunkName: "ticket" */ '../views/Ticket.vue'),
  },
  {
    path: '*',
    // path: '/:catchAll(.*)*',
    name: 'PageNotFound',
    meta: { title: 'Page Not Found' },
    component: () => import(/* webpackChunkName: "business-card" */ '../views/errors/PageNotFound.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Your Website Title';
  next();
});

export default router
