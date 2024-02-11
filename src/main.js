import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App);
// createApp(App).mount('#app1')

let containerSelector = "#app1";

// check if app has been mounted already
const existingApp = document.querySelector(containerSelector);
console.log(containerSelector)
if (existingApp && existingApp.__vue_app__) {
    existingApp.__vue_app__.unmount(); // Unmount the existing app
}

// Mount 'app' (App.vue) as root component.
app.mount(containerSelector);