<template>
  <button v-show="visible" class="up-btn" @click="scrollToTop" aria-label="Yukarı çık">
    <svg width="24" height="24" viewBox="0 0 24 24">
      <polyline points="6 15 12 9 18 15" fill="none" stroke="#111" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const visible = ref(false)

function handleScroll() {
  visible.value = window.scrollY > 100
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.up-btn {
  position: fixed;
  right: 32px;
  bottom: 32px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid #111;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  cursor: pointer;
  transition: opacity 0.2s, transform 0.2s;
  z-index: 1000;
  opacity: 0.95;
  padding: 0;
}
.up-btn:hover {
  opacity: 1;
  transform: scale(1.08);
}
.up-btn svg {
  display: block;
}
</style>