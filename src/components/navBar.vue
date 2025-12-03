
<script setup>
</script>

<template>
  <div class="container">
    <div class="links">
      <router-link :to="{name: 'home'}">Home</router-link> |
      <router-link :to="{name: 'project-page'}">Projects</router-link> |

      <router-link :to="{name: 'about-me'}">About Me</router-link> |

      <router-link :to="{name: 'contact-me'}">Contact Me</router-link>
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
  border:black 1px solid;
  div.links {
    display: flex;
    flex-direction: row;
    gap: 30px;
    font-size: 30px;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
    /* border: green 1px solid; */

    a {
      color: rgb(255, 255, 255);
      text-decoration: none;
      padding: 5px;
      /* border: red 1px solid; */
      border-radius: 10px;

      &:hover {
        color: blue;

      }
    }

  }

}
</style>
