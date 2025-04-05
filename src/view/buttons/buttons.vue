<template>
    <div class="container">
        <!-- Input para seleccionar el color -->
        <div class="color-picker">
            <label for="color">Selecciona un color:</label>
            <input type="color" id="color" v-model="buttonColor" />
        </div>
      <!-- Menú de selección -->
      <div class="menu">
        <button @click="showNormalButtons">Normales</button>
        <button @click="showJsButtons">Con JS</button>
        <button @click="showDementesButtons">Dementes</button>
      </div>
  
      <!-- Botones normales -->
      <div v-show="activeMenu === 'normal'" class="buttons-container">
        <DeslizarButton :color="buttonColor" >Deslizar</DeslizarButton>
      </div>
  
      <!-- Botones con efectos JS -->
      <div v-show="activeMenu === 'js'" class="buttons-container flex gap-4">
        <GlowButton :color="buttonColor" >Glow</GlowButton>
        <SpotlightButton :color="buttonColor" >Spotlight</SpotlightButton>
        <ClikOndaButton :color="buttonColor" >Click</ClikOndaButton>
        <LevitaButton :color="buttonColor" >Levitan</LevitaButton>
        <TextureButton :color="buttonColor" >Texture</TextureButton>
      </div>

      <!-- Botones Dependes -->
      <div v-show="activeMenu === 'dementes'" class="buttons-container">
        <SparklyButton :color="buttonColor" >Sparkly</SparklyButton>
      </div>
    </div>
  </template>
  
  <script setup>
  // Importamos los componentes de botones con efectos JS
  import GlowButton from "../../components/buttons/GlowButton.vue";
  import SpotlightButton from "../../components/buttons/SpotlightButton.vue";
  import ClikOndaButton from "../../components/buttons/test/ClikOndaButton.vue";
  import DeslizarButton from "../../components/buttons/test/DeslizarButton.vue";
  import LevitaButton from "../../components/buttons/test/LevitaButton.vue";
  import TextureButton from "../../components/buttons/amazing/TextureButton.vue";
  import SparklyButton from "../../components/buttons/amazing/SparklyButton.vue";
  
  // Estado reactivo para controlar el menú activo
  import { ref } from "vue";
  const activeMenu = ref("normal"); // Por defecto mostramos los botones normales
  const buttonColor = ref();
  
  // Funciones para cambiar el menú activo
  const showNormalButtons = () => {
    activeMenu.value = "normal";
  };
  
  const showJsButtons = () => {
    activeMenu.value = "js";
  };

  const showDementesButtons = () => {
    activeMenu.value = "dementes";
  };
  </script>
  
  <style scoped>
  .container {
    padding: 20px;
  }
  
  .menu {
    display: flex;
    gap: 10px;
    margin-bottom: 20px;
  }
  
  .menu button {
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .buttons-container {
    display: flex;
    gap: 10px;
  }
  
  .normal-button {
    padding: 10px 20px;
    background-color: #f0f0f0;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .normal-button:hover {
    background-color: #dcdcdc;
  }
  </style>
  