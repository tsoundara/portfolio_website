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
      <img src="@/assets/selfLogoDesign/WebPhoto1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/selfLogoDesign/WebPhoto2.jpg" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/selfLogoDesign/WebPhoto3.jpg" alt="Sample 3">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/selfLogoDesign/WebPhoto4.jpg" alt="Sample 4">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/selfLogoDesign/WebPhoto5.jpg" alt="Sample 5">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/selfLogoDesign/WebPhoto6.jpg" alt="Sample 6">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/selfLogoDesign/WebPhoto7.jpg" alt="Sample 7">
    </SplideSlide>
  </Splide>
</template>

<style>
</style>
