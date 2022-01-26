import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import View from '../views/WeatherView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/loading',
    name: 'Loading',

    component: () => import(/* webpackChunkName: "about" */ '../views/LoadingWeather.vue')
  },
    {
        path: '/weather',
        name: 'Weather',
        component: View
    },
]

const router = new VueRouter({
  routes
})

export default router
