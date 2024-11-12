import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { registerGlobalComponents } from "./utils/import";
import './style.css'
import 'element-plus/dist/index.css'
import ElementPlus from 'element-plus'
import { OhVueIcon, addIcons } from "oh-vue-icons";
import * as FaIcons from "oh-vue-icons/icons/fa";
import 'remixicon/fonts/remixicon.css'

const Fa = Object.values({ ...FaIcons });
addIcons(...Fa);

const app = createApp(App)
registerGlobalComponents(app)
app.use(ElementPlus)
app.use(router)
app.component("v-icon", OhVueIcon);
app.mount('#app')
