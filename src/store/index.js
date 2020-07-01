import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import createLogger from "vuex/dist/logger";
import language from "./language";

Vue.use(Vuex);

const persistedStateOpt = {
  reducer: store => ({
    // 如果要选择持久化部分数据，请把reducer放开。这个方法用于部分数据持久化。
    language: store.language
  })
};

export default new Vuex.Store({
  modules: {
    language
  },
  plugins:
    process.env.NODE_ENV === "production"
      ? [createPersistedState(persistedStateOpt)]
      : [createLogger(), createPersistedState()]
});
