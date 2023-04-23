<template>
  <div>
      <div>
          <div>
              <vs-input v-model="value1" placeholder="标题">
              </vs-input>
          </div>
          <br/>
          <div>
              <EditorCard/>
          </div>
          <br/>
          <div>
              <vs-input v-model="value1" placeholder="摘要">
              </vs-input>
          </div>
      </div>
  </div>
</template>

<script>
import EditorCard from "@/components/admin/EditorCard.vue";

export default {
    name: "EditArticle",
    components: {EditorCard}
}
</script>

<style scoped>

</style>
