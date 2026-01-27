import './assets/main.css'

import { createApp } from 'vue' 
import App from './App.vue' // Vite the real builder steps in as main.js imports App 

createApp(App).mount('#app') // connecting vue to real DOM is performed by mounting(handshake b/w vue's virtual world and real DOM after this rendering actually happens)


