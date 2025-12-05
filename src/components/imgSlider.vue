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
</style>
