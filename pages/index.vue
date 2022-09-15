<template>
  <div>
    <ParallaxSlider :slides="slides" />
    <div class="container">
      <div class="row my-2">
          <div class="col-md-4" v-for="book in newBooks">
            <BookCard
              :title="book.title"
              :subtitle="book.subtitle"
              :isbn13="book.isbn13"
              :image="book.image"
            />
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapMutations, mapActions } from 'vuex';
import ParallaxSlider from "~/components/Slider/ParallaxSlider";
import BookCard from "@/components/Book/BookCard";

export default {
  components: {BookCard, ParallaxSlider},
  layout: 'fullscreen',
  name: 'IndexPage',

  mounted() {
    this.$store.dispatch('newBooks/fetchNewBooks');
  },

  data()    {
    return {
      slides: [
        {
          backgroundFile: "sale.jpg",
        },
        {
          title: 'Titlwss',
          subtitle: 'Subtitle',
          text: '123',
          backgroundFile: 'img.png',
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
