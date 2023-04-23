import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'
import '@/assets/css/app.css'
import router from './router'
import 'boxicons'
import 'boxicons/css/boxicons.min.css'

import '@wangeditor/editor/dist/css/style.css'
import DefaultLayout from "@/layout/DefaultLayout.vue";
import AdminLayout from "@/layout/AdminLayout.vue";

Vue.use(Vuesax)

Vue.component("layout-default", DefaultLayout);
Vue.component("layout-admin", AdminLayout);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
