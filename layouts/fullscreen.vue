<template>
  <div>
    <Navbar />
      <Nuxt />
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default {
  components: {Footer, Navbar}
}
</script>

<style scoped>

</style>
