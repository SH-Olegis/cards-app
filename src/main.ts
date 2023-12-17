import { createApp } from 'vue'

import App from './App.vue'
import { createStore } from '@/stores';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)

app.use(createStore())
app.use(Antd)

app.mount('#app')
