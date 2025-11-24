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
  /* gap: 10px; */


  .content {

    color: black;

  }

  footer {
    text-align: center;
    color: black;
    border-top:2px dashed black;
    padding: 16px;
  }

  @media (min-width < 500px){
    display:flex;
    flex-direction: column;
  }

}
</style>
