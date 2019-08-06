<template>
  <div class="ui middle aligned center aligned grid" style="margin-top: 7em;">
    <div class="column" style="background-color: white; border: 1px solid #999999; border-radius: 15px; padding: 0px; box-shadow: 3px;">
      <h2 class="ui black header" style="background-color: #cccccc; border-radius: 15px 15px 0px 0px; padding: 15px; margin: 0px;">
        <router-link :to="{name: 'home'}" tag="a" class="content" style="font-size: 25px; font-style: italic; color: #444444;">
          CafePay
        </router-link>
      </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui right icon input">
              <i class="user icon"></i>
              <input type="text" style="text-align: right; border-radius: 5px; border: 1px solid #cacaca !important;" name="username" v-model="user.username" placeholder="نام کاربری">
            </div>
          </div>
          <div class="field">
            <div class="ui right icon input">
              <i class="lock icon"></i>
              <input type="password" style="text-align: right; border-radius: 5px; border: 1px solid #cacaca !important;" name="password" v-model="user.password" placeholder="کلمه عبور">
            </div>
          </div>
          <div class="ui fluid large blue submit button">ورود</div>
        </div>

      </form>

      <div class="ui message" style="border-radius: 0px 0px 15px 15px; background-color: #dddddd; border: 0px;">
        حساب ندارید؟ <router-link :to="{name: 'register'}" tag="a">ثبت نام کنید</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      user: {
        username: "",
        password: ""
      },
      loading: false
    };
  },
  created(){
    var vinst = this;
    $(document)
      .ready(function() {
        $('.ui.form')
          .form({
            fields: {
              username: {
                identifier  : 'username',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter your Email'
                  },
                  // {
                  //   type   : 'email',
                  //   prompt : 'Please enter a valid e-mail'
                  // }
                ]
              },
              password: {
                identifier  : 'password',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'Please enter your Password'
                  },
                  // {
                  //   type   : 'length[6]',
                  //   prompt : 'Your password must be at least 6 characters'
                  // }
                ]
              }
            }
          })
          .submit(function(event){
            if( $('.ui.form').form('is valid')) {
              event.preventDefault();
              vinst.submit();
            }
          });
      });
  }
};
</script>

<style scoped>
.image {
  margin-top: -100px;
}
.column {
  max-width: 450px;
}
</style>