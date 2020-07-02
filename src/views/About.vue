<template>
  <div class="about">
    <div id="nav">
      <router-link to="/about/brandStory">品牌故事</router-link>|
      <router-link to="/about/brandConcept">品牌理念</router-link>
    </div>
    <h1>This is an about page</h1>
    <div class="chang-lang">
      <button @click="$store.dispatch('choose', 'cn')">切换中文语言</button>
      <button @click="$store.dispatch('choose', 'en')">切换英文语言</button>
      <HelloI18n></HelloI18n>
    </div>
  </div>
</template>

<script>
import HelloI18n from "@components/common/HelloI18n.vue";
export default {
  name: "About",
  components: { HelloI18n },
  methods: {}
};
</script>
<style lang="scss">
.chang-lang {
  background: #000;
  padding-top: 10px;
  padding-bottom: 10px;
  @include mq($large) {
    background: red;
  }

  @include mq($small) {
    // width: 100%;
    background: #ffffff;
  }
}
</style>
