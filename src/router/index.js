// src/router/index.js or index.ts
import { createRouter, createWebHistory } from 'vue-router'
import Register from '../components/Register.vue' 
import Home from '../components/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
