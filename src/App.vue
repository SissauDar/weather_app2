<template>
  <div id="app">
    <Navigation />
    <router-view />
  </div>
</template>

<script>
import Container from "@/components/layout/Container"; // Een vue module ophalen uit een andere file
import Row from "@/components/layout/Row";
import Navigation from "@/components/Navigation";

export default {
  name: "app",
  components: {
    Container,
    Row,
    Navigation
  }
};
</script>

<style lang="scss">
@import "@/assets/style/screen.scss";
</style>
