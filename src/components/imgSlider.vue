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
      <img src="@/assets/LogoProject/Pro_2_Pg1.jpg" alt="Sample 1">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/LogoProject/Pro_2_Pg2.jpg" alt="Sample 2">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/LogoProject/Pro_2_Pg3.jpg" alt="Sample 3">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/LogoProject/Pro_2_Pg4.jpg" alt="Sample 4">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/LogoProject/Pro_2_Pg5.jpg" alt="Sample 5">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/LogoProject/Pro_2_Pg6.jpg" alt="Sample 6">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/LogoProject/Pro_2_Pg7.jpg" alt="Sample 7">
    </SplideSlide>
    <SplideSlide>
      <img src="@/assets/LogoProject/Pro_2_Pg8.jpg" alt="Sample 8">
    </SplideSlide>
    <splideSlide>
      <img src="@/assets/LogoProject/Pro_2_Pg9.jpg" alt="Sample 9">
    </splideSlide>
  </Splide>
</template>

<style>
/* * 1. Control the image container (the slider track/slide)
 * Force the list and slides to take the available height of the parent.
 */
.splide__track,
.splide__list,
.splide__slide {
  /* Inherit the height of the containerProject/containerItems */
  height: 100%;
}

/* * 2. Control the image itself (the <img> tag)
 */
.splide__slide img {
  /* Image should always take up 100% of the slide's width and height */
  width: 100%;
  height: 100%;

  /* 3. The crucial step: 'contain' ensures the whole image is visible,
     resizing it while preserving its aspect ratio. It will be letter-boxed
     if the aspect ratios don't match.
     Use 'cover' if you prefer the image to fill the space and be cropped.
  */
  object-fit: contain;
}
</style>
