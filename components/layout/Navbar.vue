<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <NuxtLink to="/"> <b-navbar-brand><img src="~assets/img/catfish.png" alt=""></b-navbar-brand></NuxtLink>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" placeholder="Search" v-model="search"></b-form-input>
            <b-button size="sm" class="my-2 my-sm-0" @click="onSearchClick">Search</b-button>
          </b-nav-form>
          <div class="text-center">
            <b-button variant="secondary">
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
              <b-badge variant="light">{{ 0 }} <span class="sr-only"></span></b-badge>
            </b-button>
            <NuxtLink to="/wishlist">
              <b-button class="btn" variant="primary">
                <font-awesome-icon icon="fa-solid fa-heart" />
                <b-badge variant="light">{{ totalWishlistItems }}<span class="sr-only"></span></b-badge>
              </b-button>
            </NuxtLink>
          </div>
          <b-nav-item-dropdown right v-if="auth.isAuthorized">
            <template #button-content>
              <em >{{auth.username}}</em>
            </template>
            <template v-if="auth.isAuthorized">
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </template>
          </b-nav-item-dropdown>
            <b-nav-item v-else>
              <NuxtLink to="/login" class="nav-link" active-class="active">
                <font-awesome-icon icon="fa-solid fa-user" /> Login
              </NuxtLink>
            </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      search: '',
    };
  },
  computed: {
    auth() {
      return this.$store.state.auth;
    },
    totalWishlistItems() {
      return this.countAllWishlistItems();
    }
  },
  methods: {
    onSearchClick() {
      this.$router.push('/search?query=' + this.search);
    },
    ...mapGetters({
      countAllWishlistItems: 'wishList/countAllItems',
    })
  },
}
</script>

<style scoped lang="scss">
.navbar-brand {
  &:hover {
    img {
    }
  }
  img {
    height: 65px;
  }
}
</style>
