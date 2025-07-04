import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path: '/jobs',
    name: 'jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id',
    name: 'jobDetails',
    component: JobDetails,
    props:true
  },

  // redirects
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  // catchall 404
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
