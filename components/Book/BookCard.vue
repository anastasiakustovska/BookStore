<template>
  <b-card
    :key="isbn13"
    :img-src="image"
    :img-alt="title"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 border-primary"
    :style="{width: width}"
  >
    <b-badge variant="primary" :class="{'badge-danger': isOutOfStock}">{{ isOutOfStock ? 'Out of stock' : price }}</b-badge>
    <NuxtLink :to="`/books/${isbn13}`">
      <div class="card-title" :title="title">{{ shortTitle }}</div>
    </NuxtLink>
    <NuxtLink :to="`/books/${isbn13}`">
      <b-button variant="primary" class="w-100">
        See more
      </b-button>
    </NuxtLink>
  </b-card>
</template>

<script>
import {priceToNumber} from "@/utils/functions/price";

export default {
  name: "BookCard",
  props: {
    title: String,
    subtitle: String,
    isbn13: String,
    image: String,
    width: String,
    price: String,
  },
  computed: {
    shortTitle() {
      return this.title.slice(0, 20)+'...';
    },
    isOutOfStock() {
      return this.realPrice == 0.00;
    },

    realPrice() {
      if (!this.price) {
        return (0).toFixed(2);
      }

      return priceToNumber(this.price).toFixed(2);
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  max-width: initial;
  width: 200px;

  @media screen and (max-width: 768px){
    width: 100%;
  }

  &-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .badge {
    position: absolute;
    left: 0;
    top: 0;
  }

  &-title {
    font-size: 20px;
  }
}
</style>
