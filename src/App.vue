<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
</script>

<template>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
  <RouterView />
</template>

<style scoped>
nav{
  border-bottom: solid slategray 1px;
  align-content: center;
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: space-evenly;
  font-size:90px;
  font-family: Rockwell;
  text-decoration:none
}
</style>
