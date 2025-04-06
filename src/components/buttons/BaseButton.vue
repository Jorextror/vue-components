<template>
    <button
      class="relative px-6 py-3 font-semibold rounded-md overflow-hidden group"
      :style="{ backgroundColor: currentBackground, color: textColor }"
      @mouseover="applyHoverStyles"
      @mouseout="resetStyles"
      @mousedown="applyActiveStyles"
      @mouseup="resetStyles"
    >
      <span
        class="absolute inset-0 transition-transform duration-300 transform translate-x-full group-hover:translate-x-0"
      ></span>
      <span class="relative">
        <slot></slot>
      </span>
    </button>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Props para personalizar estilos del botón
  const props = defineProps({
    textColor: { type: String, default: "#ffffff" }, // Color del texto
    backgroundColor: { type: String, default: "#4CAF50" }, // Color de fondo
    hoverBackgroundColor: { type: String, default: "#45a049" }, // Color al pasar el cursor
    activeBackgroundColor: { type: String, default: "#3e8e41" } // Color al hacer clic
  });
  
  // Estado reactivo para manejar estilos dinámicos
  const currentBackground = ref(props.backgroundColor);
  
  // Función para aplicar estilos de hover
  const applyHoverStyles = () => {
    currentBackground.value = props.hoverBackgroundColor;
  };
  
  // Función para aplicar estilos de clic (activo)
  const applyActiveStyles = () => {
    currentBackground.value = props.activeBackgroundColor;
  };
  
  // Función para resetear estilos al estado normal
  const resetStyles = () => {
    currentBackground.value = props.backgroundColor;
  };
  </script>
  
  <style scoped>
  button {
    transition: all 0.3s ease-in-out;
  }
  .group:hover .group-hover\:translate-x-0 {
    transform: translateX(0);
  }
  </style>
  