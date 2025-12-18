<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

// 1. Define the props the component expects
defineProps({
  imagePaths: {
    type: Array,
    required: true
  },
  sliderLabel: {
    type: String,
    default: 'Project Images'
  }
});
/**
 * Function to correctly resolve image paths from the assets folder
 * for paths stored as strings in JSON.
 */
const getImageUrl = (imagePath) => {
  // The path must be relative to the public/assets directory,
  // so we remove the Vue alias.
  return new URL(imagePath.replace('@/assets', './assets'), import.meta.url).href;
};
</script>

<template>
  <Splide :options="{ rewind: true }" :aria-label="sliderLabel">
    <SplideSlide v-for="(path, index) in imagePaths" :key="index">
      <img :src="getImageUrl(path)" :alt="sliderLabel + ' Slide ' + (index + 1)">
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
