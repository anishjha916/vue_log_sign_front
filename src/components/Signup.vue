<template>
  <div>
    <h2>Signup</h2>
    <form @submit.prevent="signup">
      <div>
        <label for="email">Email</label>
        <input type="email" v-model="email" required />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" v-model="password"  />
      </div>
      <button type="submit">Signup</button>
    </form>
  </div>
</template>

<script>
import AuthService from '../services/AuthService';

export default {
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async signup() {
      if (!this.password || !this.email) {
        alert('Please fill in all fields.');
        return;
      }
     
      try {
        await AuthService.register({ email: this.email, password: this.password });
        this.$router.push('/login');
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
