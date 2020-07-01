<template>
  <div class="about">
    <div class="about-banner">
      <img src="https://unsplash.it/1800/450/?random" alt="" />
    </div>
    {{ $t("about.title") }}
    <div class="about-nav">
      <router-link
        class="about-nav__item"
        :to="nav.path"
        v-for="(nav, index) in navs"
        :key="index"
        >{{ nav.label }}</router-link
      >
    </div>
    <router-view ref="router"></router-view>
  </div>
</template>
<script>
export default {
  name: "AboutIndex",
  data() {
    return {
      navs: [
        {
          label: "品牌故事",
          path: "/about/brandStory"
        },
        {
          label: "品牌理念",
          path: "/about/brandConcept"
        }
      ]
    };
  }
};
</script>
<style lang="scss">
.about-banner {
  img {
    width: 100%;
  }
}
.about-nav {
  border-bottom: 1px solid #cccccc;
}
.about-nav__item {
  display: inline-block;
  vertical-align: middle;
  padding: 20px;
}
</style>
