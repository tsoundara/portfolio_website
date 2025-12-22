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

  // 1. Replace the Vue alias (@/) with nothing:
  //    e.g., @/assets/LogoProject/Pro_2_Pg1.jpg -> assets/LogoProject/Pro_2_Pg1.jpg
  const relativePathFromSrc = imagePath.replace('@/', '');

  // 2. Prepend the site's absolute base path (e.g., /repository-name/)
  //    set in vite.config.js to the path.
  //    FINAL PATH: /repository-name/assets/LogoProject/Pro_2_Pg1.jpg
  const finalPath = import.meta.env.BASE_URL + relativePathFromSrc;

  return finalPath;
};

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
