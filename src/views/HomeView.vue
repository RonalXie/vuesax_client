<template>
  <div class="home">
    <div>
      <vs-row>
        <vs-col vs-type="flex" vs-justify="center" vs-align="center" lg="12" sm="12" xs="12">
          <ContentHead/>
        </vs-col>
      </vs-row>
    </div>
    <div>
      <vs-row>
        <vs-col :key="index" v-for="index in 10" vs-type="flex" vs-justify="center" vs-align="center" lg="3" sm="6" xs="12">
          <vs-card class="card_center">
            <template #title>
              <h3>Pot with a plant</h3>
            </template>
            <template #img>
              <img src="https://vuesax.com/foto1.png" alt="">
            </template>
            <template #text>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              </p>
            </template>
            <template #interactions>
              <vs-button danger icon>
                <i class='bx bx-heart'></i>
              </vs-button>
              <vs-button class="btn-chat" shadow primary>
                <i class='bx bx-chat' ></i>
                <span class="span">
          54
        </span>
              </vs-button>
            </template>
          </vs-card>
        </vs-col>
      </vs-row>

      <vs-row justify="space-between">
        <vs-col :key="index" v-for="col,index in 3" w="2">
          Space-between {{ index + 1 }}
        </vs-col>
      </vs-row>
    </div>
  </div>
</template>

<script>


import ContentHead from "@/components/home/ContentHead.vue";

export default {
  name: 'HomeView',
  components: {
    ContentHead

  }
}
</script>

<style scoped>
.card_center{
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  flex-wrap: wrap;

}
</style>