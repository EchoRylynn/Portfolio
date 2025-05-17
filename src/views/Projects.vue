<template>
    <section class="projects">
    <projectsList />
    </section>
  </template>
  
<script>
 import projectsList from "../components/ProjectsList.vue";

  export default {
    name: "Home",
    components: {
      projectsList,
    },
  };
</script>

  <style scoped>
  .projects {
    padding: 2rem;
    padding-top: 6rem;
  }
    </style>