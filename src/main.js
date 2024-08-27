import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router/index'
import { registerGlobalComponents } from "./utils/import"

const app = createApp(App)
registerGlobalComponents(app)
app.use(router)
app.mount('#app')
