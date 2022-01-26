import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {
    if (to.name !== 'Home' && !store.getters.getShow){
      next({name:'Home'})
    }
    else {
      next()
    }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
