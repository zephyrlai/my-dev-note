
import Vue from 'vue'
import App from './App.vue'
import {Button} from 'mint-ui'

Vue.component(Button.name, Button)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App/>'
})
