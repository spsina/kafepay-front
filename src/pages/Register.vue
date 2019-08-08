<template>
  <div class="ui middle aligned center aligned grid" style="padding-top: 7em;">

    <div class="column" style="background-color: white; border: 1px solid #999999; border-radius: 15px; padding: 0px; box-shadow: 3px;">
      <h2 class="ui black header" style="background-color: #cccccc; border-radius: 15px 15px 0px 0px; padding: 15px; margin: 0px;">
        <router-link :to="{name: 'home'}" tag="a" class="content" style="font-size: 25px; font-style: italic; color: #444444;">
          KafePay
        </router-link>
      </h2>
      <form class="ui large form">
          <div class="ui active inverted dimmer" v-if="loading">
              <div class="ui text loader" dir="rtl">در حال بارگذاری...</div>
          </div>        <div class="ui stacked segment">
          <div class="field">
            <div class="ui right icon input">
              <i class="user icon"></i>
              <input type="text" style="text-align: right; border-radius: 5px; border: 1px solid #cacaca !important;" name="username" v-model="user.username" placeholder="نام کاربری">
            </div>
          </div>
          <div class="field">
            <div class="ui right icon input">
              <i class="mail icon"></i>
              <input type="text" style="text-align: right; border-radius: 5px; border: 1px solid #cacaca !important;" name="email" v-model="user.email" placeholder="ایمیل">
            </div>
          </div>
          <div class="field">
            <div class="ui right icon input">
              <i class="lock icon"></i>
              <input type="password" style="text-align: right; border-radius: 5px; border: 1px solid #cacaca !important;" name="password1" v-model="user.password1" placeholder="کلمه عبور">
            </div>
          </div>
          <div class="field">
            <div class="ui right icon input">
              <i class="lock icon"></i>
              <input type="password" style="text-align: right; border-radius: 5px; border: 1px solid #cacaca !important;" name="password2" v-model="user.password2" placeholder="کلمه عبور">
            </div>
          </div>
          <div class="ui fluid large blue submit button">ثبت نام</div>
        </div>

      </form>

      <div class="ui message" style="border-radius: 0px 0px 15px 15px; background-color: #dddddd; border: 0px;">
        قبلا ثبت نام کرده اید؟ <router-link :to="{name: 'login'}" tag="a">وارد شوید</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { hostUrl } from "../config";
export default {
  data() {
    return {
      user: {
        username: "",
        password1: "",
        password2: "",
        email: "",
      },
      loading: false
    };
  },
  methods: {
    submit() {
      if(this.user.password1 == this.user.password2){
        this.loading = true;
        var vinst = this;
        this.axios
          .post(hostUrl + '/api/create/profile/?format=json',
          {
            username: this.user.username,
            password: this.user.password1
          },
          {
            headers: {
              // 'Access-Control-Allow-Origin': '*',
              "Content-type": "application/json"
            }
            // withCredentials: true,
            //   crossDomain: true,
          })
          .then(response => {
            vinst.$store.commit("updateToken", response.data.key);
            vinst.$router.push({name: 'dashboard-home'});
          })
          .catch(error => {
            if(error.response){
              alert('لطفا ورودی های خود را کنترل کنید')
            } else {
              alert('خطا در اتصال به سرور')
            }
            console.log('error')
            console.log(error.response)
          })
      } else {
        alert('کلمه عبور با تکرار همخوانی ندارد')
      }
    }
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
                    prompt : 'لطفا نام کاربری را وارد کنید'
                  }
                ]
              },
              email: {
                identifier  : 'email',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'لطفا ایمیلتان را وارد کنید'
                  },
                  {
                    type   : 'email',
                    prompt : 'Please enter a valid e-mail'
                  }
                ]
              },
              password1: {
                identifier  : 'password1',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'لطفا پسوورد را وارد کنید'
                  }
                ]
              },
              password2: {
                identifier  : 'password2',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'لطفا کلمه عبورتان را تایید کنید'
                  }
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