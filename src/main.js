// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//import Mint from 'mint-ui'
import Header from 'mint-ui'
import Cell from 'mint-ui'
import Field from 'mint-ui'
//import 'mint-ui/lib/style.css'
import VueTouch from 'vue-touch'
import App from './App'

VueTouch.registerCustomEvent('doubletap', {
  type: 'tap',
  taps: 2
})

VueTouch.config.swipe = {
	direction: 'horizontal'
}

//Vue.use(Mint)
Vue.use(Header)
Vue.use(Cell)
Vue.use(Field)
Vue.use(VueTouch, {name: 'v-touch'})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
