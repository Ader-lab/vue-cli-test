<template>
  <div class="Login" v-if="correctBtn[0].click">
    <!-- <slot name="name" /> -->
    <h3>{{correctBtn[0].name}}</h3>
    <b-form>
      <b-form-group id="input-group-1" label="帳號" label-for="input-1">
        <b-form-input id="input-1" v-model="form.email" type="email" placeholder="Enter email"></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="密碼" label-for="input-2">
        <b-form-input id="input-2" v-model="form.password" placeholder="Enter password"></b-form-input>
      </b-form-group>
      <button type="button" class="btn btn-info" @click="loginBtn()">登入</button>
    </b-form>
  </div>
</template>

<script>
export default {
  name: "Menu",
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


