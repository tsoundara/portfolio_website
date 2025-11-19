
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
  flex-direction: column;
  gap: 10px;


  .content {
    background-color: white;
    color: black;

  }

  footer {
    text-align: center;
    background-color: gray;
    color: white;
  }

}
</style>
