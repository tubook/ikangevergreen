<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <Menu />
    <Footer />
  </div>
</template>
<script>
import Menu from "./components/mobile/menu/menu";
import Footer from "@components/common/footer.vue";
export default {
  name: "App",
  components: { Menu, Footer }
};
</script>
<style lang="scss">
#app {
  width: 100vm;
  height: 100vh;
}
</style>
