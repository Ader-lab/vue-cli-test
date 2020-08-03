<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  #app {}
</style>

<script>
export default {
    name: "Home",
    components: {
      Menu
    },
    methods: {
      loginStatusFn(bool) {
        console.log(bool)
      }
    }
  };
</script>
