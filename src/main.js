import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./utils/i18n";
import "./styles/common.scss";
import "./utils/element";
import { getDeviceType } from "./utils";

Vue.prototype.$deviceType = global.deviceType = getDeviceType();

Vue.config.productionTip = false;
i18n.locale = store.getters.language;
document.documentElement.lang =
  i18n.locale === "cn" ? "zh-cmn-Hans" : i18n.locale;

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
