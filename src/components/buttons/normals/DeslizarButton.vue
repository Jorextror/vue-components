<template>
    <button
      class="relative px-6 py-3  text-white font-semibold rounded-md overflow-hidden group bg-gradient-to-r from-purple-600 to-indigo-600"
      :style="{ backgroundImage: `linear-gradient(to right, ${backgroundColor}, ${backgroundColor2})` }
      "
      @mousedown="isActive = true"
      @mouseup="isActive = false"
      @mouseleave="isActive = false"
    >
      <span class="absolute inset-0 bg-indigo-700 transition-transform duration-300 transform translate-x-full group-hover:translate-x-0 active:bg-indigo-500"
      :class="{ 'active:bg-[activeBackgroundColor]': activeBackgroundColor }"
      :style="{ backgroundColor: isActive ? activeBackgroundColor : hoverBackgroundColor }" >
    </span>
      <span class="relative">
        <slot></slot>
      </span>
    </button>
  </template>
  
  <style scoped>
  button {
    transition: all 0.3s ease-in-out;
  }

  .group:hover .group-hover\:translate-x-0 {
    transform: translateX(0);
  }
  </style>
  

<script setup>
  import { ref } from 'vue';
    const props = defineProps({
      textColor: { type: String },
      backgroundColor: { type: String },
      backgroundColor2: { type: String },
      hoverBackgroundColor: { type: String },
      activeBackgroundColor: { type: String },
      // borderColor: { type: String},
      // hoverBorderColor: { type: String },
      // activeBorderColor: { type: String },
      // shadowColor: { type: String }
	  });

    const isActive = ref(false);
</script>