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

// Default options for your slider (can be customized)
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
/* You may need more specific styles here to size the slider,
   but these basic styles ensure the image fills the slide */
.slider-image {
  width: 100%;
  height: auto; /* Or set a fixed height and use object-fit: cover */
  max-height: 60vh;
  object-fit: contain; /* Use contain to prevent cropping */
}
</style>
