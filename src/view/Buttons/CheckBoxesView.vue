<template>
    <BaseCheckbox :options="[
        { label: 'Opción 1', value: 'opcion1' },
        { label: 'Opción 2', value: 'opcion2' },
        { label: 'Opción 3', value: 'opcion3' }
      ]" ></BaseCheckbox>
</template>

<script setup >
    import BaseCheckbox from '../../components/checkbox/BaseCheckbox.vue';
</script>