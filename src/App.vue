<template>
  <div id="app">
    <nav>
     <span v-if="dis"> <router-link  to="/login">Login</router-link></span>
     <span v-if="dis"> <router-link to="/signup">Signup</router-link></span>
      <button v-if="currentUser" @click="logout">Logout</button>
    </nav>
    <router-view />
  </div>
</template>

<script>
import AuthService from './services/AuthService';

export default {



  data() {
    return {
      currentUser: AuthService.getCurrentUser(),
    };
  },
  methods: {
    logout() {
      AuthService.logout();
      this.currentUser = null;
      this.$router.push('/login');
    },
  },
   computed: {
    dis() {
      return this.$route.path !== '/home'; // Example condition
    }
  },
  watch: {
    '$route'() {
      this.currentUser = AuthService.getCurrentUser();
    },
  },
};
</script>

<style>
nav {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
}
</style>