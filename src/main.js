import { createApp } from "vue";
import { configure } from "vee-validate";
import { localize } from "@vee-validate/i18n";
import es from "@vee-validate/i18n/dist/locale/es.json";

import { createPinia } from "pinia";
import Primevue from "primevue/config";
import Aura from "@primevue/themes/aura";

import App from "./App.vue";
import router from "./router/index";

import "./style/index.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Primevue, {
  theme: {
    preset: Aura,
    options: {
      cssLayer: {
        name: "primevue",
        order: "tailwind-base, primevue, tailwind-utilities",
      },
      darkModeSelector: "",
    },
  },
});

configure({
  generateMessage: localize({
    es,
  }),
  validateOnInput: true,
});

app.use(router);

app.mount("#app");
