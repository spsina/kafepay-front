<template>
<div class="ui grid" style="height: 100%;">
  <div class="thirteen wide column" style="background-color: #dddddd">
    <router-view></router-view>
  </div>
  <div class="three wide column ui visible inverted right vertical menu" style="min-height: 100%; padding: 1px;">
      <div class="item center aligned right-menu-profile-holder" style="text-align: center; margin: auto;">
          
              <img class="ui small image circular" src="../assets/user.svg" style="margin: 10px auto;">
          

          <p style="font-size: 17px; color: #FFFFFF; margin-bottom: 10px;">
              
                  کیف پول: ۰ ریال
              
          </p>

          <div class="ui secondary button" @click="requestCheckout">درخواست تسویه</div>

          <!-- <div class="ui indicating progress" id="profile-percentage" dir="ltr" data-value="" style="margin: auto; border-radius: 30px; height: 22px; width: 148px;">
            <div class="bar" style="border-radius: 30px; height: 22px; transition-duration: 300ms;">
                <div class="progress"></div>
            </div>
          </div> -->


      </div>

        <div class="item" :class="{'active': $route.name=='dashboard-home'}" style="text-align: right; padding-right: 25px;">
            <router-link :to="{name: 'dashboard-home'}" tag="a">
              <div class="content">
                  صفحه اصلی
              </div>
            </router-link>
        </div>
        
        <div class="ui item accordion" style="text-align: right; padding-right: 25px;"  dir="rtl">
          <div class="title" style="color: white">
            <span style="padding-left: 40%;">اطلاعات کاربری</span>
            <i class="left dropdown icon"></i>
          </div>
          <div class="content">
          
        <div class="item" :class="{'active': $route.name=='dashboard-new-product'}" style="text-align: right; padding-right: 25px;">
            <router-link :to="{name: 'dashboard-new-product'}" tag="a">
              <div class="content">
                  تکمیل یا ویرایش اطلاعات
              </div>
            </router-link>
        </div>
        <div class="item" :class="{'active': $route.name=='dashboard-new-product'}" style="text-align: right; padding-right: 25px;">
            <router-link :to="{name: 'dashboard-new-product'}" tag="a">
              <div class="content">
                  مشاهده اطلاعات
              </div>
            </router-link>
        </div>
          </div>
        </div>
        
        <div class="item" :class="{'active': $route.name=='dashboard-new-product'}" style="text-align: right; padding-right: 25px;">
            <router-link :to="{name: 'dashboard-new-product'}" tag="a">
              <div class="content">
                  محصول جدید
              </div>
            </router-link>
        </div>
        <div class="item" :class="{'active': $route.name=='dashboard-products'}" style="text-align: right; padding-right: 25px;">
            <router-link :to="{name: 'dashboard-products'}" tag="a">
              <div class="content">
                  محصولات
              </div>
            </router-link>
        </div>
        <div class="item" :class="{'active': $route.name=='dashboard-new-gate'}" style="text-align: right; padding-right: 25px;">
            <router-link :to="{name: 'dashboard-new-gate'}" tag="a">
              <div class="content">
                  درگاه پرداخت جدید
              </div>
            </router-link>
        </div>
        <div class="item" :class="{'active': $route.name=='dashboard-gates'}" style="text-align: right; padding-right: 25px;">
            <router-link :to="{name: 'dashboard-gates'}" tag="a">
              <div class="content">
                  لیست درگاه ها
              </div>
            </router-link>
        </div>
        <!-- <div class="item" style="text-align: right; padding-right: 25px;">
            <a href="/dashboard">
              <div class="content">
                  خروج
              </div>
            </a>
        </div> -->
  </div>
</div>
</template>

<script>

export default {
  // beforeRouteEnter(from, to, next){
  //   if(localStorage.getItem('token') == null){
  //     next({name: 'login'})
  //   } else {
  //     next()
  //   }
  // }
  methods: {
    requestCheckout(){
      alert('امکان تسویه وجود ندارد.')
    }
  },
  mounted(){
    $(document).ready(function(){
      $('.ui.accordion').accordion();
      $('.ui.dropdown').dropdown();
    })
  }
}
</script>

<style scoped>
</style>