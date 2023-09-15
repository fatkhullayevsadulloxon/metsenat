import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
import router from './router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'

library.add(faUserSecret)

const app = createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
app.use(VueTheMask)
app.use(router)

app.mount('#app')
