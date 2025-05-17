<template>
  <div id="app" class="min-h-screen">
   

    
    <Navbar />
    
    <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
    <component :is="Component" />
    </transition>
    </router-view>


    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: { 
    Navbar,
    Footer
   }
}
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: all 0.6s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>