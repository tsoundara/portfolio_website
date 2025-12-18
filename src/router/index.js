import { createRouter, createWebHistory } from 'vue-router'
import Homepage from '../views/HomePage.vue'
import AboutMe from '../views/AboutView.vue'
import ContactMe from '../views/ContactMe.vue'
import ProjectPage from '../views/ProjectPage.vue'
import ProjectDetails from '@/views/ProjectDetails.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Homepage,
    },
    {
      path:"/project-page",
      name: 'project-page',
      component: ProjectPage,
    },
    {
      path: '/about-me',
      name: 'about-me',
      component: AboutMe,
    },
    {
      path: '/contact-me',
      name: 'contact-me',
      component: ContactMe,
    },
    {
      path: "/projects/:id",
      name: 'project-details',
      component: ProjectDetails,
      props: true
    },
  ]
})

export default router
