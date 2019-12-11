<template>
  <!-- <div></div> -->
  <Row class="c-row">
    <container>
      <nav
        class="c-nav o-layout o-layout--gutter o-layout--justify-space-between o-layout--align-center"
      >
        <div
          class="o-layout__item u-1-of-2 u-3-of-4-bp1 o-layout o-layout--align-center"
        >
          <img
            class="c-nav__logo"
            :src="require(`../assets/logo.png`)"
            alt="Logo here!"
          />
          <p class="u-mb-clear">wtr</p>
        </div>
        <div class="c-nav__links o-layout__item u-1-of-2 u-1-of-4-bp1 o-layout">
          <router-link
            class="c-nav__link u-align-text-center o-layout__item u-1-of-2"
            to="/"
            >Home</router-link
          >
          <router-link
            class="c-nav__link u-align-text-center o-layout__item u-1-of-2"
            to="/about"
            >About</router-link
          >
        </div>
      </nav>
    </container>
  </Row>
</template>

<script>
// @ is an alias to /src
import Row from "@/components/layout/Row";
import Container from "@/components/layout/Container";
export default {
  name: "navigation",

  components: {
    Row,
    Container
  }
};
</script>

<style lang="scss">
.c-nav__logo {
  width: 40px;
}
</style>
