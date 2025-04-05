<template>
    <button
      class="relative px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-md overflow-hidden group"
    >
      <span class="absolute inset-0 bg-indigo-700 transition-transform duration-300 transform translate-x-full group-hover:translate-x-0"
      :style="{ backgroundColor: backgroundColor }"></span>
      <span class="relative">Hover Me</span>
    </button>
  </template>
  
  <style scoped>
  .group:hover .group-hover\:translate-x-0 {
    transform: translateX(0);
  }
  </style>
  

<script setup>
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


</script>