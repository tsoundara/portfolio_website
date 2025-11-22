<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { defineComponent } from 'vue'
import '@splidejs/vue-splide/css';

export default defineComponent( {
  components: {
    Splide,
    SplideSlide,
  },
} );
</script>


<template>
  <Splide :options="{ rewind: true }" aria-label="Self Logo Design">
    <SplideSlide>
      <img src="@/assets/WebPhoto1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/WebPhoto2.jpg" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/WebPhoto3.jpg" alt="Sample 3">
    </SplideSlide>
  </Splide>
</template>

<style>
</style>
