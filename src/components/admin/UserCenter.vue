<template>
  <div>
      <vs-row justify="center" align="center">
          <vs-col w="8" justify="center">
              <div>
                  <vs-input v-model="value1" placeholder="Nick Name">
                      <template #icon>
                          <i class='bx bx-user'></i>
                      </template>
                  </vs-input>
              </div>
              <br/>
              <div>
                  <vs-input v-model="value1" placeholder="个性签名">
                      <template #icon>
                          <i class='bx bx-user'></i>
                      </template>
                  </vs-input>
              </div>
              <br/>
              <div>
                  <vs-button success>
                      保存
                  </vs-button>
              </div>
          </vs-col>
          <vs-col w="4" align="center" justify="center" >
<!--              更换头像-->
              <div>
                  <div>
                      <vs-avatar circle size="176">
                          <img src="https://vuesax.com/foto1.png" alt="">
                      </vs-avatar>
                  </div>
                  <div>
                      <vs-button>
                          更换头像
                      </vs-button>
                  </div>

              </div>

          </vs-col>
      </vs-row>
  </div>
</template>

<script>
export default {
    name: "UserCenter"
}
</script>

<style scoped>

</style>
