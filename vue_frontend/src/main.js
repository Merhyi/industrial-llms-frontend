/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from '@/plugins'

// Components
import App from './App.vue'
// Composables
import { createApp } from 'vue'
import router from "./router"
import CustomScrollbar from 'custom-vue-scrollbar';
import 'custom-vue-scrollbar/dist/style.css';



const app = createApp(App)

registerPlugins(app)

// app.mount('#app')
app.component(CustomScrollbar.name, CustomScrollbar);


app.use(router).mount('#app')