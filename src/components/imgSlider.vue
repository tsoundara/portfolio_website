<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';

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

const getImageUrl = (imagePath) => {
  if (!imagePath) return '';
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
img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
