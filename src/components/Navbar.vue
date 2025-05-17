<!-- <template>
  <nav class="navbar">
    <router-link to="/" class="logo">Xinru Bao</router-link>
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/projects">Projects</router-link></li>
      <li><router-link to="/gallery">Gallery</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: var(--color-light);
  color: var(--color-dark);
  z-index: 1000;
}
.navbar ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}
.navbar a {
  color: var(--color-dark);
  text-decoration: none;
}

.navbar a:hover {
  color: var(--color-d2);
}

@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    align-items: flex-start;
  }

  .navbar ul {
    flex-direction: column;
    width: 100%;
    gap: 0.5rem;
    margin-top: 1rem;
  }

  .navbar ul li {
    width: 100%;
  }

  .navbar ul li a {
    display: block;
    width: 100%;
    padding: 0.5rem 0;
  }
}
</style> -->

<template>
  <nav class="navbar" ref="navbarRef">
    <router-link to="/" class="logo" @click="closeMenu">Xinru Bao</router-link>

    <!-- Burger Button -->
    <button class="burger" @click="toggleMenu">
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
      <span :class="{ open: isOpen }"></span>
    </button>

    <!-- Slide-in Menu -->
    <ul :class="{ open: isOpen }">
      <li><router-link to="/" @click="closeMenu">Home</router-link></li>
      <li><router-link to="/projects" @click="closeMenu">Projects</router-link></li>
      <li><router-link to="/gallery" @click="closeMenu">Gallery</router-link></li>
      <li><router-link to="/about" @click="closeMenu">About</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: var(--color-light);
  color: var(--color-dark);
  z-index: 1000;
}

.navbar .logo {
  font-weight: bold;
}

.navbar ul {
  display: flex;
  gap: 1rem;
  list-style: none;
}

.navbar a {
  color: var(--color-dark);
  text-decoration: none;
}
.navbar a:hover {
  color: var(--color-d2);
}

/* Burger Button */
.burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  z-index: 1001;
}
.burger span {
  display: block;
  width: 25px;
  height: 3px;
  background: var(--color-dark);
  transition: all 0.3s ease;
}
.burger span.open:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}
.burger span.open:nth-child(2) {
  opacity: 0;
}
.burger span.open:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

/* Slide-in Menu Styles */
@media (max-width: 768px) {
  .burger {
    display: flex;
  }

  .navbar ul {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--color-light);
    transform: translateY(-100%);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
    padding: 5rem 2rem 2rem;
    z-index: 1000;
  }

  .navbar ul.open {
    transform: translateY(0);
    opacity: 1;
  }

  .navbar ul li {
    width: 100%;
    margin-bottom: 1rem;
  }

  .navbar ul li a {
    display: block;
    width: 100%;
    padding: 0.5rem 0;
    font-size: 1.2rem;
  }
}

</style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const isOpen = ref(false)
const navbarRef = ref(null)

const toggleMenu = () => {
  isOpen.value = !isOpen.value
}

const closeMenu = () => {
  isOpen.value = false
}

const handleClickOutside = (event) => {
  if (isOpen.value && navbarRef.value && !navbarRef.value.contains(event.target)) {
    closeMenu()
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>
