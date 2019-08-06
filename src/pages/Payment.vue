<template>
  <div class="ui middle aligned center aligned grid" style="margin-top: 7em;">
    <div class="column" style="background-color: white; border: 1px solid #999999; border-radius: 15px; padding: 0px; box-shadow: 3px;">
      <h2 class="ui black header" style="background-color: #cccccc; border-radius: 15px 15px 0px 0px; padding: 15px; margin: 0px;">
        <router-link :to="{name: 'home'}" tag="a" class="content" style="font-size: 25px; font-style: italic; color: #444444;">
          CafePay
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
            <div class="ui fluid large blue submit button">پرداخت</div>
        </div>

      </form>

    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
        product: {
            title: 'دمپایی',
            description: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
            price: '۲۰۰۰۰۰ تومان',
            link: 'http://kaafepay.ir/payment/2r3ior23-awfef2g-afew23-fwaef'
        },
        name: '',
    };
  },
  created(){
    var vinst = this;
    $(document)
      .ready(function() {
        $('.ui.form')
          .form()
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