<template>
  <div id="app">
      <component :is="layout">
          <DefaultLayout/>
      </component>
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
export default {

    computed: {
        // Sets components name based on current route's specified layout, defaults to
        // <layout-default></layout-default> component.
        layout() {
            return "layout-" + ( this.$route.meta.layout || "default" ).toLowerCase() ;
        }
    },
}
</script>
