<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

// 1. defineProps is now correctly recognized within <script setup>
const props = defineProps({
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
 * FIX: Function to correctly resolve aliased image paths (@/assets/...).
 * This is necessary because Vite does not automatically process strings
 * pulled from JSON inside the <template> src attribute.
 */
const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
  // Assumes ImageSlider.vue is in src/components/ and assets is in src/assets/.
  // It replaces the alias with the necessary relative jump.
  const correctedPath = imagePath.replace('@/', '../');
  return new URL(correctedPath, import.meta.url).href;
};
</script>

<template>
  <Splide :options="{ rewind: true }" :aria-label="props.sliderLabel">
    <SplideSlide v-for="(path, index) in props.imagePaths" :key="index">
      <img :src="getImageUrl(path)" :alt="props.sliderLabel + ' Slide ' + (index + 1)">
    </SplideSlide>
  </Splide>
</template>

<style scoped>
/* Add any custom Splide styling here */
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
