<template>
    <div>
        <div class="ui active dimmer" v-if="loading">
            <div class="ui text loader" dir="rtl">در حال بارگذاری...</div>
        </div>
        <div v-else-if="products.length == 0" class="ui segment" style="margin: 30px auto; width: 90%; text-align: center;">
            <p style="text-align: right; text-justify: justify; line-height: 30px;">
                محصولی برای نمایش وجود ندارد
            </p>
        </div>
        <template v-else>
            <div v-for="product in products" class="ui segment" style="margin: 30px auto; width: 90%; text-align: right;">
                <h3>
                    عنوان محصول: {{ product.title }}
                </h3>
                <p dir="rtl" style="text-align: right; text-justify: justify; line-height: 30px;">
                    {{ product.description }}
                </p>
                <p style="text-align: right; text-justify: justify; line-height: 30px; font-weight: bold;">
                    قیمت: {{ product.price }}
                </p>
                <p style="text-align: right; text-justify: justify; line-height: 30px; font-weight: bold;">
                    لینک پرداخت
                </p>
                <a :href="'http://kafepay.com/payment/' + product.uuid">
                     http://kafepay.com/payment/{{ product.uuid }}
                </a>
            </div>
        </template>
    </div>
</template>
<script>
import { hostUrl } from "../../config";

export default {
    data(){
        return {
            loading: true,
            products: null
        }
    },
    methods: {
        loadProducts(){
            console.log(localStorage.getItem('token'));
            console.log(this.$store.getters.api_token)
            this.axios
                .get(hostUrl + '/api/list/products/?format=json',
                {
                    headers: {
                        Authorization: "Token " + this.$store.getters.api_token,
                        "Content-type": "application/json"
                    }
                })
                .then(response => {
                    this.products = response.data;
                    this.loading = false;
                })
                .catch(error => {
                    alert('خطا در اتصال به سرور')
                })
        }
    },
    created(){
        if(!this.products){
            this.loadProducts();
        }
    }
}
</script>
<style>

</style>
