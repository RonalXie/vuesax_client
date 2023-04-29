<template>
  <div>
    <div class="header">
      <DefaultHeader/>
    </div>
    <div class="content">
      <vs-row justify="center" align="center">
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" lg="8" sm="12" xs="12">
          <router-view/>
        </vs-col>
      </vs-row>
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