<template>
  <div id="app">
    <Header />
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
    <!-- <Menu /> -->
    <Footer />
  </div>
</template>
<script>
import Header from "@components/common/header.vue";
// import Menu from "./components/mobile/menu/menu";
import Footer from "@components/common/footer.vue";
export default {
  name: "App",
  components: { Header, Footer }
};
</script>
<style lang="scss"></style>
