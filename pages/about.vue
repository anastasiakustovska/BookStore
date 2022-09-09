<template>
  <div>
    ABOUT
    <ParallaxSlider :background-url="'https://cdn.serif.com/affinity/img/photo/home/0121/og-photo-200120210858.jpg'"/>
  </div>
</template>

<script>
import ParallaxSlider from "~/components/Slider/ParallaxSlider";

export default {
  components: {ParallaxSlider},
  layout: 'index',
  name: "About"
}
</script>

<style scoped>

</style>
