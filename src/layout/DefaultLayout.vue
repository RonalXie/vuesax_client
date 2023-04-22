<template>
  <div>
    <div class="header">
      <DefaultHeader/>
    </div>
    <div class="content">
      <router-view/>
    </div>
    <div class="footer">

    </div>
  </div>
</template>

<script>
import DefaultHeader from "@/components/navbar/DefaultHeader.vue";

export default {
  name: "DefaultLayout",
  components: {DefaultHeader}
}
</script>

<style scoped>


</style>