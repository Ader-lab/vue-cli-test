<template>
  <div id="LoginPage">
    <Menu :loginStatus="loginStatus" />
    <div class="btnGroup">
      <button
        type="button"
        v-for="item in correctBtn"
        :key="item.name"
        :class="{ 'btn-info': item.click, 'btn-secondary': !item.click }"
        class="btn"
        @click="changePage()"
      >{{ item.name }}</button>
    </div>
    <LoginRegister v-if="correctBtn[0].click" />

    <div class="Registered" v-else>
      <h3>註冊頁面</h3>
      <b-form>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input id="input-2" v-model="form.name" placeholder="請輸入姓名"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input id="input-1" v-model="form.email" type="email" placeholder="請輸入帳號"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input id="input-2" v-model="form.password" placeholder="輸入密碼"></b-form-input>
        </b-form-group>

        <button type="button" class="btn btn-info" @click="registeredBtn()">註冊</button>
      </b-form>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import LoginRegister from "@/components/LoginRegister.vue";

export default {
  name: "Login",
  components: {
    Menu,
    LoginRegister
  },
  data() {
    return {
      correctBtn: [
        { name: "登入頁面", click: true },
        { name: "註冊頁面", click: false }
      ],
      form: {
        name: "",
        email: "",
        password: ""
      },
      loginStatus: false
    };
  },
  methods: {
    loginBtn() {
      if (this.form.email && this.form.password) this.loginStatus = true;
    },
    changePage() {
      this.correctBtn.map(item => {
        item.click = !item.click;
      });
    },
    registeredBtn() {
      console.log(222);
    }
  }
};
</script>

<style lang="scss" scoped>
</style>
