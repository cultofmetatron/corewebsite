<template>
  <div id="app">
    <top-nav />
    <div class="container level">
      <hero>
        <router-view slot="right-side" />
      </hero>
    </div>

  </div>
</template>

<script>
import Hero from './components/Hero';
import Navbar from './components/Navbar';

export default {
  components: {
    'hero': Hero,
    'top-nav': Navbar
  },
  name: 'App'
};
</script>

<style>
</style>
