<template>
  <header class="header bgwh">
    <div class="wrapper ui-cell aic">
      <div class="header__logo"></div>
      <div class="header__menu ui-cell__bd"></div>
      <a href="javascript:;" class="choose__language db" @click="choose">{{
        language
      }}</a>
      <a href="javascript:;" class="icon__menu"></a>
    </div>
  </header>
</template>
<script>
import { transformQuery } from "@utils";
export default {
  name: "Header",
  data() {
    return {};
  },
  computed: {
    language() {
      return this.$store.state.language.type;
    }
  },
  created() {},
  methods: {
    choose() {
      let newfullPath = "";
      const { hash, path, query } = this.$route;
      const language = this.language === "cn" ? "en" : "cn";
      const queryString = transformQuery({ query, language });
      newfullPath = path + queryString + hash;
      this.$router.push(newfullPath);
      this.$store.dispatch("choose", language);
    }
  }
};
</script>
<style lang="scss">
.header {
  padding-top: 10px;
  padding-bottom: 10px;
  @include mq($mobile) {
    padding-left: 16px;
    padding-right: 16px;
  }
  &__logo {
    width: 180px;
    height: 80px;
    background: url("../../assets/desktop/logo.png") no-repeat;
    background-size: cover;
  }
  .choose__language {
    font-size: 14px;
    font-weight: 500;
    color: rgba(73, 72, 71, 1);
    line-height: 20px;
    margin-right: 10px;
    text-transform: uppercase;
  }
}
.icon__menu {
  width: 24px;
  height: 24px;
  background: url("../../assets/mobile/menu.svg") no-repeat;
  background-size: cover;
  margin-left: 12px;
  display: block;
  @include mq($desktop) {
    display: none;
  }
}
</style>
