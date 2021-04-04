import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Vue from "vue";
import VueRouter from 'vue-router'
import store from '@/store'

//解决vue-router 3.1.0及之后版本在路由跳转时浏览器控制台报Uncaugh(in promise)的问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location,onResolve,onReject) {
  if(onResolve || onReject) {
    return originalPush.call(this,location, onResolve, onReject)
  }
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
      name: 'home'
    }
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: Home
  },
  {
    path: '/category/:id',
    name: 'category',
    meta: {
      title: '分类图书'
    },
    component: () => import('../views/Books')
  },
  {
    path: '/search',
    name: 'search',
    //页面标题
    meta: {
      title: '搜索结果'
    },
    component: () => import('../views/Books')
  },
  {
    path: '/newBooks',
    name: 'newBooks',
    meta: {
      title: '新书上市'
    },
    component: () => import('../components/BooksNew')
  },
  {
    path: '/book/:id',
    name: 'book',
    meta: {
      title: '图书'
    },
    component: () => import('../views/Book')
  },
  {
    path: '/cart',
    name: 'cart',
    meta: {
      title: '购物车'
    },
    component: () => import('../views/ShoppingCart')
  },
  {
    path: '/register',
    name: 'register',
    meta: {
      title: '注册'
    },
    component: () => import('../components/UserRegister')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    component: () => import('../components/UserLogin')
  },
  {
    path: '/check',
    name: 'check',
    meta: {
      title: '结算',
      requiresAuth: true  //进入这个路由是需要登录
    },
    component: () => import('../views/Checkout')
  },

  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URl,
  routes,
})

router.beforeEach((to,from,next) => {
  //判断该路由是否需要登录权限
  if(to.matched.some(record => record.meta.requiresAuth)) {
    //路由需要验证，判断用户是否已经登录
    if(store.state.user.user) {
      next()
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    }
  }else {
    next()
  }
})

//设置页面的标题
router.afterEach((to) => {
  document.title = to.meta.title
})

// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes
// })

export default router
