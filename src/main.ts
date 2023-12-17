import { createApp } from 'vue'

import App from './App.vue'
import { createStore } from '@/stores';

const app = createApp(App)

app.use(createStore())

app.mount('#app')
