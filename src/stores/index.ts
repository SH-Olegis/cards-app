import { createPinia } from 'pinia';

export const createStore = () => {
    return createPinia()
}

export * from './docs/docs.service'