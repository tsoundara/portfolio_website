<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { gsap } from 'gsap';
// Make sure you have the ScrambleTextPlugin file in your project directory
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

// Register the plugin with GSAP
gsap.registerPlugin(ScrambleTextPlugin);

const scramble = ref(null);
const title1 = ref(null);
const title2 = ref(null);
const title3 = ref(null);
let ctx;

onMounted(() => {
  ctx = gsap.context(() => {
    // Target the specific header element referenced by mainHeader
    gsap.to(scramble.value, {
      scrambleText: {
        text: "Tommy Soundara", // The text it will scramble *into*
        chars: "upperAndLowerCase", // Only use lowercase letters for the scramble effect
        speed: 0.5, // Slower speed
        revealDelay: 0.5
      },
      duration: 3, // Total duration of the animation
      ease: "power2.inOut"
    });
    gsap.to(title1.value, {
      scrambleText: {
        text: "Graphic & UX/UI Designer", // The text it will scramble *into*
        chars: "upperAndLowerCase", // Only use lowercase letters for the scramble effect
        speed: 1, // Slower speed
        revealDelay: 0.5
      },
      duration: 3, // Total duration of the animation
      ease: "power2.inOut"
    });
    gsap.to(title2.value, {
      scrambleText: {
        text: "Music Enjoyer", // The text it will scramble *into*
        chars: "upperAndLowerCase", // Only use lowercase letters for the scramble effect
        speed: 0.5, // Slower speed
        revealDelay: 0.5
      },
      duration: 3, // Total duration of the animation
      ease: "power2.inOut"
    });
    gsap.to(title3.value, {
      scrambleText: {
        text: "Big Chiller", // The text it will scramble *into*
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
    <section class="titles">
      <section ref="title1" class="scrambledText2"></section>
      <section ref="title2" class="scrambledText2"></section>
      <section ref="title3" class="scrambledText2"></section>
    </section>
  </header>
</template>

<style scoped>
header{
  border: 1px blue solid;
  height: 85vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .titles{
    font-family: "Impact",sans-serif;
    height: 20%;
    width: 31%;
    align-content: center;
    flex-direction: column;
    display: flex;
    gap: 10px;
    font-size: 20px;
  }
}

/* Optional CSS to prevent the original text from flashing before animation */
.scrambledText {
  display: flex;
  color: green;
  justify-content: center;
  font-size: 100px;
  font-weight: bold;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; /* Monospace fonts often look good with scramble effects */
}

</style>
