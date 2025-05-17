import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Projects from './views/Projects.vue'
import Gallery from './views/Gallery.vue'
import About from './views/About.vue'
import ProjectDetail from './views/projectDetail.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/gallery', component: Gallery },
  { path: '/about', component: About },
  { path: '/projects/:id', component: ProjectDetail }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top
    return { top: 0 }
  }
})

export default router
