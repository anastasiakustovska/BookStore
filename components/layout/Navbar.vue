<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="primary">
      <NuxtLink to="/">
        <b-navbar-brand><img src="~assets/img/catfish.png" alt=""></b-navbar-brand>
      </NuxtLink>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <Search @search="onSearch"/>
          <div class="user--controls">
            <NuxtLink :to="`${totalCartItems > 0 ? '/cart' : '/'}`">
              <b-button class="btn-control" variant="primary">
                <font-awesome-icon icon="fa-solid fa-cart-shopping"/>
                <b-badge variant="light">{{ totalCartItems }} <span class="sr-only"></span></b-badge>
              </b-button>
            </NuxtLink>
            <NuxtLink to="/wishlist">
              <b-button class="btn btn-control" variant="primary">
                <font-awesome-icon icon="fa-solid fa-heart"/>
                <b-badge variant="light">{{ totalWishlistItems }}<span class="sr-only"></span></b-badge>
              </b-button>
            </NuxtLink>
          </div>
          <b-nav-item-dropdown right v-if="auth.isAuthorized">
            <template #button-content>
              <em>{{ auth.username }}</em>
            </template>
            <template v-if="auth.isAuthorized">
              <b-dropdown-item @click="onSignOutClick">Sign Out</b-dropdown-item>
            </template>
          </b-nav-item-dropdown>
          <b-nav-item v-else>
            <NuxtLink to="/login" class="nav-link" active-class="active">
              <font-awesome-icon icon="fa-solid fa-user"/>
              Login
            </NuxtLink>
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import {mapGetters,} from "vuex";
import Search from "@/components/Form/Search";

export default {
  name: "Navbar",
  components: {Search},
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
    },
    totalCartItems() {
      return this.countAllCartItems();
    }
  },
  methods: {
    onSearch(searchValue) {
      if (!searchValue || searchValue.length === 0) {
        return;
      }

      this.$router.push('/search?query=' + searchValue);
    },
    onSignOutClick() {
      this
        .$store
        .dispatch('auth/logoutUser')
    },
    ...mapGetters({
      countAllWishlistItems: 'wishList/countAllItems',
      countAllCartItems: 'cart/countAllItems',
    }),
  },
}
</script>

<style scoped lang="scss">

.user--controls {
  display: flex;
  align-items: center;
  margin-left: 25px;

  @media screen and (max-width: 768px) {
    margin-top: 20px;
    margin-left: 0;
    justify-content: center;
  }

}

.nav-link {
  font-size: 20px;
  @media screen and (max-width: 768px) {
    text-align: center;
  }

  svg {
    font-size: 20px;
  }
}

.btn-control {
  height: 40px;

  svg {
    font-size: 20px;
  }
}

.search {
  @media screen and (max-width: 768px) {
    justify-content: center;
    margin: 20px auto auto;
  }
}

.dropdown {
  margin-top: 5px;
}

.navbar-brand {
  img {
    height: 65px;
  }
}
</style>
