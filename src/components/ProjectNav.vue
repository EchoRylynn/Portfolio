
<template>
<div class="flex justify-between items-center mt-24 ">
    <!-- Place Holder -->
    <div v-if="!previousProject" class="w-48 h-16"></div>

    <!-- Prrevious Project -->
    <div v-else class="group cursor-pointer" @click="goToPrevious">
      <div class="flex items-center space-x-4 hover:opacity-80 transition">
        <img
          :src="previousProject.thumbnail"
          alt="Previous project"
          class="w-16 h-16 object-cover"
        />
        <div>
          <div class="text-sm text-d2">Last</div>
          <div class="font-semibold text-base"> {{ previousProject.name }}</div>
        </div>
      </div>
    </div>

    <!-- next Project -->
    <div v-if="nextProject" class="group cursor-pointer" @click="goToNext">
      <div class="flex items-center space-x-4 hover:opacity-80 transition">
        <div class="text-right">
          <div class="text-sm text-d2">Next</div>
          <div class="font-semibold text-base">{{ nextProject.name }} </div>
        </div>
        <img
          :src="nextProject.thumbnail"
          alt="Next project"
          class="w-16 h-16 object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Projects List + Image
const projectOrder = [
  {
    id: 'viviad',
    name: 'Viviad',
    thumbnail: '/img/projects/Viviad/IMG_1779.jpg',
  },
  {
    id: 'eventix',
    name: 'Eventix',
    thumbnail: '/img/projects/Eventix/mockup.jpg',
  },
  {
    id: 'pinkpop',
    name: 'Pinkpop',
    thumbnail: '/img/projects/Pinkpop/frontImg.jpg',
  },
  {
    id: 'reversePrompt',
    name: 'Reverse Prompt',
    thumbnail: '/img/projects/ReversePrompt/posters.jpg',
  },
  {
    id: 'Effenaar',
    name: 'Effenaar',
    thumbnail: '/img/projects/Effenaar/effenaarcard.jpg',
  },
  {
    id: 'WinstonBB',
    name: 'Winston B&B',
    thumbnail: '/img/projects/GLOW/GLOW2022.jpg',
  },
  {
    id: 'DDW22',
    name: 'DDW 2022',
    thumbnail: '/img/projects/DDWDynamicIdentity/cube.jpg',
  },
  {
    id: 'DynamicIdentityFontys',
    name: 'Dynamic Identity',
    thumbnail: '/img/projects/DDWDynamicIdentity/frontpageImage.png',
  },
]

const route = useRoute()
const router = useRouter()

const currentIndex = computed(() =>
  projectOrder.findIndex((p) => p.id === route.params.id)
)

const previousProject = computed(() => {
  const index = currentIndex.value
  return index > 0 ? projectOrder[index - 1] : null
})

const nextProject = computed(() => {
  const index = currentIndex.value
  return index < projectOrder.length - 1 ? projectOrder[index + 1] : null
})

function goToPrevious() {
  if (previousProject.value) {
    router.push(`/projects/${previousProject.value.id}`)
  }
}

function goToNext() {
  if (nextProject.value) {
    router.push(`/projects/${nextProject.value.id}`)
  }
}
</script>
