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
                <p style="text-align: right; text-justify: justify; line-height: 30px;">
                    {{ product.description }}
                </p>
                <p style="text-align: right; text-justify: justify; line-height: 30px; font-weight: bold;">
                    قیمت: {{ product.price }}
                </p>
                <p style="text-align: right; text-justify: justify; line-height: 30px; font-weight: bold;">
                    لینک پرداخت
                </p>
                <a :href="product.link">
                     {{ product.link }}
                </a>
            </div>
        </template>
    </div>
</template>
<script>
export default {
    data(){
        return {
            loading: true,
            products: null
        }
    },
    methods: {
        loadProducts(){
            setTimeout(() => {
                this.products = [];
                for (let index = 0; index < 10; index++) {
                    this.products.push({
                        title: 'دمپایی',
                        description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
                        price: '۲۰۰۰۰۰ تومان',
                        link: 'http://kaafepay.ir/payment/2r3ior23-awfef2g-afew23-fwaef'
                    });
                }
                this.loading = false;
            }, 1000);
        }
    },
    mounted(){
        if(!this.products){
            this.loadProducts();
        }
    }
}
</script>
<style>

</style>
