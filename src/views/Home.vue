<template>
  <div class="home">
    <Section class="o-row--sm">
      <container>
        <div class="c-cloud">
          <img class="c-cloud__img" :src="require(`../assets/img/Clouds.png`)" alt />
        </div>
      </container>
    </Section>

    <Section class="o-row--lg test">
      <container>
        <div class="c-currentWeather">
          <h1>18°</h1>
          <h2>Belfast</h2>
          <h3>Now</h3>
        </div>
      </container>
    </Section>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/layout/Section";
import Row from "@/components/layout/Row";
import Container from "@/components/layout/Container";
export default {
  name: "home",

  components: {
    Section,
    Container
  },

  data() {
    return {
      timerId: 0
    };
  },

  props: {
    msg: String
  },

  // Components are ready to get data.
  // # Action gets started with dispatch.
  created() {},

  // #2 State gets rendered and is callable with computed function thats calls the store.
  computed: {
    getComputedTestFunction: function() {
      return "hey";
    }
  },

  methods: {
    testMethod: function(event) {
      console.info("TestMethod called");
    }
  },

  mounted() {
    // this.timerId = setInterval(() => {
    // }, 1000);
  },

  unmounted() {
    // clearInterval(this.timerId);
  }
};
</script>

<style lang="scss" scoped>
.test {
  position: absolute;
  bottom: 0;
}
.home {
  position: relative;
}
.c-cloud {
  position: relative;
  height: 100vh;
}
.c-cloud__img {
  position: absolute;
  top: -10%;
  right: -45%;
}
</style>