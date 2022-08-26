import { createApp } from "vue";
import { createRouter, createWebHashHistory } from "vue-router";
import App from "@/App.vue";
import MainView from "@/views/MainView.vue";

import "./assets/main.css";

const routes = [
    { path: '/', component: MainView },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

const app = createApp(App)
app.use(router)

app.mount("#app");
