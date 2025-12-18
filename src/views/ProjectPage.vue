<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router'; // 1. Import router for navigation
import projectsData from '@/data/portfolio.json';

// --- GSAP IMPORTS (Keep for card reveal) ---
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// ------------------------------------------

const router = useRouter();
const projects = projectsData;
const cardRefs = ref([]);
let ctx;

// Function to handle navigation when a card is clicked
const goToDetails = (projectId) => {
    router.push({ name: 'project-details', params: { id: projectId } });
};

// GSAP setup for card reveal
onMounted(() => {
    ctx = gsap.context(() => {
        cardRefs.value.forEach((card, index) => {
            gsap.from(card, {
                opacity: 0,
                y: 50, // Slight slide-up effect
                duration: 0.8,
                delay: index * 0.1, // Staggered reveal
                ease: "power2.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                    toggleActions: "play none none none",
                }
            });
        });
    });
});

onUnmounted(() => {
    if (ctx) {
        ctx.revert();
    }
});
</script>

<template>
  <div class="project-cards-area">
    <h1>Projects</h1>

    <section class="card-grid">
      <div
        v-for="(project, index) in projects"
        :key="project.id"
        class="project-card"
        @click="goToDetails(project.id)"
        :ref="el => { if (el) cardRefs[index] = el }"
      >
        <img
          :src="project.images[0]"
          :alt="project.title + ' Thumbnail'"
          class="card-image"
        >

        <div class="card-overlay">
          <h2>{{ project.title }}</h2>
          <p class="subtitle">{{ project.subtitle }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.project-cards-area {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

h1 {
  margin-bottom: 40px;
  font-size: 3em;
}

.card-grid {
  display: grid;
  /* Keep this responsive grid structure */
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-card {
  /* Set position relative for absolute children */
  position: relative;
  height: 300px; /* Give cards a fixed height for consistent grid look */
  overflow: hidden; /* Hide parts of the image that go beyond the container */
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
}

.card-image {
  width: 100%;
  height: 100%;
  /* CRITICAL: Ensures the image covers the card without distortion */
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .card-image {
  /* Subtle zoom on hover */
  transform: scale(1.05);
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 15px;
  /* Semi-transparent dark background for text readability */
  background: rgba(0, 0, 0, 0.7);
  color: white;
  text-align: left;
}

.card-overlay h2 {
  font-size: 1.5em;
  margin: 0;
  line-height: 1.2;
}

.card-overlay .subtitle {
  font-size: 1em;
  font-style: italic;
  margin-top: 5px;
  color: #ccc;
}
</style>
