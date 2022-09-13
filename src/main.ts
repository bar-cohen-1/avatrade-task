import { createApp } from "vue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

import BaseButton from "@components/BaseButton.vue";
import BaseForm from "@components/BaseForm.vue";
import BaseHeader from "@components/BaseHeader.vue";
import BaseInput from "@components/BaseInput.vue";
import BaseView from "@components/BaseView.vue";

const app = createApp(App);

app.use(store);
app.use(router);

app.component("base-button", BaseButton);
app.component("base-form", BaseForm);
app.component("base-header", BaseHeader);
app.component("base-input", BaseInput);
app.component("base-view", BaseView);

app.mount("#app");
