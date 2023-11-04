import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/app.css'
import {useMainStore} from "@/stores/main";
import './css/main.css'
import AxiosClient from "./Api/AxiosClient";


const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)

app.mount('#app')
const mainStore = useMainStore(pinia)
// Fetch sample data
mainStore.fetchSampleClients();
mainStore.fetchSampleHistory();
mainStore.loadCities();
mainStore.loadHabCom();
mainStore.loadHotels();

// Default title tag
const defaultDocumentTitle = 'Vue 3 Tailwind'

// Set document title from route meta
router.afterEach((to) => {
    document.title = to.meta?.title
        ? `${to.meta.title} — ${defaultDocumentTitle}`
        : defaultDocumentTitle
})