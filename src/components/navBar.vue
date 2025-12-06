
<script setup>
</script>

<template>
  <div class="container">
    <div class="links">
      <router-link :to="{name: 'home'}">Home</router-link> |
      <router-link :to="{name: 'project-page'}">Projects</router-link> |

      <router-link :to="{name: 'about-me'}">About</router-link> |

      <router-link :to="{name: 'contact-me'}">Contact</router-link>
    </div>
  </div>
</template>

<style scoped>
div.container {
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items: center;
  padding-top: 5px;
  padding-bottom: 5px;
  border-bottom:black 1px solid;
  background-color: rgb(226, 109, 92);
}

div.links {
  display: flex;
  flex-direction: row;
  /* Default (Mobile-First) styles */
  gap: 15px; /* Smaller gap for mobile */
  font-size: 20px; /* Smaller font size for mobile */
  font-family: "Stack Sans Text", sans-serif;
  font-weight: bold;


  a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    padding: 5px;
    /* border-radius: 10px; */

    &:hover {
      color: blue;
    }
  }
}

/* Desktop/Tablet Styles */
@media (min-width: 768px) {
  div.links {
    gap: 30px; /* Restore desktop gap */
    font-size: 30px; /* Restore desktop font size */
  }
}
</style>
