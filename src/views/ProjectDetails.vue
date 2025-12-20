<script setup>
import { computed } from 'vue';
import ImageSlider from '@/components/imgSlider.vue';
import projectsData from '@/data/portfolio.json';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
});

const project = computed(() => {
  const projectId = parseInt(props.id);
  return projectsData.find(p => p.id === projectId);
});
</script>

<template>
  <div v-if="project" class="project-details-container">
    <header class="project-header">
      <h1>{{ project.title }}</h1>
      <h2>{{ project.subtitle }}</h2>
    </header>

    <section class="meta-data">
        <div class="meta-item">
            <strong>Role:</strong> <span>{{ project.role }}</span>
        </div>
        <div class="meta-item">
            <strong>Year:</strong> <span>{{ project.year }}</span>
        </div>
    </section>

    <section class="slider-area">
      <ImageSlider :image-paths="project.images" :slider-label="project.title" />
    </section>

    <section class="description-area">
      <h3>Project Overview</h3>
      <p>{{ project.description }}</p>
    </section>
  </div>
  <div v-else class="project-not-found">
    <h1>Project Not Found</h1>
    <p>Please check the URL or return to the project list.</p>
  </div>
</template>

<style scoped>
@import url("https://use.typekit.net/qyy6svf.css");
.project-details-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.project-header {
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #999999;
  font-family: "new-astro", sans-serif;
  font-weight: 700;
}
.project-header h1 {
  font-size: 3em;
  margin: 0;
  color:black
}
.project-header h2 {
  font-size: 1.5em;
  color: #646464;
  margin-top: 5px;
}

.meta-data {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 30px;
    font-size: 1.2em;
}

.meta-item strong {
    color: #202020;
    margin-right: 5px;
}

.slider-area {
  margin-bottom: 40px;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.description-area {
  padding: 20px;
  color: #202020;
}
.description-area h3 {
    font-size: 2em;
    border-bottom: 2px solid darkseagreen;
    padding-bottom: 5px;
    margin-bottom: 20px;
}

.description-area p {
  line-height: 1.6;
  font-size: 1.1em;
}
</style>
