import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import store from './store';

createApp(App).use(store).mount('#app')
