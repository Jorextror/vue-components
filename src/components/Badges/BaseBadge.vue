<template>
    <h2
      class="relative px-6 py-3 font-semibold rounded-md overflow-hidden group shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
      :style="{
        color: textColor,
        borderColor: currentBorderColor,
        boxShadow: `0px 4px 8px ${shadowColor}`,
        backgroundImage: `linear-gradient(to right, ${currentBackground}, ${currentBackground2}, ${currentBackground})`,
      }"
    >
        <slot></slot>
    </h2>
  </template>
  
  <script setup>
  import { ref } from "vue";
  
  // Props para personalizar estilos del botón
  const props = defineProps({
    textColor: { type: String, default: "#ffffff" }, // Color del texto
  
    backgroundColor: { type: String, default: "#4CAF50" }, // Color de fondo
    backgroundColor2: { type: String, default: "#4CAF50" }, // Segundo color de fondo (gradiente)
  
    borderColor: { type: String, default: "#4CAF50" }, // Color del borde
  
    shadowColor: { type: String, default: "rgba(76, 175, 80, 0.5)" }, // Color de la sombra
  });
  
  // Estado reactivo para manejar estilos dinámicos
  const currentBackground = ref(props.backgroundColor);
  const currentBackground2 = ref(props.backgroundColor2);
  const currentBorderColor = ref(props.borderColor);
  
</script>
  
  <style scoped>
  button {
    transition: all 0.3s ease-in-out; /* Transiciones suaves */
  }
  </style>
  