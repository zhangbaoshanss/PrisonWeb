import Vue from 'vue'
import App from './App.vue'
import { borderBox8, decoration5 } from '@jiaminghi/data-view'



Vue.config.productionTip = false
Vue.use(borderBox8)
Vue.use(decoration5)
new Vue({
  render: h => h(App),
}).$mount('#app')
