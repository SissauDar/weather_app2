<template>
  <div class="c-cloud">
    <img
      class="c-cloud__img"
      :src="require(`../assets/img/${data.weather[0].main}.png`)"
      alt
    />
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/layout/Section";
import Row from "@/components/layout/Row";
import Container from "@/components/layout/Container";
export default {
  name: "currentWeatherImage",

  components: {
    Row,
    Container
  },

  data() {
    return {
      timerId: 0
    };
  },

  props: {
    data: Object
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
.c-cloud {
  position: relative;
  // height: 100vh;
}
.c-cloud__img {
  position: absolute;
  top: -10%;
  right: -45%;
}
@media (min-width: 768px) {
  .c-cloud__img {
    max-width: 500px;
    position: absolute;
    top: 0;
    right: calc(50% - 250px);
  }
}
</style>
