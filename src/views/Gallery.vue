<!-- <template>
  <section class="gallery">
    <div class="masonry">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        class="masonry-item"
        loading="lazy"
        @click="openFullscreen(img)"
      />
    </div>

   
    <div v-if="fullscreenImg" class="fullscreen-overlay" @click.self="closeFullscreen">
      <img :src="fullscreenImg" class="fullscreen-img" />
      <button class="close-btn" @click="closeFullscreen">×</button>
    </div>

    <BacktoTop />
  </section>
</template>

<script setup>
import BacktoTop from '../components/BacktoTop.vue'
</script>

<script>

export default {
  data() {
    return {
      images: [
        '/public/img/gallery/_DSC0351.jpg',
        '/public/img/gallery/_DSC0816.jpg', 
        '/public/img/gallery/_DSC0856.jpg',
        '/public/img/gallery/_DSC0956.jpg',
        '/public/img/gallery/_DSC1013.jpg',
        '/public/img/gallery/_DSC1062.jpg',
        '/public/img/gallery/_DSC2233.jpg',
        '/public/img/gallery/_DSC9974.jpg',
        '/public/img/gallery/_DSC9981.jpg',
        '/public/img/gallery/_DSC2322.jpg',
        '/public/img/gallery/_DSC2340.jpg',
        '/public/img/gallery/_DSC2355.jpg',
        '/public/img/gallery/_DSC2371.jpg',
        '/public/img/gallery/_DSC2376.jpg',
        '/public/img/gallery/_DSC2394.jpg',
        '/public/img/gallery/_DSC2425.jpg',
        '/public/img/gallery/_DSC2451.jpg',
        '/public/img/gallery/_DSC2459.jpg',
        '/public/img/gallery/_DSC2467.jpg',
        '/public/img/gallery/_DSC2472.jpg',
        '/public/img/gallery/_DSC2501.jpg',
        '/public/img/gallery/_DSC2506.jpg',
        '/public/img/gallery/_DSC2533.jpg',
        '/public/img/gallery/_DSC2558.jpg',
        '/public/img/gallery/bg3.jpg',
        '/public/img/gallery/bg1.jpg',
        '/public/img/gallery/bg4.jpg',
      ],
      fullscreenImg: null
    };
  },
  methods: {
    openFullscreen(src) {
      this.fullscreenImg = src;
    },
    closeFullscreen() {
      this.fullscreenImg = null;
    }
  }
};
</script>

<style scoped>
.gallery {
  padding: 2rem;
  padding-top: 6rem;
}

.masonry {
  column-count: 4;
  column-gap: 1rem;
  margin-top: 5rem;
}

.masonry-item {
  width: 100%;
  margin-bottom: 1rem;
  break-inside: avoid;
  display: block;
  object-fit: contain;
  cursor: zoom-in;
  transition: transform 0.3s ease;
}

/* Fullscreen overlay */
.fullscreen-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.fullscreen-img {
  max-width: 98vw;
  max-height: 98vh;
  object-fit: contain;
}

.close-btn {
  position: absolute;
  top: 2rem;
  right: 2rem;
  background: transparent;
  border: none;
  font-size: 3rem;
  color: white;
  cursor: pointer;
}
</style> -->


<template>
  <section class="pt-24 px-4 sm:px-8">
    <div class="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 mt-12 space-y-4">
      <img
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        class="w-full block break-inside-avoid cursor-zoom-in transition-transform duration-300 hover:scale-105"
        loading="lazy"
        @click="openFullscreen(img)"
      />
    </div>

    <!-- Fullscreen overlay -->
    <div
      v-if="fullscreenImg"
      class="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
      @click.self="closeFullscreen"
    >
      <img :src="fullscreenImg" class="max-w-[98vw] max-h-[98vh] object-contain" />
      <button
        class="absolute top-8 right-8 text-d2 text-4xl"
        @click="closeFullscreen"
      >
        ×
      </button>
    </div>

    <BacktoTop />
  </section>
</template>

<script setup>
import BacktoTop from '../components/BacktoTop.vue'
import { ref } from 'vue'

const images = [
  '/img/gallery/_DSC0351.jpg',
  '/img/gallery/_DSC0816.jpg',
  '/img/gallery/_DSC0856.jpg',
  '/img/gallery/_DSC0956.jpg',
  '/img/gallery/_DSC1013.jpg',
  '/img/gallery/_DSC1062.jpg',
  '/img/gallery/_DSC2233.jpg',
  '/img/gallery/_DSC9974.jpg',
  '/img/gallery/_DSC9981.jpg',
  '/img/gallery/_DSC2322.jpg',
  '/img/gallery/_DSC2340.jpg',
  '/img/gallery/_DSC2355.jpg',
  '/img/gallery/_DSC2371.jpg',
  '/img/gallery/_DSC2376.jpg',
  '/img/gallery/_DSC2394.jpg',
  '/img/gallery/_DSC2425.jpg',
  '/img/gallery/_DSC2451.jpg',
  '/img/gallery/_DSC2459.jpg',
  '/img/gallery/_DSC2467.jpg',
  '/img/gallery/_DSC2472.jpg',
  '/img/gallery/_DSC2501.jpg',
  '/img/gallery/_DSC2506.jpg',
  '/img/gallery/_DSC2533.jpg',
  '/img/gallery/_DSC2558.jpg',
  '/img/gallery/bg3.jpg',
  '/img/gallery/bg1.jpg',
  '/img/gallery/bg4.jpg',
]

const fullscreenImg = ref(null)

function openFullscreen(src) {
  fullscreenImg.value = src
}

function closeFullscreen() {
  fullscreenImg.value = null
}
</script>
