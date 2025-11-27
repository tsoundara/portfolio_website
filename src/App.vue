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
  background-color: darkseagreen;
  flex-direction: column;
  height: 90vh;

  .content {
    color: black;
    background-color: rgb(219, 174, 105);
  }

  footer {
    text-align: center;
    color: rgb(255, 255, 255);
    border-top:2px dashed black;
    padding: 50px;
  }
}
</style>
