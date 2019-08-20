<template>
  <div class="homepage-max">
      <div class="abc">
    <push>
    <div class="sousuo">
      <input type="text" v-model="name1" placeholder="" @click="select()" >
    </div>
    <div class="lunbo">
      <div class="swiper-container" id="swiper-container1">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../img/one.jpg"  style="width:100%;height:100%;" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../img/two.jpg"  style="width:100%;height:100%;" alt="">
          </div>
          <div class="swiper-slide">
            <img src="../img/three.jpg"  style="width:100%;height:100%;" alt="">
          </div>
        </div>
        <div class="swiper-pagination"></div>
    </div>
    </div>
    <div  class="merchandise">
    <merchandise  />
    </div>

    </push>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import "../js/flexible.min.js";
import merchandise from '@/components/merchandise.vue'
import push from '@/components/push1.vue'
export default {

  data(){
    return {
      name1:'榴莲',
      msg: "Welcome to Your Vue.js App"
    }
  },
   components: {
    merchandise,
    push
  },
  methods: {
    select:function(){
      this.$router.push('/select');
    },
    _initSwiper:function(){
      var mySwiper = new Swiper("#swiper-container1", {
        pagination: {
          el: ".swiper-pagination",
          dynamicBullets: true,
          clickable :true,
        },
        autoplay: {
          delay: 2000,
          stopOnLastSlide: false,
          disableOnInteraction: false
        },
        loop: true
      });
    }
  },
  created() {

  },
  mounted() {
    this._initSwiper();
  }
};
</script>
<style scope lang='less'>
@font:Roboto, Helvetica, Arial, sans-serif;
.homepage-max {
  // width: 7.5rem;
  // height: 7.5rem; 
  width: 100%;
}
.homepage-max  .swiper-container{
  width: 100%;
  height: 180px;
  margin-left: auto;
  margin-right: auto;
}

.homepage-max>.abc  .sousuo{
  position: fixed;
  left: 0;
  top: 0;
  width:93%;
  height:31px;
  z-index: 5;
}
.homepage-max .sousuo>input{
  height: 100%;
  border-radius: 3px;
  border: none;
  border: 1px #000 solid;
  outline: none;
  padding-left: 45%;
  background: #F8F8FF;
  color: #999;
  font-size: 18px;
}
.homepage-max .merchandise{
  width: 100%;
}
.homepage-max.abc{
    width: 100%;
    border: 1px #000 solid;

}
</style>