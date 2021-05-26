import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'

import Api from '@/api/Api'
import ElementPlus from 'element-plus'


import 'element-plus/lib/theme-chalk/index.css'
import '@/assets/scss/index.scss'
import {store} from "@/store/store"

createApp(App)
    .use(router)
    .use(store)
    .use(ElementPlus)
    .use(Api, {
        host: process.env.VUE_APP_API_HOST
    })
    .mount('#app')
