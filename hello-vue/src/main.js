import { createApp } from 'vue'
import App from './App.vue'
import HelloApi from '@/services/HelloApi'

let app = createApp(App)

app.config.globalProperties.$hello_api=HelloApi
//now can use HelloApi in componehnts in HelloWorld,.vue

app.mount('#app')

//general setup
