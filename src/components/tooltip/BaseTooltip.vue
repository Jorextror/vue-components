<template>
    <div class="relative inline-block" @mouseenter="showTooltip" @mouseleave="hideTooltip">
      <!-- Elemento objetivo (slot) -->
      <slot></slot>
  
      <!-- Tooltip -->
      <div
        v-if="isVisible"
        class="absolute z-50 p-2 rounded shadow-lg bg-gray-800 text-white text-sm"
        :style="tooltipStyles"
      >
        {{ content }}
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from "vue";
  
  // Props para personalizar el tooltip
  const props = defineProps({
    content: { type: String, required: true }, // Contenido del tooltip
    position: { type: String, default: "top" }, // Posición del tooltip (top, bottom, left, right)
    offset: { type: Number, default: 10 }, // Desplazamiento del tooltip desde el elemento objetivo
  });
  
  // Estado reactivo para controlar la visibilidad del tooltip
  const isVisible = ref(false);
  
  // Mostrar el tooltip
  const showTooltip = () => {
    isVisible.value = true;
  };
  
  // Ocultar el tooltip
  const hideTooltip = () => {
    isVisible.value = false;
  };
  
  // Estilos dinámicos según la posición
  const tooltipStyles = computed(() => {
    switch (props.position) {
      case "top":
        return { bottom: `calc(100% + ${props.offset}px)`, left: "50%", transform: "translateX(-50%)" };
      case "bottom":
        return { top: `calc(100% + ${props.offset}px)`, left: "50%", transform: "translateX(-50%)" };
      case "left":
        return { right: `calc(100% + ${props.offset}px)`, top: "50%", transform: "translateY(-50%)" };
      case "right":
        return { left: `calc(100% + ${props.offset}px)`, top: "50%", transform: "translateY(-50%)" };
      default:
        return {};
    }
  });
  </script>
  
  <style scoped>
  /* Estilo básico del tooltip */
  .shadow-lg {
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.06);
  }
  
  .bg-gray-800 {
    background-color: #2d3748;
  }
  
  .text-white {
    color: #ffffff;
  }
  
  .text-sm {
    font-size: 0.875rem;
  }
  
  .rounded {
    border-radius: 0.25rem;
  }
  
  .p-2 {
    padding: 0.5rem;
  }
  
  .z-50 {
    z-index: 50;
  }
  </style>
  