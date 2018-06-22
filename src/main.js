import Vue from 'vue'
import App from '@/App'
import router from '@/router'

import VueTouch from "vue-touch";
import axios from "axios";

import { StillerService } from "@/services/StillerService";
import { TransService } from "@/services/TransService";

import '@/assets/css/hellper.css';
import '@/assets/css/animate.css';
import '@/assets/css/animate.css';

Vue.config.productionTip = false

Vue.use( VueTouch )
Vue.use({ install(V) { V.prototype.$axios = axios } })

Vue.use( StillerService )
Vue.use( TransService )

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
