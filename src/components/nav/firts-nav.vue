<template>
  <nav class="bg-blue-600 p-2">
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
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NavigationMenu",
};
</script>
