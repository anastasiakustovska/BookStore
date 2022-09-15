<template>
  <div class="container my-5">
    <div class="row">
      <div class="col-md-5 mx-auto">
        <div id="first">
          <div class="myform form ">
            <div class="logo mb-3">
              <div class="col-md-12 text-center">
                <h1>Login</h1>
              </div>
            </div>
              <div class="form-group">
                <label>Username</label>
                <b-input class="form-control" v-model="username" placeholder="Enter username"/>
              </div>
              <div class="form-group">
                <label>Password</label>
                <b-input type="password" class="form-control" v-model="password" placeholder="Enter Password"/>
              </div>
              <div class="form-group">
                <p class="text-center">By signing up you accept our <a href="#">Terms Of Use</a></p>
              </div>
              <div class="col-md-12 text-center ">
                <button @click="onLoginClick" type="submit" class=" btn btn-block mybtn btn-primary tx-tfm">Login</button>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'vuex';
export default {
  name: "login",
  layout: 'index',

  data() {
    return {
      username: null,
      password: null,
    };
  },

  methods: {
    onLoginClick() {
      const data = {username: this.username, password: this.password};

      this
        .$store
        .dispatch('auth/authorizeUser', data)
        .then(() => {
          this.$router.push('/');
        });
    },
    ...mapActions({}),
  }
}
</script>

<style scoped>

</style>
