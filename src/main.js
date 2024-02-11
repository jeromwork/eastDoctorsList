import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
const app = createApp(App);
// createApp(App).mount('#app1')

let containerSelector = "#east-doctors-list";

// check if app has been mounted already
const existingApp = document.querySelector(containerSelector);
if (existingApp && existingApp.__vue_app__) {
    existingApp.__vue_app__.unmount(); // Unmount the existing app
}

// Mount 'app' (App.vue) as root component.
app.mount(containerSelector);