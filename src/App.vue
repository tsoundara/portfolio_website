<script setup>
import NavBar from '@/components/navBar.vue'
</script>

<template>
  <section class="container">
    <header>
      <nav-bar/>
    </header>
    <section class="content">
      <router-view></router-view>
    </section>

    <footer>Made by Tommy</footer>
  </section>
</template>

<style scoped>
section.container {
  display: flex;
  background-color: burlywood;
  flex-direction: column;
  /* Use min-height to ensure it covers the screen*/
  min-height: 100vh;
  height: auto;
  width: 100%; /* Ensure it uses full width */

  .content {
    color: black;
    background-color: rgb(133, 122, 107);
    /* Allow the content section to take up all remaining space */
    flex-grow: 1;
  }

  footer {
    text-align: center;
    color: black;
    /* Use responsive padding (e.g., 5vw) or a smaller fixed padding for mobile */
    padding: 20px;
  }
}
</style>
