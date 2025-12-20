<script setup>
</script>

<template>
  <div class="contact-container">
    <header class="contact-header">
      <h1>Let's Connect.</h1>
      <h2>I'm currently available for freelance projects and full-time opportunities.</h2>
    </header>

    <section class="contact-methods">
      <div class="contact-item primary-contact">
        <img src="../assets/SVG/email.svg" alt="Email Icon" class="custom-icon" />
        <a href="mailto:tommysoundara9@gmail.com" class="email-link">
          tommysoundara9@gmail.com
        </a>
      </div>

      <div class="contact-item social-links">
        <h3>Connect with me</h3>
        <div class="links-grid">
          <a href="https://www.linkedin.com/in/tommysoundara" target="_blank" rel="noopener noreferrer" class="link-with-icon">
            <img src="../assets/SVG/linkedin-svgrepo-com.svg" alt="LinkedIn Icon" class="custom-icon" />
            <span>LinkedIn</span>
          </a>
          <a href="https://github.com/tsoundara" target="_blank" rel="noopener noreferrer" class="link-with-icon">
            <img src="../assets/SVG/github.svg" alt="GitHub Icon" class="custom-icon" />
            <span>Github</span>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.contact-container {
  max-width: 900px;
  margin: 0 auto;
  padding: 80px 20px;
  text-align: center;
}

.contact-header {
  margin-bottom: 60px;
}

.contact-header h1 {
  font-size: 4em;
  color: #333;
  margin-bottom: 10px;
}

.contact-header h2 {
  font-size: 1.5em;
  color: #666;
  font-weight: 300;
}

.contact-methods {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.contact-item h3 {
  font-size: 1.5em;
  margin-bottom: 15px;
  color: #444;
  border-bottom: 2px solid darkseagreen;
  display: inline-block;
  padding-bottom: 5px;
}


.email-link {
  font-size: 2em;
  font-weight: bold;
  color: darkseagreen; /* Highlight color */
  text-decoration: none;
  transition: color 0.3s ease;
}

.email-link:hover {
  color: #333;
}


.links-grid {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 15px;
}

.links-grid a {
  font-size: 1.2em;
  color: #666;
  text-decoration: none;
  padding: 10px 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.links-grid a:hover {
  background-color: darkseagreen;
  color: white;
  border-color: darkseagreen;
}

.link-with-icon {
  display: flex;
  align-items: center;
  gap: 8px;
}

/* Styling for the imported SVG image */
.custom-icon {
  width: 1.2em;         /* Set the size of the icon to match text height */
  height: 1.2em;
}
</style>
