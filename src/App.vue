<template>
  <navbar />
  <router-view />
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/layouts/Navbar.vue';

export default {
  name: 'App',
  components: {
    Navbar,
  },
};
</script>

<style>
@import '@/assets/css/styles.css';
</style>
