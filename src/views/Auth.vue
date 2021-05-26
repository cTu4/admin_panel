<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

    <!-- Check that the SDK client is not currently loading before accessing is methods -->
    <div v-if="!$auth.loading">
      <!-- show login when not authenticated -->
      <button v-if="!$auth.isAuthenticated" @click="login">Log in</button>
      <!-- show logout when authenticated -->
      <button v-if="$auth.isAuthenticated" @click="logout">Log out</button>
    </div>
  </div>
</template>
<script>
// .. imports removed for brevity

export default {
  name: "auth",
  components: {
  },
  created(){
    console.log(this.$auth)

    console.log(this.$auth._component.methods.loginWithRedirect)
  },
  methods: {
    // Log the user in
    login() {

      this.$auth._component.methods.loginWithRedirect();
    },
    // Log the user out
    logout() {
      this.$auth.logout({
        returnTo: window.location.origin
      });
    }
  }
};
</script>
