import { createApp } from "vue";
import App from "./App.vue";
import routes from "./routes/index";
import { createPinia } from "pinia";
createApp(App).use(routes).use(createPinia()).mount("#app");
