<template>
    <button
      class="relative px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-md overflow-hidden group"
      :style="{ backgroundColor: backgroundColor, color: textColor, hoverBackgroundColor: hoverBackgroundColor, activeBackgroundColor: activeBackgroundColor }"
      @mouseover="applyHoverStyles"
      @mouseout="resetStyles"
      @mousedown="applyActiveStyles"
      @mouseup="resetStyles"
    >
      <!-- <span class="absolute inset-0 bg-indigo-700 transition-transform duration-300 transform translate-x-full group-hover:translate-x-0"
      ></span> -->
      <span class="relative">Hover Me</span>
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
      hoverBackgroundColor: { type: String },
      activeBackgroundColor: { type: String },
      // borderColor: { type: String},
      // hoverBorderColor: { type: String },
      // activeBorderColor: { type: String },
      // shadowColor: { type: String }
	  });
  
  const currentBackground = ref(props.backgroundColor);

  // Función para aplicar estilos de hover
  const applyHoverStyles = () => {
    currentBackground.value = hoverBackgroundColor;
  };

  // Función para aplicar estilos de clic (activo)
  const applyActiveStyles = () => {
    currentBackground.value = activeBackgroundColor;
  };

  // Función para resetear estilos al estado normal
  const resetStyles = () => {
    currentBackground.value = backgroundColor;
  };
</script>