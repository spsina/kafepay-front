<template>
    <div v-if="$route.name != 'login' && $route.name != 'register'" dir="rtl" id="nav" class="ui large inverted pointing menu fixed secondary" style="border: 0px;">
        <div class="backgroundnav">
            <p style="font-style: italic; font-weight: bold; margin-top: 13px; color: #fafafa; font-size: 25px;">
                CafePay

            </p>
        </div>

        

        <div class="contentnav">
            <div class="item">

                <a class="cafepay-right-item mobile-button" style="font-size: 21px; "> <i class="content icon"></i> </a>
                <router-link :to="{name: 'register'}" tag="a" class="cafepay-right-item">ثبت نام</router-link>
                <router-link :to="{name: 'login'}" tag="a" class="cafepay-right-item">ورود</router-link>
            </div>
            
        </div>
    </div>
</template>

<script>
    var x = 0;
    function refreshNavbar(){
        $(document).ready(function() {
            let headerHeight = document.getElementById("header") ? Math.max(document.getElementById("header").offsetHeight - 60, 0) : 0;
            if ($(window).scrollTop() <= headerHeight) {
                if(x != 1){
                    x = 1;
                    $(".menu.secondary")
                    .animate({ paddingTop: "5px", paddingBottom: "5px"}, "fast")
                    if (headerHeight > 0) {
                        $(".menu.secondary")
                        .css("background", "none");
                    } else {
                        $(".menu.secondary")
                        .css("background-color", "#333333");
                    }
                }
            }
            else if(x != 2) {
                x = 2;
                $(".menu.secondary").animate({ paddingTop: "0px", paddingBottom: "0px" }, "fast")
                .css("background-color", "#333333");
            }
        });
    };
    export default {
        watch:{
            $route (to, from){
                refreshNavbar();
            },
        },
        mounted() {
            refreshNavbar();
            $(document).ready(function() {
                window.onresize = refreshNavbar;
                $(window).scroll(refreshNavbar);
            });
        }
    }
</script>

<style scoped>
.cafepay-right-item {
    padding: 3px 10px;
}
#nav {
    padding-top: 5px;
    padding-bottom: 5px;
}

/* Mobile */

@media only screen and (min-width: 767px) {
  [class*="mob-only"]{
    display: none !important;
  }
}

@media only screen and (max-width: 767px) {
  [class*="desk-only"]{
    display: none !important;
  }
}

i.search.icon {left: 0}
#searchInput {
    direction: rtl;
    text-align: right;
    padding-right: 1em !important;
}

#toplogo {
    width: 70px;
    margin-top: 13px;
    opacity: 0;
}
.contentnav{
    position: relative;
    z-index: 100;
}

.backgroundnav{
    width: 100%;
    text-align: center;
    position: absolute;
    z-index: -100;
}

#nav .dropdown .menu .item{
    text-align: right;
}

.ui .input {
    height: 40px;  margin-top:9px;
}

.faded {
    opacity: 0.7;
}

.notfaded {
    opacity: 0.85;
}

#topsearchbar input {
    border-radius: 1000px;
}
</style>