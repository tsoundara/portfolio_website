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
@import url('https://fonts.googleapis.com/css2?family=Momo+Trust+Display&family=Stack+Sans+Notch:wght@200..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Momo+Trust+Display&family=Stack+Sans+Notch:wght@200..700&family=Stack+Sans+Text:wght@200..700&display=swap');
section.container {
  display: flex;
  flex-direction: column;
  /* Use min-height to ensure it covers the screen*/
  min-height: 100vh;
  height: auto;
  width: 100%; /* Ensure it uses full width */

  header {
    background-color: rgba(203, 153, 126, 1);
  }

  .content {
    color: rgba(0, 25, 38, 0.2);
    /* Allow the content section to take up all remaining space */
    flex-grow: 1;
  }

  footer {
    text-align: center;
    background-color: rgb(201, 203, 163);
    color: rgba(0, 0, 0, 1);
    /* Use responsive padding (e.g., 5vw) or a smaller fixed padding for mobile */
    padding: 20px;
  }
}
</style>
