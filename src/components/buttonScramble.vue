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
        text: "Graphic Designer", // The text it will scramble *into*
        chars: "upperAndLowerCase", // Only use lowercase letters for the scramble effect
        speed: 1, // Slower speed
        revealDelay: 0.5
      },
      duration: 3, // Total duration of the animation
      ease: "power2.inOut"
    });
    gsap.to(title2.value, {
      scrambleText: {
        text: "AAAAAAAAAAAAA", // The text it will scramble *into*
        chars: "upperAndLowerCase", // Only use lowercase letters for the scramble effect
        speed: 0.5, // Slower speed
        revealDelay: 0.5
      },
      duration: 3, // Total duration of the animation
      ease: "power2.inOut"
    });
    gsap.to(title3.value, {
      scrambleText: {
        text: "OOOOOOOOOO", // The text it will scramble *into*
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
header {
  height: 60vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}


.titles {
  font-family: "Stack Sans Text", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  color: rgb(255, 225, 168);
  height: auto;
  width: 70%;
  align-content: center;
  flex-direction: column;
  display: flex;
  gap: 5px;
  font-size: 20px;
  text-align: center;
}


.scrambledText {
  display: flex;
  color: rgb(255, 255, 255);
  justify-content: center;
  font-weight: bold;
  font-family: "Stack Sans Notch", sans-serif;
  font-optical-sizing: auto;
  font-weight: 700;
  font-size: 10vw;
}

/* Desktop/Tablet Styles */
@media (min-width: 768px) {
  header {
    height: 85vh;
  }
  .titles {
    height: 20%;
    width: 31%;
    gap: 10px;
    font-size: 30px;
    text-align: left;
  }
  .scrambledText {
    font-size: 100px;
  }
}
</style>
