import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61e3b3c8 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _09fd6238 = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _369cbbc4 = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _26f4de5a = () => interopDefault(import('../pages/signup/index.vue' /* webpackChunkName: "pages/signup/index" */))
const _30304308 = () => interopDefault(import('../pages/upload/index.vue' /* webpackChunkName: "pages/upload/index" */))
const _c29fa44c = () => interopDefault(import('../pages/you/index.vue' /* webpackChunkName: "pages/you/index" */))
const _2ee867a8 = () => interopDefault(import('../pages/you/index/albums/index.vue' /* webpackChunkName: "pages/you/index/albums/index" */))
const _42b7ab1f = () => interopDefault(import('../pages/you/index/following/index.vue' /* webpackChunkName: "pages/you/index/following/index" */))
const _2d734622 = () => interopDefault(import('../pages/you/index/history/index.vue' /* webpackChunkName: "pages/you/index/history/index" */))
const _acba7cee = () => interopDefault(import('../pages/you/index/library/index.vue' /* webpackChunkName: "pages/you/index/library/index" */))
const _2f30140a = () => interopDefault(import('../pages/you/index/likes/index.vue' /* webpackChunkName: "pages/you/index/likes/index" */))
const _0d12cd6f = () => interopDefault(import('../pages/you/index/playlists/index.vue' /* webpackChunkName: "pages/you/index/playlists/index" */))
const _2f187507 = () => interopDefault(import('../pages/you/index/stations/index.vue' /* webpackChunkName: "pages/you/index/stations/index" */))
const _64f79fca = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _34b97988 = () => interopDefault(import('../pages/_artistID/index.vue' /* webpackChunkName: "pages/_artistID/index" */))
const _53f74e26 = () => interopDefault(import('../pages/_artistID/albums/index.vue' /* webpackChunkName: "pages/_artistID/albums/index" */))
const _9c6539da = () => interopDefault(import('../pages/_artistID/edit/index.vue' /* webpackChunkName: "pages/_artistID/edit/index" */))
const _91096718 = () => interopDefault(import('../pages/_artistID/album/_albumID/index.vue' /* webpackChunkName: "pages/_artistID/album/_albumID/index" */))
const _997dcd88 = () => interopDefault(import('../pages/_artistID/_songID/index.vue' /* webpackChunkName: "pages/_artistID/_songID/index" */))
const _b8413cf8 = () => interopDefault(import('../pages/_artistID/_songID/_commentID/index.vue' /* webpackChunkName: "pages/_artistID/_songID/_commentID/index" */))
const _09dcce52 = () => interopDefault(import('../pages/_.vue' /* webpackChunkName: "pages/_" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/about",
      component: _61e3b3c8,
      name: "about"
    }, {
      path: "/profile",
      component: _09fd6238,
      name: "profile"
    }, {
      path: "/settings",
      component: _369cbbc4,
      name: "settings"
    }, {
      path: "/signup",
      component: _26f4de5a,
      name: "signup"
    }, {
      path: "/upload",
      component: _30304308,
      name: "upload"
    }, {
      path: "/you",
      component: _c29fa44c,
      name: "you",
      children: [{
        path: "albums",
        component: _2ee867a8,
        name: "you-index-albums"
      }, {
        path: "following",
        component: _42b7ab1f,
        name: "you-index-following"
      }, {
        path: "history",
        component: _2d734622,
        name: "you-index-history"
      }, {
        path: "library",
        component: _acba7cee,
        name: "you-index-library"
      }, {
        path: "likes",
        component: _2f30140a,
        name: "you-index-likes"
      }, {
        path: "playlists",
        component: _0d12cd6f,
        name: "you-index-playlists"
      }, {
        path: "stations",
        component: _2f187507,
        name: "you-index-stations"
      }]
    }, {
      path: "/",
      component: _64f79fca,
      name: "index"
    }, {
      path: "/:artistID",
      component: _34b97988,
      name: "artistID"
    }, {
      path: "/:artistID/albums",
      component: _53f74e26,
      name: "artistID-albums"
    }, {
      path: "/:artistID/edit",
      component: _9c6539da,
      name: "artistID-edit"
    }, {
      path: "/:artistID/album/:albumID?",
      component: _91096718,
      name: "artistID-album-albumID"
    }, {
      path: "/:artistID/:songID",
      component: _997dcd88,
      name: "artistID-songID"
    }, {
      path: "/:artistID/:songID/:commentID",
      component: _b8413cf8,
      name: "artistID-songID-commentID"
    }, {
      path: "/*",
      component: _09dcce52,
      name: "all"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
