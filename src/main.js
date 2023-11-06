import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/style.css'
import axios from 'axios'

axios.defaults.baseURL = "http://146.190.32.176/diplomado/api/"

createApp(App).use(router).mount('#app')
