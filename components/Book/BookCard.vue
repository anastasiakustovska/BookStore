<template>
  <div class="book--card  card mb-2 border-primary">
    <div class="background" v-if="image">
      <img :src="image" alt="">
    </div>
    <div class=" text-white d-flex flex-column justify-content-center">
    </div>
  </div>
</template>

<script>
export default {
  name: "BookCard",
  props: {
    title: String,
    subtitle: String,
    isbn13: String,
    image: String,
  },
  computed: {
    shortTitle() {
      if (this.title.length <= 20) {
        return this.title;
      }
      return this.title.slice(0, 20) + '...';
    },
  }
}
</script>

<style scoped lang="scss">

.book--card {
  position: relative;
  height: 250px;
  background-repeat: no-repeat !important;
  background-size: cover !important;
}

.background {
  position: absolute;
}

.image {
  display: block;
  width: 100%;
  height: auto;
}
.heading-img:hover .overlay {
  opacity: 1;
}
.overlay {
  position: absolute;
  bottom: 0;
  background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #f1f1f1;
  width: 100%;
  transition: .5s ease;
  opacity:0;
  color: white;
  font-size: 20px;
  text-align: center;
}
</style>
