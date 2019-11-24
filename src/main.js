import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)


Vue.config.productionTip = false

import vueCustomElement from 'vue-custom-element'
Vue.use(vueCustomElement)

/*
new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
*/
Vue.customElement('vue-widget', App)
