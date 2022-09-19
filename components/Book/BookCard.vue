<template>
  <b-card
    :key="isbn13"
    :img-src="image"
    :img-alt="title"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 border-primary"
  >
    <NuxtLink :to="`/books/${isbn13}`">
      <div class="card-title" :title="title">{{ shortTitle }}</div>
    </NuxtLink>
    <NuxtLink :to="`/books/${isbn13}`">
      <b-button variant="primary"><font-awesome-icon :icon="['fas', 'fish-fins']" /></b-button>
    </NuxtLink>
  </b-card>
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
      const length = this.title.length;

      return this.title.slice(0, 20)+'...';
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  &-title {
    font-size: 20px;
  }
}
</style>
