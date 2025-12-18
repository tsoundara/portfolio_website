<script setup>
import { computed } from 'vue';
// Reusing the new dynamic slider component
import ImageSlider from '@/components/imgSlider.vue';
// Import your project data
import projectsData from '@/data/portfolio.json';

// 1. Define props, expecting 'id' from the router
const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  }
});

// 2. Computed property to find the single matching project
const project = computed(() => {
  // Ensure the prop ID is treated as a number for matching
  const projectId = parseInt(props.id);
  return projectsData.find(p => p.id === projectId);
});

// 3. Handle case where project is not found
if (!project.value) {
    console.error(`Project with ID ${props.id} not found.`);
    // You could redirect to a 404 page or the project list here
}
</script>

<template>
  <div v-if="project" class="project-details-container">
    <header class="project-header">
      <h1>{{ project.title }}</h1>
      <h2>{{ project.subtitle }}</h2>
    </header>

    <section class="slider-area">
      <ImageSlider :image-paths="project.images" :slider-label="project.title" />
    </section>

    <section class="description-area">
      <h3>Project Details</h3>
      <p>{{ project.description }}</p>
      </section>
  </div>
  <div v-else class="project-not-found">
    <h1>404: Project Not Found</h1>
    <p>The project you are looking for does not exist.</p>
  </div>
</template>

<style scoped>
.project-details-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.project-header {
  text-align: center;
  margin-bottom: 40px;
}

.project-header h1 {
  font-size: 3em;
  color: #333;
}

.project-header h2 {
  font-size: 1.5em;
  color: #666;
}

.slider-area {
  margin-bottom: 40px;
}

.description-area {
  padding: 20px;
  border-top: 1px solid #ccc;
}

.description-area p {
  line-height: 1.6;
}
</style>
