import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import Vue3Autocounter from 'vue3-autocounter'
import VueApexCharts from 'vue3-apexcharts'
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';



library.add(faUserSecret)

const app = createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .component('vue3-autocounter', Vue3Autocounter)
app.use(VCalendar, {})
app.use(VueApexCharts)
app.use(VueTheMask)
app.use(router)

app.mount('#app')
