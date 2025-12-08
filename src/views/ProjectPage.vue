<script setup>
import projectsData from '@/data/portfolio.json';
const projects = projectsData;
const getSliderComponent = (projectId) => {
  // If Project ID is 1, use imgSlider2 component
  if (projectId === 1) {
    return imgSlider2;
  }
  if (projectId === 2) {
    return imgSlider;
  }
  if (projectId === 3) {
    return imgSlider2;
  }
  if (projectId === 4) {
    return imgSlider;
  }
  if (projectId === 5) {
    return imgSlider2;
  }
  // Default to imgSlider if ID is unknown
  return imgSlider;
};
</script>

<!-- <template>
  <section
    v-for="project in projects"
    :key="project.id"
    :class="['containerProject', project.layout]"
  >
    <template v-if="project.layout === 'image-left'">
      <section class="containerItems">
        <component :is="getSliderComponent(project.id)"/>
      </section>
      <section class="containerDescription">
        <section class="headerText">
          <h1>{{ project.title }}</h1>
          <h2>{{ project.subtitle }}</h2>
        </section>
        <section class="bodyText">
          <p>{{ project.description }}</p>
        </section>
      </section>
    </template>

    <template v-else-if="project.layout === 'image-right'">
      <section class="containerDescription">
        <section class="headerText">
          <h1>{{ project.title }}</h1>
          <h2>{{ project.subtitle }}</h2>
        </section>
        <section class="bodyText">
          <p>{{ project.description }}</p>
        </section>
      </section>
      <section class="containerItems">
        <component :is="getSliderComponent(project.id)"/>
      </section>
    </template>
  </section> -->


  <!-- <section  v-for="project in projects" :key="project.id" class="nik-layout" :class="['containerProject', project.layout]">
    <div class="block" :class="{'reverse': project.layout === 'image-right'}">
      <div >
        <img src="@/assets/selfLogoDesign/WebPhoto1.jpg" alt="Sample 1">
        <component :is="getSliderComponent(project.id)" class="imgSliderComp"/>
      </div>
      <div>
        <h1 v-text="project.title"/>
        <h2 v-text="project.subtitle"/>
        <p class="bodyText" v-text="project.description"/>
      </div>
    </div>
  </section> -->


<template>
  <section v-for="project in projects" :key="project.id" :class="['containerProject', project.layout]">

    <section class="containerItems">
      <component :is="getSliderComponent(project.id)"/>
    </section>

    <section class="containerDescription">
      <section class="headerText">
        <h1>{{ project.title }}</h1>
        <h2>{{ project.subtitle }}</h2>
        <h3>Role:{{project.role}}</h3>
        <h3>{{project.year}}</h3>
      </section>
      <section class="bodyText">
        <p>{{ project.description }}</p>
      </section>
    </section>
  </section>
</template>

<script>
import imgSlider from "@/components/imgSlider.vue";
import imgSlider2 from '@/components/imgSlider2.vue';
export default {
  name: "ProjectPage",
  components: {
    imgSlider,
    imgSlider2
  }
}
</script>

<style scoped>
/* section.nik-layout {
border: 10px solid blue;
display: flex;
flex-direction: column;

  div.block {
    display: flex;

    &.reverse {
      flex-direction: row-reverse;
    }

    div {
      flex-basis: 50%;
      border: 5px solid red;

      .imgSliderComp {
        width: 1000px;
      }
    }
  }
} */



section.containerProject {
  height: auto;
  display: flex;
  flex-direction: column;
  /* border: 1px black solid; */
  margin-bottom: 40px;
  padding: 10px;
}

.containerItems {
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.containerDescription {
  width: 100%;
  padding: 0;
  font-family: sans-serif;
  font-size: 16px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  background-color: white;
}

.containerDescription .headerText,
.containerDescription .bodyText {
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;

}

.containerDescription .headerText h1 {
  font-size: 32px;
  color: rgb(226, 109, 92);
  margin: 0;
}
.containerDescription .headerText h2 {
  font-size: 18px;
  color: rgb(201, 203, 163);
  margin: 0;
}
.containerDescription .headerText h3 {
  font-size: 16px;
  color: rgb(100, 100, 100);
  margin: 0;
}
.containerDescription .bodyText {

  font-size: 13px;
  color: black;
  margin-top: 10px;
}

@media (min-width: 768px) {
  section.containerProject {
    flex-direction: row;
    height: 563px;
    margin-bottom: 0;
  }

  section.containerProject.image-right {
    /* Reverse the order so Description is first, Image is second */
    flex-direction: row-reverse;
  }

  .containerItems {
    width: 1000px;
    margin: 0; /* Remove centering margin */
  }

  .containerDescription {
    /* Restore layout widths and padding */
    width: 70vw;
    padding-left: 30px;
    font-size: 40px; /* desktop font size */
    margin-top: 0;
  }

  /* Restore text block styles and alignment */
  .containerDescription .headerText,
  .containerDescription .bodyText {
    width: 80%;
    margin: 0;
  }

  .containerDescription .headerText h1 {
    font-size: 48px;
  }
  .containerDescription .headerText h2 {
    font-size: 24px;
  }
  .containerDescription .bodyText {
    font-size: 18px;
    margin-top: 20px;
  }
}
</style>
