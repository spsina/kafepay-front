<template>
  <div class="ui pusher" style="height: 100%;" :style="{backgroundColor: bgcolor}">

    <router-view></router-view>
  </div>
</template>



<script>
export default {
  data(){
    return {
      bgcolor: '#ffffff'
    }
  },
  methods: {
    refreshBgColor(){
      if(this.$route.name == 'login' || this.$route.name == 'register'){
        this.bgcolor = '#e3e3e3'
      } else {
        this.bgcolor = '#ffffff'
      }
    }
  },
  watch:{
      $route (to, from){
        this.refreshBgColor();
      },
  },
  created(){
    this.refreshBgColor();
  }
};
</script>



<style>
</style>
