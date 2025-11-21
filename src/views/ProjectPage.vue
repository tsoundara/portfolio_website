<script setup>
</script>

<template>
  <section class="containerProject1">
    <section class="containerItems">
      <imgSlider/>

    </section>
    <section class="containerDescription">
      <h1>HEllo Test</h1>
    </section>
  </section>

</template>

<script>
import imgSlider from "@/components/imgSlider.vue";
export default {
  name: "projectPage",
  components: {
    imgSlider
  }
};
</script>

<style scoped>
  section.containerProject1 {
    border: 1px orange solid;
    height: 1000px;
    display: flex;
    flex-direction: row;


    .containerItems{
      border: 1px red solid;

      width: 1000px;
    }
  }

  .containerDescription{
    font-size: 40px;
    display: flex;
    flex-direction: column;
    border:blue solid 1px;
  }
</style>
