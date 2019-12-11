<template>
  <div class="foreCastSlider" v-if="data != null">
    <div class="c-card" v-for="(item, index) in data.list" v-bind:key="index">
      <p class="c-card__counter u-mb-clear">{{ addLeadingZero(index) }}</p>
      <img
        class="c-card__img"
        :src="`/img/icons/${item.weather[0].icon}.svg`"
        alt
      />
      <p class="c-card__degrees u-mb-clear">
        {{ kelvinToCelcius(item.main.temp) }}°
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/layout/Section";
import Row from "@/components/layout/Row";
import Container from "@/components/layout/Container";
export default {
  name: "foreCastSlider",

  components: {
    Row,
    Container
  },

  data() {
    return {};
  },

  props: {
    data: Object
  },

  // Components are ready to get data.
  // # Action gets started with dispatch.
  created() {},

  // #2 State gets rendered and is callable with computed function thats calls the store.
  computed: {},

  methods: {
    kelvinToCelcius: function(kelvin) {
      return Math.round(kelvin - 273.15);
    },
    addLeadingZero: function(number) {
      return ("0" + number).slice(-2);
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
.c-card {
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.c-card__img {
  width: 30px;
}
.foreCastSlider {
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
