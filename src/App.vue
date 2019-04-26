<template>
  <div id="app">
    <navbar></navbar>
    <router-view />
  </div>
</template>
<script>
  import Navbar from './components/NavBar/NavBar.vue'

  export default {
    name: 'App',
    components: {
      Navbar
    }
  }
</script>
