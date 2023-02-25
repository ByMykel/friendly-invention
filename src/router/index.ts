import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
      beforeEnter: (to, from, next) => {
        if (sessionStorage.getItem('token')) {
          next({ name: 'chat' })
        } else {
          next()
        }
      }
    },
    {
      path: '/chat',
      name: 'chat',
      meta: {
        requiresAuth: true
      },
      component: () => import('../views/ChatView.vue'),
      beforeEnter: (to, from, next) => {
        if (to.meta.requiresAuth && !sessionStorage.getItem('token')) {
          next({ name: 'login' })
        } else {
          next()
        }
      }
    }
  ]
})

export default router
