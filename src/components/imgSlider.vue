<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

const props = defineProps({
  // The prop name is correctly defined as 'imagePaths'
  imagePaths: {
    type: Array,
    required: true
  },
  sliderLabel: {
    type: String,
    default: 'Project Images'
  }
});

// **REVERTED FIX FOR LOCAL DEVELOPMENT (npm run dev)**
const getImageUrl = (imagePath) => {
  if (!imagePath) return '';

  // 1. Replace the Vue alias (@/) with a relative path (e.g., '../assets/...')
  // This helps Vite find the file relative to the component location.
  const localPath = imagePath.replace('@/', '../');

  // 2. Use Vite's standard method for resolving dynamic asset URLs locally.
  return new URL(localPath, import.meta.url).href;
};

const splideOptions = {
    rewind: true,
    perPage: 1,
    gap: '1rem',
    type: 'loop',
    pagination: true,
    arrows: true,
};
</script>

<template>
  <Splide :options="splideOptions" :aria-label="props.sliderLabel">

    <SplideSlide v-for="(imagePath, index) in props.imagePaths" :key="index">

      <img :src="getImageUrl(imagePath)"
           :alt="`${props.sliderLabel} Image ${index + 1}`"
           class="slider-image" />

    </SplideSlide>
  </Splide>
</template>

<style scoped>
.slider-image {
  width: 100%;
  height: auto;
  max-height: 80vh;
  object-fit: contain;
}
</style>
