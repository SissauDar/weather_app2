<template>
  <div class="about">
    <Section class="o-row--lg">
      <Container>
        <h1>Soon my friend...</h1>
      </Container>
    </Section>
    <Section class="o-row--lg">
      <Container>
        <h1 class="c-todo">To do.</h1>
      </Container>
    </Section>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/layout/Section";
import Row from "@/components/layout/Row";
import Container from "@/components/layout/Container";
export default {
  name: "about",

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
  computed: {},

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
.c-todo {
  text-align: right;
}
.about {
  // height: calc(100vh - 56px);
  // height: -o-calc(100% - 65px); /* opera */
  // height: -webkit-calc(100% - 65px); /* google, safari */
  // height: -moz-calc(100% - 65px); /* firefox */
}
</style>
