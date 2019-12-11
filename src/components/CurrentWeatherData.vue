<template>
  <div class="c-currentWeather">
    <h1>{{ roundTemp }}°</h1>
    <h2>
      {{ data.name }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25.456"
        height="25.456"
        viewBox="0 0 25.456 25.456"
      >
        <path
          id="Path_1"
          data-name="Path 1"
          d="M7.5,0,15,21,7.5,13.5,0,21Z"
          transform="translate(14.849) rotate(45)"
          fill="#fff"
        />
      </svg>
    </h2>
    <h3>Now</h3>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/layout/Section";
import Row from "@/components/layout/Row";
import Container from "@/components/layout/Container";
export default {
  name: "currentWeatherData",

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
    roundTemp: function() {
      return Math.round(this.data.main.temp);
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

<style lang="scss" scoped></style>
