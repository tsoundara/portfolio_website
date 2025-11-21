<script setup>
import portfolioData from '@/data/portfolio.json'
import HeroContainer from '@/components/portfolio/HeroContainer.vue'

const featuredItems = [portfolioData[0], portfolioData[1], portfolioData[2], portfolioData[3], portfolioData[4], portfolioData[5]]
</script>

<template>
<section class="intro">

</section>
</template>

<style scoped>
section.intro{
  background-color: rgb(32, 30, 30);
  border: black 1px solid;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  .intro-header{
    color: white;
    border: red 1px solid;
    display: flex;
    height:20vh;
    font-family: Rockwell;
    font-weight: bolder;
    font-size: 80px;
    align-items: center;
    text-align: center;
    justify-content: space-around;
  }
  .hero_elements{
    border: blue 1px solid;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    gap: 20px;
    padding-left: 10px;
    padding-right: 10px;
    width: 98vw;
  }
}
</style>
