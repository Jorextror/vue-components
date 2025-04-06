<template>
    <div class="flex flex-col space-y-2">
      <div v-for="(option, index) in options" :key="index" class="flex items-center space-x-2">
        <!-- Checkbox -->
        <input
          type="checkbox"
          :id="`checkbox-${index}`"
          :value="option.value"
          v-model="selectedOptions"
          class="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
        <!-- Etiqueta -->
        <label :for="`checkbox-${index}`" class="text-gray-700">
          {{ option.label }}
        </label>
      </div>
  
      <!-- Mostrar las opciones seleccionadas -->
      <div class="mt-4">
        <p class="text-sm text-gray-500">Opciones seleccionadas:</p>
        <ul class="list-disc list-inside">
          <li v-for="(option, index) in selectedOptions" :key="index">{{ option }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "DynamicCheckbox",
    props: {
      // Lista de opciones para los checkboxes
      options: {
        type: Array,
        required: true,
        default: () => [],
      },
    },
    data() {
      return {
        // Opciones seleccionadas
        selectedOptions: [],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Puedes agregar estilos personalizados aquí si es necesario */
  </style>
  