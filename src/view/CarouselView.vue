<template>
    <BaseCarousel :slides="slides" autoplay>
      <template v-slot:slide-0>
        <div class="bg-blue-500 h-96 flex items-center justify-center">
          <h2 class="text-white text-4xl">Slide 1</h2>
        </div>
      </template>
    </BaseCarousel>

    <PlaylsitCarousel></PlaylsitCarousel>

  </template>
  
  <script setup>
  import { ref } from 'vue'
  import BaseCarousel from '../components/carousels/BaseCarousel.vue';
  import PlaylsitCarousel from '../components/carousels/PlaylsitCarousel.vue';
  
  const slides = ref([
    { image: '/img1.jpg', alt: 'Descripción 1' },
    { image: '/img2.jpg', alt: 'Descripción 2' }
  ])
  </script>
  