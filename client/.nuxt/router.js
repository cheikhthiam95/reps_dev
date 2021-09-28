import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _e50601ba = () => interopDefault(import('../pages/account.vue' /* webpackChunkName: "pages/account" */))
const _6938b6c5 = () => interopDefault(import('../pages/admin.vue' /* webpackChunkName: "pages/admin" */))
const _47f7e441 = () => interopDefault(import('../pages/beLocataire.vue' /* webpackChunkName: "pages/beLocataire" */))
const _2e597b58 = () => interopDefault(import('../pages/bePartenaire.vue' /* webpackChunkName: "pages/bePartenaire" */))
const _7eeb48ba = () => interopDefault(import('../pages/forget_password.vue' /* webpackChunkName: "pages/forget_password" */))
const _017105df = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _2d8061ba = () => interopDefault(import('../pages/modal.vue' /* webpackChunkName: "pages/modal" */))
const _5d9e62e7 = () => interopDefault(import('../pages/newAccount.vue' /* webpackChunkName: "pages/newAccount" */))
const _055c9a7f = () => interopDefault(import('../pages/book/_habitatId.vue' /* webpackChunkName: "pages/book/_habitatId" */))
const _a4aae8c8 = () => interopDefault(import('../pages/hote/_id_hotes/index.vue' /* webpackChunkName: "pages/hote/_id_hotes/index" */))
const _37c962c8 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account",
    component: _e50601ba,
    name: "account"
  }, {
    path: "/admin",
    component: _6938b6c5,
    name: "admin"
  }, {
    path: "/beLocataire",
    component: _47f7e441,
    name: "beLocataire"
  }, {
    path: "/bePartenaire",
    component: _2e597b58,
    name: "bePartenaire"
  }, {
    path: "/forget_password",
    component: _7eeb48ba,
    name: "forget_password"
  }, {
    path: "/login",
    component: _017105df,
    name: "login"
  }, {
    path: "/modal",
    component: _2d8061ba,
    name: "modal"
  }, {
    path: "/newAccount",
    component: _5d9e62e7,
    name: "newAccount"
  }, {
    path: "/book/:habitatId?",
    component: _055c9a7f,
    name: "book-habitatId"
  }, {
    path: "/hote/:id_hotes",
    component: _a4aae8c8,
    name: "hote-id_hotes"
  }, {
    path: "/",
    component: _37c962c8,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
