<template>
  <div class="ui middle aligned center aligned grid" style="margin-top: 3em;">
    <div class="column">
      <h2 class="ui teal header">
        <div class="content">
          Login to your account
        </div>
      </h2>
      <form class="ui large form">
        <div class="ui stacked segment">
          <div class="field">
            <div class="ui left icon input">
              <i class="user icon"></i>
              <input type="text" name="username" v-model="user.username" placeholder="Email">
            </div>
          </div>
          <div class="field">
            <div class="ui left icon input">
              <i class="lock icon"></i>
              <input type="password" name="password" v-model="user.password" placeholder="Password">
            </div>
          </div>
          <div class="ui fluid large teal submit button">Login</div>
        </div>

        <div class="ui error message"></div>

      </form>

      <div class="ui message">
        New to us? <router-link :to="{name: 'register'}" tag="a">Sign Up</router-link>
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
  methods: {
    submit() {
      this.loading = true;
      var vinst = this;
      axios
        .post(this.$store.state.obtainTokenEndpoint,
        this.user,
        {
          headers: {
            // 'Access-Control-Allow-Origin': '*',
            "Content-type": "application/json"
          }
        })
        .then(response => {
          console.log("hey")
          // alert("Logged in successfully");
          this.$store.commit("updateToken", response.data.key);
          if (this.$route.query.next) {
            this.$router.push(this.$route.query.next);
          } else {
            this.$router.push({ name: "projects" });
          }
          vinst.loading = false;
        })
        .catch(error => {
          console.log("hey")
          if (error.response) {
            console.log(error.response);
            alert("Invalid Email or Password");
          } else {
            alert("Couldn't get server response");
          }
          console.log(error);
          this.$store.commit("removeToken");
          vinst.loading = false;
        });
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