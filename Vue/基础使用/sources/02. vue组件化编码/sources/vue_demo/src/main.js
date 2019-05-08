
import Vue from 'vue'
import { Button,Icon,notification } from 'ant-design-vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Icon)
Vue.prototype.$notification = notification

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
