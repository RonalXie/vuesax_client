<template>
    <div>
      <h3>RonalXie</h3>
      <br />
      <p>
        WebSite Design ©2023 Created by RonalXie
      </p>
    </div>
</template>

<script>
export default {
  data: function () {
    return {
      config: this.getConfig().config,
      curYear: new Date().getFullYear()
    }
  },
  methods: {
    getYear: function () {
      return new Date().getFullYear()
    }
  }
}
</script>
