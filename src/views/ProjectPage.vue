<script setup>
import projectsData from '@/data/portfolio.json';
const projects = projectsData;
const getSliderComponent = (projectId) => {
  // If Project ID is 1, use imgSlider2 (based on your original template)
  if (projectId === 1) {
    return imgSlider2;
  }
  // If Project ID is 2, use imgSlider (based on your original template)
  if (projectId === 2) {
    return imgSlider;
  }
  // Default to imgSlider if ID is unknown
  return imgSlider;
};
</script>

<template>
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

section.containerProject {
  height: auto;
  display: flex;
  flex-direction: column;
  border: 1px black solid;
  margin-bottom: 40px;
  padding: 10px;
}

.containerItems {
  /* Image slider takes full width on mobile, centered */
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
}

.containerDescription {
  width: 100%; /* Description takes full width on mobile */
  padding: 0;
  font-family: sans-serif;
  font-size: 16px; /* Smaller base font size for mobile */
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

/* Text blocks use responsive width and are centered */
.containerDescription .headerText,
.containerDescription .bodyText {
  width: 90%;
  margin: 0 auto;
  padding: 10px 0;

}

.containerDescription .headerText h1 {
  font-size: 32px;
  margin: 0;
}
.containerDescription .headerText h2 {
  font-size: 18px;
  margin: 0;
}
.containerDescription .bodyText {

  font-size: 16px;
  margin-top: 10px;
}

@media (min-width: 768px) {
  section.containerProject {
    /* Restore row layout for larger screens (default: image-left) */
    flex-direction: row;
    /* Restore fixed height, or use a responsive height like 80vh */
    height: 563px;
    margin-bottom: 0;
  }

  /* Projects with "image-right" layout defined in JSON */
  section.containerProject.image-right {
    /* Reverse the order so Description is first, Image is second */
    flex-direction: row-reverse;
  }

  .containerItems {
    /* Restore fixed width for larger screens (or keep it flexible if desired) */
    width: 1000px;
    margin: 0; /* Remove centering margin */
  }

  .containerDescription {
    /* Restore layout widths and padding */
    width: 70vw;
    padding-left: 30px;
    font-size: 40px; /* Restore desktop font size */
    margin-top: 0;
  }

  /* Restore text block styles and alignment */
  .containerDescription .headerText,
  .containerDescription .bodyText {
    width: 80%;
    margin: 0; /* Remove auto margins */
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
