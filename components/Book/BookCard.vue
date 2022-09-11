<template>
  <b-card
    :key="isbn13"
    :title="title"
    :img-src="image"
    :img-alt="title"
    img-top
    tag="article"
    style="max-width: 20rem;"
    class="mb-2 border-primary"
  >
    <b-card-text v-if="subtitle">
      {{subtitle}}
    </b-card-text>

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
  }
}
</script>

<style scoped>

</style>
