<template>
  <footer class="text-center text-lg-start text-brown bg-primary pt-2">
    <section class="">
      <div class="container text-center text-md-start mt-5">
        <!-- Grid row -->
        <div class="row mt-3">
          <!-- Grid column -->
          <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
            <!-- Content -->
            <h6 class="text-uppercase fw-bold mb-4">
              <i class="fas fa-gem me-3"></i>READ FOX
            </h6>
            <p>
              Books for all of you who love books, appreciate them and search for something interesting.
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <!-- Grid column -->
          <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">
              Useful links
            </h6>
            <p>
              <NuxtLink to="/about" class="text-brown">
                About Us
              </NuxtLink>
            </p>
            <p>
              <NuxtLink to="/terms-of-use" class="text-brown">
                Terms of use
              </NuxtLink>
            </p>
          </div>
          <!-- Grid column -->

          <!-- Grid column -->
          <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact Us</h6>
            <p>
              <i class="fas fa-envelope me-3"></i>
              ukrainebooks@.com
            </p>
            <p><i class="fas fa-phone me-3"></i> + 380 9974 84 302</p>
          </div>
          <!-- Grid column -->
        </div>
        <!-- Grid row -->
      </div>
    </section>
    <!-- Section: Links  -->

    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05);">
      © 2022 Copyright:
      <NuxtLink to="/" class="text-brown">
        <a class="text-reset fw-bold">ItBooks.com</a>
      </NuxtLink>
    </div>
    <!-- Copyright -->
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>
