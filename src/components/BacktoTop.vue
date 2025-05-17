<template>
  <button
    v-show="visible"
    @click="scrollToTop"
    class="fixed bottom-6 right-6 flex flex-col items-center gap-1 px-3 py-3 rounded-full
           bg-black/10 backdrop-blur-md text-neutral-800 text-xs font-medium
           transition-transform duration-300 hover:scale-105 hover:bg-black/20
           z-50"
    aria-label="Back to top"
  >
    <svg
      class="w-5 h-5 animate-float text-neutral-700"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
    </svg>
    <span>To Top</span>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const visible = ref(false);

const onScroll = () => {
  visible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => window.addEventListener('scroll', onScroll));
onUnmounted(() => window.removeEventListener('scroll', onScroll));
</script>

<style scoped>
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}
.animate-float {
  animation: float 1.5s ease-in-out infinite;
}
</style>
