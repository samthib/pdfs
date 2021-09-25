import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home' }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: { title: 'About' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/pdf',
    name: 'Pdf',
    component: () => import(/* webpackChunkName: "pdf" */ '../views/Pdf.vue'),
    meta: { title: 'Pdf' }
  },
  {
    path: '/resume',
    name: 'Resume',
    component: () => import(/* webpackChunkName: "resume" */ '../views/Resume.vue'),
    meta: { title: 'Resume' }
  },
  {
    path: '/invoice',
    name: 'Invoice',
    component: () => import(/* webpackChunkName: "invoice" */ '../views/Invoice.vue'),
    meta: { title: 'Invoice' }
  },
  {
    path: '/business-card',
    name: 'Card',
    component: () => import(/* webpackChunkName: "business-card" */ '../views/Card.vue'),
    meta: { title: 'Card' }
  },
  {
    path: '/ticket',
    name: 'Ticket',
    component: () => import(/* webpackChunkName: "ticket" */ '../views/Ticket.vue'),
    meta: { title: 'Ticket' }
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
