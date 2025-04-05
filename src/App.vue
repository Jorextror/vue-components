<script setup>
import firtsNavVue from "./components/nav/firts-nav.vue";
import { ref, watch } from "vue";

// Estado reactivo para el color de fondo
const backgroundColor = ref("#ffffff"); // Color inicial (blanco)

// Actualizar el color de fondo del body
watch(backgroundColor, (newColor) => {
  document.body.style.backgroundColor = newColor;
});
</script>

<template>
  <!-- Componente de navegación -->
  <firtsNavVue />

  <!-- Botón para cambiar el color del fondo -->
  <div class="color-picker">
    <input type="color" v-model="backgroundColor" />
  </div>

  <!-- Contenido principal -->
  <div class="p-4">
    <router-view></router-view>
  </div>
</template>