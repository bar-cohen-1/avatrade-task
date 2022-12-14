import { createApp } from "vue";

import "@type/index";
import "@style/main.scss";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseButton from "@components/BaseButton.vue";
import BaseForm from "@components/BaseForm.vue";
import BaseInput from "@components/BaseInput.vue";
import BaseView from "@components/BaseView.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("base-button", BaseButton);
app.component("base-form", BaseForm);
app.component("base-input", BaseInput);
app.component("base-view", BaseView);

app.mount("#app");
