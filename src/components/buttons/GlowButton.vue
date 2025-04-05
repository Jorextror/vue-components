<script setup>
import { defineProps, ref, onMounted } from 'vue';

// Define las propiedades que el componente espera recibir
const props = defineProps({
  label: {
    type: String,
    default: 'Button',
  },
  loading: {
    type: Boolean,
    default: false, // Valor por defecto para evitar que sea undefined
  },
    color: {
      type: String,
    }
});

// Crear una referencia para el botón
const btnEl = ref(null);

// Estado para detectar si el mouse está sobre el botón
const hovering = ref(false);

// Coordenadas del puntero
const x = ref(0);
const y = ref(0);

// Detectar movimientos del puntero sobre el botón
onMounted(() => {
  btnEl.value.addEventListener('mousemove', (event) => {
    x.value = event.clientX;
    y.value = event.clientY;
  });
});
</script>

<template>
  <button
    ref="btnEl"
    :class="[
      'px-4 py-2 rounded-md font-semibold text-white transition-colors duration-300 relative inline-block',
      'flex items-center justify-center min-w-[120px] overflow-hidden',
      props.loading ? 'bg-blue-400 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700',
    ]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
    :style="{ backgroundColor: color }"
  >
    <span
      v-if="hovering"
      class="absolute inline-block rounded-full h-[1px] w-[1px]"
      :style="{
        left: `${x - btnEl?.offsetLeft}px`,
        top: `${y - btnEl?.offsetTop}px`,
        boxShadow: `0 0 30px 0.7rem rgba(255, 255, 255, 1)`,
        background: 'rgba(255, 255, 255, 0.55)',
      }"
    />
    <span>
      <slot>{{ props.label }}</slot>
    </span>
  </button>
</template>