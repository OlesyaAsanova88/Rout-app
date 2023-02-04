<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Catalog from './components/Catalog.vue'
</script>

<template>
   <div class="wrapper">

    <header>
      <Catalog />
      
        <nav class="nav">
            <RouterLink to="/" active-class="active" class="link-rout mx-3">Главная</RouterLink>
            <RouterLink to="/authors" active-class="active" class="link-rout mx-3">Список авторов</RouterLink>
            <RouterLink to="/books" active-class="active" class="link-rout mx-3">Список Книг</RouterLink>
            <RouterLink to="/form-auth" active-class="active" class="link-rout mx-3">Добавить автора</RouterLink>
            <RouterLink to="/form-books" active-class="active" class="link-rout mx-3">Добавить книгу</RouterLink>
         </nav>

      
    </header>
    
   </div>
 
 <RouterView />
</template>

<style scoped>

.link-rout{
 padding-left: 60px;
  color: rgb(99, 218, 218);
  font-size: 20px;
  font-weight: bold;
}
.active {
  font-weight: 700;
  color: blueviolet;
}
</style>
