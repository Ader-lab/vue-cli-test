<template>  
  <div id="LoginPage">
    <Menu :loginStatus="loginStatus" />
    <div class="Login">
      <b-form>
        <b-form-group
          id="input-group-1"
          label="帳號"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="密碼" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.password"
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        
        <b-button 
          type="button"
          variant="secondary"
          @click="loginBtn()"
          v-for="(item, idx) in correctBtn"
          :class="{ btnColor: item.click }"
          :key = "item.name"
        >{{ item.name }}
        </b-button>


        <b-button type="reset" variant="secondary">註冊</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";

export default {
  name: "Login",
  components: {
    Menu
  },
  data() {
      return {
        correctBtn: [
          { name: "登入", click: true },
          { name: "註冊", click: false } 
        ],
        form: {
          email: '',
          password: '',
        },
        loginStatus: false
      }
    },
    methods: {
      loginBtn() {
          // :variant="{item.click: 'secondary'}"
        if(this.form.email && this.form.password) this.loginStatus = true;
      }
    }
}
</script>

<style lang="scss" scoped>
  .btnColor{
    background-color: #fa0;
  }
</style>
