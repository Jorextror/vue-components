<template>
    <div class="relative overflow-hidden w-full max-w-4xl mx-auto">
      <!-- Contenedor de slides -->
      <div 
        class="flex transition-transform duration-500"
        :style="`transform: translateX(-${currentIndex * 100}%)`"
      >
        <div 
          v-for="(slide, index) in slides"
          :key="index"
          class="min-w-full flex-shrink-0"
        >
          <slot :name="`slide-${index}`">
            <img 
              :src="slide.image" 
              :alt="slide.alt"
              class="w-full h-96 object-cover"
            />
          </slot>
        </div>
      </div>
  
      <!-- Botones de navegación -->
      <button 
        @click="prev"
        class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
      >
        &larr;
      </button>
      <button 
        @click="next"
        class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
      >
        &rarr;
      </button>
  
      <!-- Indicadores -->
      <div class="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          v-for="(_, index) in slides"
          :key="index"
          @click="goTo(index)"
          class="w-3 h-3 rounded-full transition-all"
          :class="{
            'bg-white': currentIndex === index,
            'bg-white/50': currentIndex !== index
          }"
        ></button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  
  const props = defineProps({
    slides: {
      type: Array,
      required: true
    },
    autoplay: {
      type: Boolean,
      default: false
    },
    interval: {
      type: Number,
      default: 3000
    }
  })
  
  const currentIndex = ref(0)
  let autoplayInterval = null
  
  const next = () => {
    currentIndex.value = (currentIndex.value + 1) % props.slides.length
  }
  
  const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + props.slides.length) % props.slides.length
  }
  
  const goTo = (index) => {
    currentIndex.value = index
  }
  
  watch(() => props.autoplay, (newVal) => {
    if (newVal) {
      autoplayInterval = setInterval(next, props.interval)
    } else {
      clearInterval(autoplayInterval)
    }
  }, { immediate: true })
  </script>
  