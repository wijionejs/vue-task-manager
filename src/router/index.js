import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import List from '@/views/List'
import Error from "@/views/Error";
import Create from "@/views/Create";
import Task from "@/views/Task";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/list',
    name: 'list',
    component: List
  },
  {
    path: '/task/:id',
    name: 'task',
    component: Task
  },
  {
    path: '/create',
    name: 'create',
    component: Create
  },
  {
    path: '*',
    name: 'error',
    component: Error
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
