<template>
  <div>
    <vs-card class="content_card card_center">
      <template #title>
        <h1>Pot with a plant</h1>
      </template>
      <template #img>
        <img style="width: 100%;height: 100%" src="https://haojen.github.io/Claudia-theme-blog/images/tree.png" alt="">
      </template>
      <template #text>
        <div style="display: flex;position: absolute;bottom: 10px">
          <vs-button
              size="small"
              border
          >
            Active
          </vs-button>
          <vs-button
              size="small"
              border
              success
          >
            Active
          </vs-button>
        </div>
        <p>
          2023-04-25
        </p>
        <b>
          Theme摘要 cutie has evolved from v1.x to v2.x with a refreshed and fine tuned design and more features.

        </b>
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

  </div>
</template>

<script>
export default {
  name: "ContentCard"
}
</script>

<style>
.content_card .vs-card{
  max-width: 100%;
  height: 580px;
}
.content_card .vs-card .vs-card__img{
  max-height: 400px;
  min-width: 400px;
}


</style>