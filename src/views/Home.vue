<template>
  <div class="home">
    <Menu @loginStatusFn="loginStatusFn" />
    <h1>首頁</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";

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
