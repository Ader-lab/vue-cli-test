<template>
  <div id="Menu">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/cart">Cart</router-link> 
    </div>
    <router-view />
    <h2>{{loginStatus ? '歡迎XXX' : "請先登入"}}</h2>
    {{btnClick()}}
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    loginStatus: Boolean
  },
  methods: {
    btnClick() {
      this.$emit('loginStatusFn', this.loginStatus)
    },
  }
};
    
</script>


