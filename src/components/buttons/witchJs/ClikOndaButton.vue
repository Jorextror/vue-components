<template>
    <button
      @click="animateRipple($event)"
      class="relative px-6 py-3 bg-blue-600 text-white font-semibold rounded-md overflow-hidden transition-transform duration-300 hover:scale-105"
      :style="{ backgroundColor: backgroundColor, color: textColor, hoverBackgroundColor: hoverBackgroundColor, activeBackgroundColor: activeBackgroundColor }"
    >
      Click Me
      <span
        v-if="ripple"
        :style="{ top: ripple.y + 'px', left: ripple.x + 'px' }"
        class="absolute rounded-full bg-white opacity-50 w-20 h-20 animate-ping"
      ></span>
    </button>
  </template>
  
  <script setup>
  import { ref } from 'vue';

  defineProps({
      textColor: { type: String },
      backgroundColor: { type: String },
      hoverBackgroundColor: { type: String },
      activeBackgroundColor: { type: String },
      borderColor: { type: String},
      hoverBorderColor: { type: String },
      activeBorderColor: { type: String },
      shadowColor: { type: String }
	  });
  
  const ripple = ref(null);
  
  function animateRipple(event) {
    const rect = event.target.getBoundingClientRect();
    ripple.value = {
      x: event.clientX - rect.left - 10,
      y: event.clientY - rect.top - 10,
    };
  
    setTimeout(() => (ripple.value = null), 500);
  }
  </script>
  
  <style scoped>
  .animate-ping {
    animation: ping 0.5s linear;
  }
  
  @keyframes ping {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }
  </style>
  