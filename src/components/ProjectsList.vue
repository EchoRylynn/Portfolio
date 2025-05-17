<template>
  <div class="columns-1 sm:columns-2 lg:columns-3 gap-0 mt-20">
    <router-link 
      v-for="(project, index) in projects" 
      :key="index" 
      :to="project.link"
      class="block relative">
      <img
        :src="project.image"
        alt=""
        class="w-full block break-inside-avoid filter grayscale transition-all duration-300 ease-in-out hover:grayscale-0 hover:scale-105 hover:z-50 hover:relative"
      />
    </router-link>
  </div>
</template>

<script setup>
const projects = [
  { link: "/projects/viviad", image: "/img/projects/Viviad/IMG_1779.jpg" },
  { link: "/projects/eventix", image: "/img/projects/Eventix/mockup.jpg" },
  { link: "/projects/pinkpop", image: "/img/projects/Pinkpop/frontImg.jpg" },
  { link: "/projects/reversePrompt", image: "/img/projects/ReversePrompt/posters.jpg" },
  { link: "/projects/Effenaar", image: "/img/projects/Effenaar/effenaarcard.jpg" },
  { link: "/projects/WinstonBB", image: "/img/projects/GLOW/GLOW2022.jpg" },
  { link: "/projects/DDW22", image: "/img/projects/DDWDynamicIdentity/cube.jpg" },
  { link: "/projects/DynamicIdentityFontys", image: "/img/projects/DDWDynamicIdentity/frontpageImage.png" },
];
</script>
