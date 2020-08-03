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
          variant="primary"
          @click="loginBtn()"
        >登入
        </b-button>
        <b-button type="reset" variant="danger">註冊</b-button>
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
        form: {
          email: '',
          password: '',
        },
        loginStatus: false
      }
    },
    methods: {
      loginBtn() {
        console.log(this.form.email)
        console.log(this.form.password)
        if(this.form.email && this.form.password) this.loginStatus = true;
      }
    }
}
</script>

<style lang="scss" scoped>

</style>
