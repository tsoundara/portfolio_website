<script setup>
</script>

<template>
  <div class="about-container">
    <h1>About Me</h1>

    <section class="about-content">
      <div class="image-column">
        <img
          src="@/assets/LabelDesign/LabelDesign-Web1.jpg"
          alt="Tommy Soundara - Profile Picture"
          class="profile-image"
        />
      </div>

      <div class="text-column">
        <h2>Graphic & UX Designer</h2>

        <p>
          Hello! My name is Tommy Soundara. Thanks for visting and exploring my work.
        </p>

        <p>
          I specialize in creating clean, effective, and user-friendly interfaces. My background in graphic design allows me to bring a strong visual perspective to my projects, ensuring they are not just functional, but aesthetically pleasing as well.
        </p>

        <p>
          Outside of design, I enjoy reading manga and building gundam models. I believe good design comes from a relaxed and inspired state of mind. Take a look at my projects to see my work!
        </p>
      </div>
    </section>
  </div>
</template>

<style scoped>
.about-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
  text-align: center;
}

h1 {
  font-size: 3.5em;
  margin-bottom: 40px;
  color: #333;
}

.about-content {
  display: flex;
  flex-direction: row; /* Default side-by-side layout */
  gap: 50px;
  align-items: flex-start; /* Align columns at the top */
  text-align: left;
}

/* --- Columns --- */
.image-column {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-column {
  flex: 2;
}


.profile-image {
  width: 100%;
  max-width: 350px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
}

.text-column h2 {
  font-size: 1.8em;
  color: darkseagreen;
  margin-top: 0;
  margin-bottom: 20px;
}

.text-column p {
  font-size: 1.1em;
  line-height: 1.6;
  margin-bottom: 15px;
  color: #444;
}


@media (max-width: 900px) {
  .about-content {
    flex-direction: column;
    gap: 30px;
    align-items: center;
  }

  .profile-image {
    max-width: 80%;
  }

  .text-column {
    flex: none;
    padding: 0 10px;
  }
}
</style>
