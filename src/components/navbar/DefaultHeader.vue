<template>
  <div class="center examplex">
    <vs-navbar shadow-scroll center-collapsed fixed v-model="active">
      <template #left>
<!--        <img src="@/assets/logo2.png" alt="">-->
        <h3>RonalXie' Blog</h3>
      </template>
      <vs-navbar-item :active="active == 'guide'" id="guide">
        Home
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'docs'" id="docs">
        Documents
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'components'" id="components">
        Components
      </vs-navbar-item>
      <vs-navbar-item :active="active == 'license'" id="license">
        license
      </vs-navbar-item>
      <template #right>
        <vs-button flat >Login</vs-button>
        <vs-avatar circle>
          <img src="https://vuesax.com/avatars/avatar-1.png" alt="">
        </vs-avatar>
      </template>
    </vs-navbar>
  </div>
</template>
<script>
export default {
  data:() => ({
    active: 'guide'
  })
}
</script>

        