<template>
  <div class="c-home" v-if="getCurrentWeather !== null">
    <CurrentWeatherImage :data="getCurrentWeather" />
    <Section class="o-row--lg">
      <container>
        <CurrentWeatherData :data="getCurrentWeather" />
        <ForecastSlider
          :class="{ isOpen: open }"
          class="c-home__slider"
          :data="getCurrentWeatherForecast"
        />
        <svg
          v-on:click="show(open)"
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="16"
          viewBox="0 0 27 16"
        >
          <g id="Menu" transform="translate(-49 -737)">
            <rect
              id="Rectangle_4"
              data-name="Rectangle 4"
              width="27"
              height="2"
              rx="1"
              transform="translate(49 737)"
              fill="#fff"
            />
            <rect
              id="Rectangle_5"
              data-name="Rectangle 5"
              width="27"
              height="2"
              rx="1"
              transform="translate(49 744)"
              fill="#fff"
            />
            <rect
              id="Rectangle_6"
              data-name="Rectangle 6"
              width="19"
              height="2"
              rx="1"
              transform="translate(49 751)"
              fill="#fff"
            />
          </g>
        </svg>
      </container>
    </Section>
  </div>
</template>

<script>
// @ is an alias to /src
import Section from "@/components/layout/Section";
import Row from "@/components/layout/Row";
import Container from "@/components/layout/Container";
import CurrentWeatherData from "@/components/CurrentWeatherData";
import CurrentWeatherImage from "@/components/CurrentWeatherImage";
import ForecastSlider from "@/components/ForecastSlider";
import { log } from "util";
export default {
  name: "home",

  components: {
    Section,
    Container,
    CurrentWeatherData,
    CurrentWeatherImage,
    ForecastSlider
  },

  data() {
    return {
      open: false,
      colors: {
        Clouds: "#00B4E6",
        Sunny: "#10CCFF",
        Rain: "#005DA5"
      }
    };
  },

  props: {},

  // Components are ready to get data.
  // # Action gets started with dispatch.
  created() {
    const payload = { randomId: 0 };
    this.$store.dispatch("getWeather", payload);
  },

  // #2 State gets rendered and is callable with computed function thats calls the store.
  computed: {
    getCurrentWeather: function() {
      return this.$store.getters.currentWeather;
    },
    getCurrentWeatherForecast: function() {
      return this.$store.getters.currentWeatherForecast;
    }
  },

  methods: {
    show: function(open) {
      console.info(open);
      this.open = !open;
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
.c-home__slider {
  will-change: transform;
  transition: max-height 0.3s ease-in-out;
  max-height: 0vh;
}

.c-home__slider.isOpen {
  max-height: 100vh;
}

.c-home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 56px);
  height: -o-calc(100% - 65px); /* opera */
  height: -webkit-calc(100% - 65px); /* google, safari */
  height: -moz-calc(100% - 65px); /* firefox */
}
</style>
