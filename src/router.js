import Vue from 'vue'
import Router from 'vue-router'
import Store from '@/store'

import DefaultLayout from '@/layouts/Default'

import Home from '@/pages/home/index'
import HowWeDoIt from '@/pages/how-we-do-it/index'
import TheJournal from '@/pages/the-journal/index'
import WhatWeDo from '@/pages/what-we-do/index'

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: Home
        },
        {
          path: '/how-we-do-it',
          name: 'how-we-do-it',
          component: HowWeDoIt
        },
        {
          path: '/the-journal',
          name: 'the-journal',
          component: TheJournal
        },
        {
          path: '/what-we-do',
          name: 'what-we-do',
          component: WhatWeDo
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  Store.commit('ui/SET_PAGE_LOADING', true)
  setTimeout(() => {
    Store.commit('ui/SET_PAGE_LOADING', false)
  }, 2000)

  return next()
})

export default router
