<template>
  <div class="ui middle aligned center aligned grid" style="padding-top: 7em; padding-bottom: 7em;">
    <div class="ui active dimmer" v-if="loading">
        <div class="ui text loader" dir="rtl">در حال بارگذاری...</div>
    </div>
    <div v-else class="column" style="background-color: white; border: 1px solid #999999; border-radius: 15px; padding: 0px; box-shadow: 3px;">
      <h2 class="ui black header" style="background-color: #cccccc; border-radius: 15px 15px 0px 0px; padding: 15px; margin: 0px;">
        <router-link :to="{name: 'home'}" tag="a" class="content" style="font-size: 25px; font-style: italic; color: #444444;">
          KafePay
        </router-link>
      </h2>
      <form class="ui large form" style="border-radius: 0px 0px 15px 15px; overflow: hidden;">
        <div class="ui stacked segment">
            <h3>
                {{ product.title }}
            </h3>
            <p style="text-align: justify; text-align-last: center; line-height: 30px;">
                {{ product.description }}
            </p>
            <p style="text-align: right; text-justify: justify; line-height: 30px; font-weight: bold;">
                قیمت: {{ product.price }}
            </p>
            <div class="inline field" dir="rtl">
                <p>
                    نام و نام خانوادگی
                </p>
                <input style="text-align: right; margin-right: 10px; border-radius: 5px; border: 2px solid #cacaca !important;" type="text" name="price">
            </div>
            <div class="inline field" dir="rtl">
                <p>
                    شماره تماس
                </p>
                <input style="text-align: right; margin-right: 10px; border-radius: 5px; border: 2px solid #cacaca !important;" type="text" name="phone">
            </div>
            <div @click="submitPayment" class="ui fluid large blue submit button">پرداخت</div>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import { hostUrl } from "../config";

export default {
    data(){
        return {
            loading: true,
            product: null
        }
    },
    methods: {
        submitPayment(){
            alert('درگاه پرداخت فعال وجود ندارد')
        },
        loadProduct(){
            console.log(this.$route.params.payment_id)
            this.axios
                .get(hostUrl + '/api/detail/products/' + this.$route.params.payment_id + '/?format=json',
                {
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                .then(response => {
                    this.product = response.data;
                    this.loading = false;
                })
                .catch(error => {
                    alert('خطا در اتصال به سرور')
                })
        }
    },
    created(){
        if(!this.product){
            this.loadProduct();
        }
    }
}
</script>

<style scoped>
.image {
  margin-top: -100px;
}
.column {
  max-width: 450px;
}
</style>