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

    <footer>Made with Vue</footer>
  </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Momo+Trust+Display&family=Stack+Sans+Notch:wght@200..700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Momo+Trust+Display&family=Stack+Sans+Notch:wght@200..700&family=Stack+Sans+Text:wght@200..700&display=swap');
section.container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;


  header {
    background-color: rgba(203, 153, 126, 1);
  }

  .content {
    color: rgba(0, 25, 38, 0.2);
    flex-grow: 1;
  }

  footer {
    text-align: left;
    background-color: rgb(201, 203, 163);
    color: rgba(0, 0, 0, 1);
    padding: 20px;
  }
}
</style>
