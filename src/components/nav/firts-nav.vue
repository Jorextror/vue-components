<template>
  <nav class="bg-[#a1a1a1] p-2">
    <ul class="flex list-none m-0 p-0 w-full">
      <li class="mr-4">
        <router-link
          to="/"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Dashboard
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/buttons"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Buttons
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/checkboxes"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Checkboxes
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/toggles"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Toggles
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/cards"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Cards
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/loaders"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Loaders
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/inputs"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Inputs
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/radio"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Radio Buttons
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/forms"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Forms
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/patterns"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          <BaseTooltip content="img por css" position="bottom" >Patterns </BaseTooltip>
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/tooltip"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Tooltips
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/modals"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Modals
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/tables"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Tables
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/tabs"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          <BaseTooltip content="menu sin cambiar de pagina" position="bottom" >Tabs </BaseTooltip>
        </router-link>
      </li>
      <li class="mr-4">
        <router-link
          to="/accordions"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          <BaseTooltip content="desplegable de texto" position="bottom" >Accordions </BaseTooltip>

        </router-link>
      </li>
      <li class="mr-4">
        <router-link
          to="/alerts"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Alerts
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/badges"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          <BaseTooltip content="button sin poder clikar" position="bottom" >Badges </BaseTooltip>

        </router-link>
      </li>
      
      <li class="mr-4">
        <router-link
          to="/breadcrumbs"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          <BaseTooltip content="progress bar" position="bottom" >Breadcrumbs </BaseTooltip>

        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/carousels"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Carousels
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/dropdowns"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Dropdowns
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/pagination"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Pagination
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/popovers"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          <BaseTooltip content="Tooltips pero sin serlo" position="bottom" >Popovers </BaseTooltip>

        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/progress"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Progress
        </router-link>
      </li>

      <li class="mr-4">
        <router-link
          to="/sliders"
          class="text-white no-underline hover:text-gray-600"
          active-class="font-bold"
        >
          Sliders
        </router-link>
      </li>

    </ul>
  </nav>
</template>

<script setup >
  import BaseTooltip from '../tooltip/BaseTooltip.vue';
</script>
