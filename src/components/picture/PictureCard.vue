<template>
  <div>
    <vs-card class="card_center">
      <template #title>
        <h3>Pot with a plant</h3>
      </template>
      <template #img>
        <img :src="url" alt="">
      </template>
      <template #text>
        <div style="margin-top: 10px">
          <div style="float: left">
            <small><i class='bx bx-calendar'></i> 2023-04-23</small>
          </div>
          <div style="float:right;">
            <b style="margin: 0 5px"><i class='bx bx-purchase-tag-alt' ></i> Java</b>
            <b style="margin: 0 5px"><i class='bx bx-purchase-tag-alt' ></i> Python</b>
          </div>
        </div>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>
          <i class='bx bx-chat'></i>
          <span class="span">
                      54
                  </span>
        </vs-button>
      </template>
    </vs-card>

  </div>
</template>

<script>
export default {
  name: "PictureCard",
  props:[
      'url'
  ]
}
</script>

<style scoped>

</style>
