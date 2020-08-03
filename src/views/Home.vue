<template>
  <div class="home">
    <Menu />
    <h1>首頁</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import Menu from "@/components/Menu.vue";
import { stripscript, test } from "@/utils/vaildate";

export default {
  name: "Home",
  components: {
    Menu
  },
  methods: {}
};
</script>
