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
    background-color: rgb(133, 122, 107);
  }
  footer {
    text-align: center;
    color: black;
    border-top:2px dashed black;
    background-color: darkgray;
    padding: 50px;
  }
}
</style>
