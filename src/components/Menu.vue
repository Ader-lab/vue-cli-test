<template>
  <div id="Menu">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/cart">Cart</router-link>
    </div>
    <router-view />
    <h2>請先登入</h2>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  methods: {}
};
</script>


