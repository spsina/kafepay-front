<template>
    <div class="ui segment" style="border-radius: 15px; margin: 30px auto; width: 90%; text-align: center; padding: 0px;">
        <div class="header" style="border-radius: 15px 15px 0px 0px; background-color: #777777; color: #dddddd; text-align: center; font-size: 20px; padding: 13px;">
            <div style="margin: auto"> ثبت محصول</div>
        </div>
        <div class="ui form" style="border-radius: 0px 0px 15px 15px; text-align: right; padding: 10px; border: 1px solid #777777;" action="/projects/create/" method="post"> 
                <div class="ui active inverted dimmer" v-if="loading">
                    <div class="ui text loader" dir="rtl">در حال بارگذاری...</div>
                </div>
                <div class="field">
                    <p>
                        عنوان درگاه
                    </p>
                    <input @keypress.enter="submit" v-model="gate.title" style="text-align: right; border-radius: 5px; border: 2px solid #cacaca !important;" type="text" name="title">
                </div>
                <div class="field">
                    <p>
                        شرح جزییات درگاه
                    </p>
                    <textarea v-model="gate.description" style="text-align: right; border-radius: 5px; border: 2px solid #cacaca !important;" name="description"></textarea>
                </div>
                <div class="inline field" dir="rtl">
                    <p>
                        آدرس سایت
                    </p>
                    <input @keypress.enter="submit" v-model="gate.url" dir="ltr" style="text-align: left; border-radius: 5px; border: 2px solid #cacaca !important;" type="text" name="url">
                </div>
                <div style="text-align: center;">
                    <input @click="submit" class="ui positive button" value="ارسال" type="submit">
                </div>
            </div>
    </div>
</template>
<script>
import { hostUrl } from "../../config";

export default {
    data(){
        return {
            loading: false,
            gate: {
                title: null,
                description: null,
                url: null,
            }
        }
    },
    methods: {
        submit(){
            if( $('.ui.form').form('is valid')) {
                this.loading = true;
                console.log(localStorage.getItem('token'));
                console.log(this.$store.getters.api_token)
                this.axios
                    .post(hostUrl + '/api/create/gate/?format=json',
                    this.gate,
                    {
                        headers: {
                            Authorization: "Token " + this.$store.getters.api_token,
                            "Content-type": "application/json"
                        }
                    })
                    .then(response => {
                        alert('با موفقیت ثبت شد');
                        this.$router.push({name: 'dashboard-gates'});
                        this.loading = false;
                    })
                    .catch(error => {
                        if(error.response){
                            alert('لطفا ورودی های خود را کنترل کنید')
                        } else {
                            alert('خطا در اتصال به سرور')
                        }
                        this.loading = false;
                    })
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
              title: {
                identifier  : 'title',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'لطفا عنوان را وارد کنید'
                  }
                ]
              },
              description: {
                identifier  : 'description',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'لطفا توضیحات را وارد کنید'
                  }
                ]
              },
              url: {
                identifier  : 'url',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'لطفا قیمت را وارد کنید'
                  }
                ]
              },
            }
          })
      });
  }
}
</script>
<style>

</style>
