<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide
      class="slide"
      v-for="(slide, $index) in slides"
      :key="$index"
      :class="{'text-dark': !!slide.textDark, 'text-white': !slide.textDark}"
    >
    <div class="background" v-if="slide.backgroundFile">
      <img :src="require(`~/assets/img/${slide.backgroundFile}`)" alt="">
    </div>
      <div class="title">{{ slide.title }}</div>
      <div class="subtitle">{{ slide.subtitle}}</div>
      <div class="text"><p v-html="slide.text"></p></div>
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default {
  name: "ParallaxSlider",
  components: {
    Swiper,
    SwiperSlide
  },
  props: {
    backgroundUrl: String,
    slides: Array,
  },
  methods: {

  },
  computed: {


  },
  data() {
    return {
      swiperOption: {
        effect: 'fade',
        speed: 600,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        infinite: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }},
}
</script>

<style lang="scss" scoped>
.slide {
  background-repeat: no-repeat !important;
  background-size: cover !important;
  position: relative;
  width: 100% !important;

  .background {
    position: absolute;
    img {
      width: 100%;
    }
  }
}

.swiper {
  width: 100%;
  height: 60vh;
  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    box-sizing: border-box;
    background-color: transparent;
    .title {
      margin-bottom: 20px;
      font-size: 40px * 2;
      font-weight: bold;
    }
    .subtitle {
      margin-bottom: 20px;
      font-size: 16px * 2;
    }
    .text {
      max-width: 430px;
      line-height: 1.32;
    }
  }
}
</style>
