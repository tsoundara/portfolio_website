<script setup>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css';
import { resolveAsset } from '@/utils/assetResolver';

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

const getImageUrl = (imagePath) => resolveAsset(imagePath);

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
