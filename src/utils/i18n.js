import Vue from "vue";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

function loadLocaleMessages() {
  const locales = require.context(
    "../language",
    true,
    /[A-Za-z0-9-_,\s]+\.(js|json)$/i
  );
  const messages = {};
  locales.keys().forEach(key => {
    const matched = key.match(/[A-Za-z0-9-_,\s]+(?=[./])/g);
    if (!matched) return false;
    if (matched.length === 1) {
      const name = matched[0];
      messages[name] = locales(key);
    } else {
      const [name, type] = matched;
      messages[name][type] = locales(key);
    }
  });
  return messages;
}

export default new VueI18n({
  locale: process.env.VUE_APP_I18N_LOCALE || "cn",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages()
});
