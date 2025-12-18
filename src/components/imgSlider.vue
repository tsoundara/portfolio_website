<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

// 1. Define the props the component expects
defineProps({
  imagePaths: {
    type: Array,
    required: true
  },
  // Optional: allows customization of the Splide label
  sliderLabel: {
    type: String,
    default: 'Project Images'
  }
});
</script>

<template>
  <Splide :options="{ rewind: true }" :aria-label="sliderLabel">
    <SplideSlide v-for="(path, index) in imagePaths" :key="index">
      <img :src="path" :alt="sliderLabel + ' Slide ' + (index + 1)">
    </SplideSlide>
  </Splide>
</template>

<style scoped>
/* Add any custom Splide styling here */
/* Example to make images fill the container */
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
