import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import i18n from "./utils/i18n";
import "./styles/common.scss";
import "./utils/element-ui";
import { getDeviceType, setDefaultLang } from "./utils";

Vue.prototype.$deviceType = global.deviceType = getDeviceType();

Vue.config.productionTip = false;

setDefaultLang({ i18n, store });

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
