<template>
  <div>
    <ParallaxSlider :slides="slides"/>
    <div class="container">
      <h1 class="my-5 text-center text-primary text-uppercase">Our Books</h1>
      <div class="row my-2 justify-content-center">
          <BookCard
            v-for="book in newBooks"
            :title="book.title"
            :subtitle="book.subtitle"
            :isbn13="book.isbn13"
            :image="book.image"
            :price="book.price"
            :key="book.isbn13"
          />
      </div>
    </div>
    <div class="features row gap-0 border-primary justify-content-center">
      <div class="col-md-4 col-sm-12 text-center">
        <font-awesome-icon icon="fa-solid fa-book"/>
        <br>
        Bargain books up to 90% off
      </div>
      <div class="col-md-4 col-sm-12 text-center">
        <font-awesome-icon icon="fa-solid fa-truck"/>
        <br>
        Free shipping on orders $35+
      </div>
      <div class="col-md-4 col-sm-12 text-center">
        <font-awesome-icon icon="fa-solid fa-shield-halved"/>
        <br>
        Cover to Cover Guarantee
      </div>
    </div>
  </div>
</template>

<script>

import {mapMutations, mapActions} from 'vuex';
import ParallaxSlider from "~/components/Slider/ParallaxSlider";
import BookCard from "@/components/Book/BookCard";

export default {
  components: {BookCard, ParallaxSlider},
  layout: 'fullscreen',
  name: 'IndexPage',

  mounted() {
    this.$store.dispatch('newBooks/fetchNewBooks');
  },

  data() {
    return {
      slides: [
        {
          backgroundFile: "slide1.jpeg",
          subtitle: '”The more that you read, the more things you will know. The more that you learn, the more places you’ll go.” ―Dr. Seuss',
        },
        {
          backgroundFile: 'slide3.jpeg',
          subtitle: '“A reader lives a thousand lives before he dies, said Jojen. The man who never reads lives only one.” – George R.R. Martin',
        },
        {
          backgroundFile: "slide2.jpeg",
          subtitle: '”That’s the thing about books. They let you travel without moving your feet.” – Jhumpa Lahiri',
        },
      ]
    };
  },

  computed: {
    newBooks() {
      return this.$store.state.newBooks.books;
    }
  },

  methods: {
    ...mapMutations({}),
    ...mapActions({}),
  }
}
</script>

<style lang="scss" scoped>
.row {
  gap: 30px;
}

.gap-0 {
  gap: 0;
}

.features {
  margin: auto;
  max-width: 100%;
  padding: 25px 0;
  background: #e19658;
  color: #6c2c02;

  @media screen and (max-width: 768px) {
    gap: 30px;
  }

  svg {
    font-size: 40px;
  }
}
</style>
