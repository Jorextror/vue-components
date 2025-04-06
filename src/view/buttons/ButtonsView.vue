<template>
    <div class="">
      <!-- Inputs para seleccionar colores -->
      <div class="flex flex-row gap-4 align-center justify-center ">
        <label class="cursor-pointer" for="textColor">Text:</label>
        <input class="w-10 mt-7 cursor-pointer hover:bg-blue-300 border-r-2 border-black " type="color" id="textColor" v-model="textColor" />
  
        <label class="cursor-pointer" for="backgroundColor">Background:</label>
        <input class="w-10 mt-7 cursor-pointer hover:bg-blue-300 border-r-2 border-black" type="color" id="backgroundColor" v-model="backgroundColor" />

        <label class="cursor-pointer" for="backgroundColor2">Background2:</label>
        <input class="w-10 mt-7 cursor-pointer hover:bg-blue-300 border-r-2 border-black" type="color" id="backgroundColor2" v-model="backgroundColor2" />
  
        <label class="cursor-pointer" for="hoverBackgroundColor">Hover:</label>
        <input class="w-10 mt-7 cursor-pointer hover:bg-blue-300 border-r-2 border-black" type="color" id="hoverBackgroundColor" v-model="hoverBackgroundColor" />
  
        <label class="cursor-pointer" for="activeBackgroundColor">Active:</label>
        <input class="w-10 mt-7 cursor-pointer hover:bg-blue-300 border-r-2 border-black" type="color" id="activeBackgroundColor" v-model="activeBackgroundColor" />

        <button class="bg-blue-500 text-white px-2 rounded h-7 hover:bg-blue-600 active:bg-blue-700 " @click="resetColors">Resetear Colores</button>
      </div>
  
      <!-- Menú de selección -->
      <div class="menu">
        <BaseButton @click="showNormalButtons">Normales</BaseButton>
        <BaseButton @click="showJsButtons">Con JS</BaseButton>
        <BaseButton @click="showDementesButtons">Dementes</BaseButton>
      </div>
  
      <!-- Botones normales -->
      <div v-show="activeMenu === 'normal'" class="">
        <BaseButton 
          textColor="#ffffff"
          backgroundColor="#007BFF"
          hoverBackgroundColor="#0056b3"
          activeBackgroundColor="#003e8e"
        >
          Botón Base
        </BaseButton>

        <DeslizarButton
          :text-color="textColor"
          :backgroundColor="backgroundColor"
          :backgroundColor2="backgroundColor2"
          :hover-background-color="hoverBackgroundColor"
          :active-background-color="activeBackgroundColor"
        >
          Deslizar
        </DeslizarButton>
      </div>
  
      <!-- Botones con efectos JS -->
      <div v-show="activeMenu === 'js'" class="flex-1">
        <GlowButton
          :text-color="textColor"
          :background-color="backgroundColor"
          :hover-background-color="hoverBackgroundColor"
          :active-background-color="activeBackgroundColor"
        >
          Glow
        </GlowButton>
        <SpotlightButton
          :text-color="textColor"
          :background-color="backgroundColor"
          :hover-background-color="hoverBackgroundColor"
          :active-background-color="activeBackgroundColor"
        >
          Spotlight
        </SpotlightButton>
        <ClikOndaButton
          :text-color="textColor"
          :background-color="backgroundColor"
          :hover-background-color="hoverBackgroundColor"
          :active-background-color="activeBackgroundColor"
        >
          Click
        </ClikOndaButton>
        <LevitaButton
          :text-color="textColor"
          :background-color="backgroundColor"
          :hover-background-color="hoverBackgroundColor"
          :active-background-color="activeBackgroundColor"
        >
          Levitan
        </LevitaButton>
        <TextureButton
          :text-color="textColor"
          :background-color="backgroundColor"
          :hover-background-color="hoverBackgroundColor"
          :active-background-color="activeBackgroundColor"
        >
          Texture
        </TextureButton>
      </div>
  
      <!-- Botones Dementes -->
      <div v-show="activeMenu === 'dementes'" class="">
        <SparklyButton
          :text-color="textColor"
          :background-color="backgroundColor"
          :hover-background-color="hoverBackgroundColor"
          :active-background-color="activeBackgroundColor"
        >
          Sparkly
        </SparklyButton>
      </div>
    </div>
  </template>
  
  <script setup>
  // Importamos los componentes de botones con efectos JS
  import BaseButton from "../../components/buttons/BaseButton.vue";
  import GlowButton from "../../components/buttons/witchJs/GlowButton.vue";
  import SpotlightButton from "../../components/buttons/witchJs/SpotlightButton.vue";
  import ClikOndaButton from "../../components/buttons/witchJs/ClikOndaButton.vue";
  import DeslizarButton from "../../components/buttons/normals/DeslizarButton.vue";
  import LevitaButton from "../../components/buttons/witchJs/LevitaButton.vue";
  import TextureButton from "../../components/buttons/witchJs/TextureButton.vue";
  import SparklyButton from "../../components/buttons/dementes/SparklyButton.vue";
  
  // Estado reactivo para controlar el menú activo y los colores seleccionados
  import { ref } from "vue";
  
  const activeMenu = ref("normal"); // Por defecto mostramos los botones normales
  
  // Colores reactivos para los botones
  const textColor = ref();
  const backgroundColor = ref();
  const backgroundColor2 = ref();
  const hoverBackgroundColor = ref();
  const activeBackgroundColor = ref();
  
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

  const resetColors = () => {
        textColor.value = null;
        backgroundColor.value = null;
        backgroundColor2.value = null;
        hoverBackgroundColor.value = null;
        activeBackgroundColor.value = null;
    };


  </script>
  



  <style scoped>
  .container {
    padding: 20px;
  }
  
  .menu {
    display: flex;
    gap: 4px;
    margin-bottom: 20px;
  }
  
  .menu button {
    padding: 10px 20px;
    font-size: 16px;
  }
  
  .buttons-container {
    display: flex;
    gap: 10px;
  }
  </style>  