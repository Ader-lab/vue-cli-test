<template>
  <div id="Menu">
    <nav>
      <router-link to="/">Home</router-link>|
      <router-link to="/login">Login</router-link>|
      <router-link to="/cart">Cart</router-link>
      <h3>請先登入</h3>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {},
  methods: {}
};
</script>


