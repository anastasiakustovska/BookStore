<template>
  <div>
    <ParallaxSlider :background-url="'https://cdn.mos.cms.futurecdn.net/AT9Bcvo94cTMGmESvL4JCK.jpg'" />
  </div>
</template>

<script>

import { mapMutations } from 'vuex';
import ParallaxSlider from "~/components/Slider/ParallaxSlider";

export default {
  components: {ParallaxSlider},
  layout: 'index',
  name: 'IndexPage',


  computed: {
  },

  methods: {
    ...mapMutations({}),
  }
}
</script>
