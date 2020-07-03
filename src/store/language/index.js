import i18n from "@/utils/i18n";

const state = {
  type: "cn"
};

const getters = {
  language: state => state.type
};

const mutations = {
  choose(state, value) {
    let lang = value === "cn" ? "zh-cmn-Hans" : value;
    i18n.locale = value;
    state.type = value;
    document.documentElement.lang = lang;
  }
};

const actions = {
  choose({ commit }, value) {
    commit("choose", value);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
