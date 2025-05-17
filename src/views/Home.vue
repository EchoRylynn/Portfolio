 <template>
  <section class="pt-24 px-4 sm:px-8 md:px-16">
     <div class="hero" >
      <div class="min-h-[70vh] w-auto place-content-center"> 
      <h1>UXUI DESIGN • VISUAL DESIGN • CREATIVE CODING • PHOTOGRAPHY • MORE</h1>
      </div>
    </div>
    
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
.hero h1{
  font-weight: 1000;
  font-size: 3rem;
}

@media (max-width: 768px) {
  .hero h1{
  font-weight: 800;
  font-size: 3rem;
  }
}

@media (max-width: 360px) {
  .hero h1{
  font-weight: 600;
  font-size: 2rem;
  }
}
</style>