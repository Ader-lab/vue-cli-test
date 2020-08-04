<template>
  <div id="LoginPage">
    <Menu />
    <div class="btnGroup">
      <button
        type="button"
        v-for="item in correctBtn"
        :key="item.name"
        :class="{ 'btn-info': item.click, 'btn-secondary': !item.click }"
        class="btn"
        @click="changePage(item)"
      >{{ item.name }}</button>
    </div>

    <div class="Login">
      <h3 
        v-for="item in correctBtn"
        :key="item.name"
        v-show="item.click"
      >{{ item.name }}</h3>
      <b-form>
        <b-form-group id="input-group-2" label-for="input-2" v-show="model === 'Registered'">
          <b-form-input 
            id="input-2" 
            v-model="form.name" 
            placeholder="請輸入姓名"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label-for="input-1">
          <b-form-input 
            id="input-1" 
            v-model="form.email" 
            type="email" 
            placeholder="請輸入帳號"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label-for="input-2">
          <b-form-input 
            id="input-2" 
            v-model="form.password" 
            placeholder="輸入密碼"
          ></b-form-input>
        </b-form-group>

        <button 
          type="button" 
          class="btn btn-info" 
          @click="loginBtn()"
          v-show="model === 'Login'"
        >登入</button>
        <button 
          type="button" 
          class="btn btn-info" 
          @click="registeredBtn()" 
          v-show="model === 'Registered'"
        >註冊</button>
      </b-form>
    </div>
  </div>
</template>

<script>
import { PostUser } from "@/api/login";
import Menu from "@/components/Menu.vue";

export default {
  name: "Login",
  components: {
    Menu,
  },
  data() {
    return {
      correctBtn: [
        { name: "登入頁面", click: true, type: "Login" },
        { name: "註冊頁面", click: false, type: "Registered" }
      ],
      form: {
        name: "",
        email: "",
        password: ""
      },
      model: "Login"
    };
  },
  methods: {
    loginBtn() {

      // this.axios.get('/user/12345').then((response) => {
      //   console.log(response.data);
      // })

      // if (this.form.email && this.form.password) console.log("輸入成功");
    },
    changePage(data) {
      this.correctBtn.map(item => {
        // 切換按鈕顏色
        item.click = !item.click;
      });

      // 切換內容
      this.model = data.type;

    },
    registeredBtn() {
      PostUser(this.form);
    }
  },
  // 完成渲染後調用
  // mounted:function(){
    
  // }
};
</script>

<style lang="scss" scoped>
</style>
