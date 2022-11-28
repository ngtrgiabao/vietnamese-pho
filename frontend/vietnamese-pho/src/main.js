import { createApp } from "vue";
import App from "./App.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import "./assets/reset.css";
import router from "./routes";

library.add(fas);

const app = createApp(App);
app.use(router).component("fa", FontAwesomeIcon);
app.mount("#app");
