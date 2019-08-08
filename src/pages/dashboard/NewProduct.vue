<template>
    <div class="ui segment" style="border-radius: 15px; margin: 30px auto; width: 90%; text-align: center; padding: 0px;">
        <div class="header" style="border-radius: 15px 15px 0px 0px; background-color: #777777; color: #dddddd; text-align: center; font-size: 20px; padding: 13px;">
            <div style="margin: auto"> ثبت محصول</div>
        </div>
        <form class="ui form" style="border-radius: 0px 0px 15px 15px; text-align: right; padding: 10px; border: 1px solid #777777;" action="/projects/create/" method="post">
                <div class="field">
                    <p>
                        عنوان محصول
                    </p>
                    <input v-model="product.title" style="text-align: right; border-radius: 5px; border: 2px solid #cacaca !important;" type="text" name="title">
                </div>
                <div class="field">
                    <p>
                        شرح جزییات محصول
                    </p>
                    <textarea v-model="product.description" style="text-align: right; border-radius: 5px; border: 2px solid #cacaca !important;" name="description"></textarea>
                </div>
                <div class="inline field" dir="rtl">
                    <p>
                        قیمت
                    </p>
                    <input v-model="product.price" style="text-align: right; border-radius: 5px; border: 2px solid #cacaca !important;" type="number" name="price">
                </div>
                <div style="text-align: center;">
                    <input class="ui positive button" value="ارسال" type="submit">
                </div>
            </form>
    </div>
</template>
<script>
import { hostUrl } from "../../config";

export default {
    data(){
        return {
            loading: false,
            product: {
                title: null,
                description: null,
                price: 100,
            }
        }
    },
    methods: {
        submit(){
            this.loading = true;
            console.log(localStorage.getItem('token'));
            console.log(this.$store.getters.api_token)
            this.axios
                .post(hostUrl + '/api/create/product/?format=json',
                this.product,
                {
                    headers: {
                        Authorization: "Token " + this.$store.getters.api_token,
                        "Content-type": "application/json"
                    }
                })
                .then(response => {
                    alert('با موفقیت ثبت شد');
                    this.$router.push({name: 'dashboard-products'});
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
              price: {
                identifier  : 'price',
                rules: [
                  {
                    type   : 'empty',
                    prompt : 'لطفا قیمت را وارد کنید'
                  }
                ]
              },
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
}
</script>
<style>

</style>
