<template>
  <section class="o-section o-row">
    <slot />
  </section>
</template>

<script>
export default {
  name: "app",

  components: {}
};
</script>

<style lang="scss" scoped>
@import "@/assets/style/objects/section";
@import "@/assets/style/objects/row";
</style>