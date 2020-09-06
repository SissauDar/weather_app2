<template>
  <div class="error">
    <row>
      <container>
        <h1>je bent op de fake error page ✔</h1>
      </container>
    </row>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/layout/Section";
import Row from "@/components/layout/Row";
import Container from "@/components/layout/Container";
export default {
  name: "error",

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
</style>