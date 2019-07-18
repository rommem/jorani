import Vue from 'vue'
import App from './App.vue'
import { buildRouter } from './router.js'

//Bootstrap Vue
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

//Material Design Icons
import 'vue-material-design-icons/styles.css'

//Application global configuration
Vue.config.productionTip = false
const configElement = document.getElementById('configTag')
const config = JSON.parse(configElement.innerHTML)
Vue.prototype.$baseURL = config.baseURL
Vue.prototype.$languageCode = config.languageCode

//i18n setup
//import VueI18n from 'vue-i18n'
//Vue.use(VueI18n)

new Vue({
  render: h => h(App),
  router: buildRouter(config.baseURL),
}).$mount('#app')
