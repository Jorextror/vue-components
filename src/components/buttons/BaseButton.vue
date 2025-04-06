<template>
  <button
    class="relative px-6 py-3 font-semibold rounded-md overflow-hidden group shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
    :style="{
      color: textColor,
      borderColor: currentBorderColor,
      boxShadow: `0px 4px 8px ${shadowColor}`,
      backgroundImage: `linear-gradient(to right, ${currentBackground}, ${currentBackground2}, ${currentBackground})`,
    }"
    @mouseover="applyHoverStyles"
    @mouseout="resetStyles"
    @mousedown="applyActiveStyles"
    @mouseup="resetStyles"
    :disabled="disabled"
    @click="handleClick"
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
  backgroundColor2: { type: String, default: "#4CAF50" }, // Segundo color de fondo (gradiente)

  hoverBackgroundColor: { type: String, default: "#45a049" }, // Color al pasar el cursor
  hoverBackgroundColor2: { type: String, default: "#45a049" }, // Segundo color al pasar el cursor

  activeBackgroundColor: { type: String, default: "#3e8e41" }, // Color al hacer clic
  activeBackgroundColor2: { type: String, default: "#3e8e41" }, // Segundo color al hacer clic

  borderColor: { type: String, default: "#4CAF50" }, // Color del borde
  hoverBorderColor: { type: String, default: "#45a049" }, // Color del borde al pasar el cursor

  shadowColor: { type: String, default: "rgba(76, 175, 80, 0.5)" }, // Color de la sombra

  disabled: Boolean,
});

// Estado reactivo para manejar estilos dinámicos
const currentBackground = ref(props.backgroundColor);
const currentBackground2 = ref(props.backgroundColor2);
const currentBorderColor = ref(props.borderColor);

// Función para aplicar estilos de hover
const applyHoverStyles = () => {
  currentBackground.value = props.hoverBackgroundColor;
  currentBackground2.value = props.hoverBackgroundColor2;
  currentBorderColor.value = props.hoverBorderColor;
};

// Función para aplicar estilos de clic (activo)
const applyActiveStyles = () => {
  currentBackground.value = props.activeBackgroundColor;
  currentBackground2.value = props.activeBackgroundColor2;
};

// Función para resetear estilos al estado normal
const resetStyles = () => {
  currentBackground.value = props.backgroundColor;
  currentBackground2.value = props.backgroundColor2;
  currentBorderColor.value = props.borderColor;
};

const emit = defineEmits(['click']);

const handleClick = (event) => {
  if (!props.disabled) {
    if (props.onClick) {
      props.onClick(event);
    }
    emit('click', event);
  }
};
</script>

<style scoped>
button {
  transition: all 0.3s ease-in-out; /* Transiciones suaves */
}
.group:hover .group-hover\:translate-x-0 {
  transform: translateX(0); /* Efecto de desplazamiento */
}

.button:disabled {
  background-color: #A0A0A0;
  cursor: not-allowed;
}

.button:hover:not(:disabled) {
  background-color: #3E7C94;
}
</style>
