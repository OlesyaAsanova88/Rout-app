import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthorsView from '../views/AuthorsView.vue'
import BooksView from '../views/BooksView.vue'
import FormAuthView from '../views/FormAuthView.vue'
import FormBooksView from '../views/FormBooksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/authors',
      name: 'authors',
      component: AuthorsView
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView 
    },
    {
      path: '/form-auth',
      name: 'form-auth',
      component: FormAuthView 
    },
    {
      path: '/form-books',
      name: 'form-books',
      component: FormBooksView 
    }
  
  ]
})

export default router
