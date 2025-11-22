<script setup>
</script>

<template>
  <section class="containerProject1">
    <section class="containerItems">
      <imgSlider/>
    </section>
    <section class="containerDescription">
      <section class="headerText">
        <h1>Project Title</h1>
        <h2>Subtitle or Tagline</h2>
      </section>
      <section class="bodyText">
        <p>
          This is a description of the project. It provides details about the objectives, challenges, and outcomes of the project.
        </p>
      </section>
    </section>
  </section>
  <section class="containerProject2">
    <section class="containerDescription">
      <section class="headerText">
        <h1>Project Title</h1>
        <h2>Subtitle or Tagline</h2>
      </section>
      <section class="bodyText">
        <p>
          This is a description of the project. It provides details about the objectives, challenges, and outcomes of the project.
        </p>
      </section>
    </section>
    <section class="containerItems">
      <imgSlider/>
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
    height: 563px;
    display: flex;
    flex-direction: row;
    margin-bottom: 0; /* space between the two sections */


    .containerItems{
      border: 1px red solid;
      width: 1000px;
    }
  }
  section.containerProject2 {
    border: 1px orange solid;
    height: 563px;
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
    border:rgb(0, 0, 0) solid 10px;
    width: 70vw;
    padding-left: 30px;
    font-family: sans-serif;

    .headerText{
      border: 1px green solid;
      h1{
        font-size: 48px;
        margin: 0;
      }
      h2{
        font-size: 24px;
        margin: 0;
      }

    }
    .bodyText{
      border: 1px purple solid;
      font-size: 18px;
      margin-top: 20px;
    }
  }
</style>
