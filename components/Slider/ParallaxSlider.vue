<template>
  <swiper class="swiper" :options="swiperOption">
    <div class="parallax-bg" :style="{backgroundImage: `url(${backgroundUrl})`}" slot="parallax-bg" data-swiper-parallax="-23%"></div>
    <swiper-slide :key="$index" v-for="(slide, $index) in slides">
      <div class="title" data-swiper-parallax="-100">{{ slide.title }}</div>
      <div class="subtitle" data-swiper-parallax="-240">{{ slide.subtitle}}</div>
      <div class="text" data-swiper-parallax="-360">
        <p>{{ slide.text }}</p>
      </div>
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

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
  data() {
    return {
      swiperOption: {
        speed: 600,
        parallax: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }},
}
</script>

<style lang="scss" scoped>
.parallax-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 130%;
  height: 100%;
  background-size: cover;
  background-position: left;
}
.swiper {
  width: 100%;
  height: 380px;
  .swiper-slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: black;
    box-sizing: border-box;
    padding: 0 80px;
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
