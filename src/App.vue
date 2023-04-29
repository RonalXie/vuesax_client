<template>
  <div id="app">
     <DefaultLayout/>
  </div>
</template>

<style>
#app {
  font-family: Poppins, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.w-full {
  width: 100% !important;
}

.w-full .vs-card__text {
  width: 100%;
}

</style>
<script setup>
import DefaultLayout from "@/layout/DefaultLayout.vue";

</script>
