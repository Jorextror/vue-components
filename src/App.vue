<!-- 
 https://uiverse.io/elements
 https://codepen.io/trending
 https://sarthology.github.io/Animatopy/
-->
<script setup>
import firtsNavVue from "./components/nav/firts-nav.vue";
import { ref, watch } from "vue";

const backgroundColor = ref("#ffffff");

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
    <input class="cursor-pointer hover:bg-blue-300 " type="color" v-model="backgroundColor" />
  </div>

  <!-- Contenido principal -->
  <div class="p-4">
    <router-view></router-view>
  </div>
</template>