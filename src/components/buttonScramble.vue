<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
// Make sure you have the ScrambleTextPlugin file in your project directory
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

// Register the plugin with GSAP
gsap.registerPlugin(ScrambleTextPlugin);

const scramble = ref(null);
const scramble2 = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    // Target the specific header element referenced by mainHeader
    gsap.to(scramble.value, {
      scrambleText: {
        text: "Hi, I'm Tommy 	&#128512;", // The text it will scramble *into*
        chars: "upperAndLowerCase", // Only use lowercase letters for the scramble effect
        speed: 0.5, // Slower speed
        revealDelay: 0.5
      },
      duration: 3, // Total duration of the animation
      ease: "power2.inOut"
    });
    gsap.to(scramble2.value, {
      scrambleText: {
        text: "A Graphic Designer", // The text it will scramble *into*
        chars: "upperAndLowerCase", // Only use lowercase letters for the scramble effect
        speed: 0.5, // Slower speed
        revealDelay: 0.5
      },
      duration: 3, // Total duration of the animation
      ease: "power2.inOut"
    });
  });
});

onUnmounted(() => {
  // Clean up the GSAP context when the component is removed
  ctx.revert();
});
</script>

<template>
  <header>
    <section ref="scramble" class="scrambledText"></section>
    <section ref="scramble2" class="scrambledText"></section>
    <div>
      <router-link :to="{name: 'home'}" ref="homeLink" class="scrambled-home2">Home</router-link>
    </div>

  </header>
</template>

<style scoped>
/* Optional CSS to prevent the original text from flashing before animation */
.scrambledText {
  display: flex;
  color: green;
  justify-content: center;
  font-size: 100px;
  /* visibility: hidden; */
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* Monospace fonts often look good with scramble effects */
}
.scrambled-home2 {
  display: flex;
  justify-content: center;

  /* visibility: hidden; */
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif; /* Monospace fonts often look good with scramble effects */
}
</style>
