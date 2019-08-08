<template>
    <div>
        <div class="ui active dimmer" v-if="loading">
            <div class="ui text loader" dir="rtl">در حال بارگذاری...</div>
        </div>
        <div v-else-if="gates.length == 0" class="ui segment" style="margin: 30px auto; width: 90%; text-align: center;">
            <p style="text-align: right; text-justify: justify; line-height: 30px;">
                محصولی برای نمایش وجود ندارد
            </p>
        </div>
        <template v-else>
            <div v-for="gate in gates" class="ui segment" style="margin: 30px auto; width: 90%; text-align: right;">
                <h3>
                    عنوان درگاه: {{ gate.title }}
                </h3>
                <p dir="rtl" style="text-align: right; text-justify: justify; line-height: 30px;">
                    {{ gate.description }}
                </p>
                <p style="text-align: right; text-justify: justify; line-height: 30px; font-weight: bold;">
                    آدرس سایت
                </p>
                <a :href="gate.url">
                     {{ gate.url }}
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
            gates: null
        }
    },
    methods: {
        loadgates(){
            console.log(localStorage.getItem('token'));
            console.log(this.$store.getters.api_token)
            this.axios
                .get(hostUrl + '/api/list/gates/?format=json',
                {
                    headers: {
                        Authorization: "Token " + this.$store.getters.api_token,
                        "Content-type": "application/json"
                    }
                })
                .then(response => {
                    this.gates = response.data;
                    this.loading = false;
                })
                .catch(error => {
                    alert('خطا در اتصال به سرور')
                })
        }
    },
    created(){
        if(!this.gates){
            this.loadgates();
        }
    }
}
</script>
<style>

</style>
