<template>
  <div id="app">
    <router-view  />
    <div class="money" v-show="money">
            <input type="checkbox" value="全选">
            <p>
                合计：{{this.$store.state.totalPrice.toFixed(2)}}
          </p>
            <button @click="jiesuan()">结算</button>
        </div>
    <ul class="menu" v-show="menu">
      <li @click="homepage($event)">
        <i class="iconfont icon-shouye" style="color:blue;"></i>
        <font style="color:blue;">首页</font>
      </li>
      <li @click="onlineShopping($event)">
        <i class="iconfont icon-gouwuchekong"></i>
        <font>购物车</font>
      </li>
      <li @click="my($event)">
        <i class="iconfont icon-wode"></i>
        <font>我的</font>
      </li>
    </ul>
  </div>
</template>
<script>
import { link } from "fs";
export default {
  data() {
    return {
      num:0,
    }
  },
  computed:{
    menu:function(){
      return this.$store.state.menu;
    },
    money:function(){
      return this.$store.state.money;
      
    }
  },
 
  methods: {
    goods(){
    },
    changecolor(e) {
      var lis = document.querySelectorAll(".menu li");
      for (var i = 0; i < lis.length; i++) {
        lis[i].querySelector("i").style.color = "black";
        lis[i].querySelector("font").style.color = "black";
      }
      e.currentTarget.querySelector("i").style.color = "blue";
      e.currentTarget.querySelector("font").style.color = "blue";
    },
    homepage(e) {
      this.changecolor(e);
    this.$store.commit('hidemoney');
      this.$router.push("/homepage");
    },
    onlineShopping(e) {
      this.changecolor(e);
    this.$store.commit('showmoney');
      this.$router.push("/onlineShopping");
    },
    my(e) {
      this.changecolor(e);
    this.$store.commit('hidemoney');
      this.$router.push("/my");
    },
    jiesuan(){
      alert('一共'+this.$store.state.totalPrice.toFixed(2))
    },
     
  },
  mounted(){
    this.$store.commit('hidemoney');
  }
};
</script>
<style lang='less' scope>
@font: Roboto, Helvetica, Arial, sans-serif;
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#app .menu {
  position: fixed;
  left: 0;
  top:91.1%;
  bottom: 0;
  width: 100%;
  height: 60px;
  display: flex;
  background: white;
  z-index: 5;
}
#app  .menu li {
  width: 100%;
  height: 50px;
  padding-top: 5px;
}
 #app  .menu li i {
  display: block;
  font-size: 25px !important;
}
 font{
  font: 12px @font;
}
.money{
        position: fixed;
        top: 85.2%;
        width: 100%;
        height: 6%;
        background: #FFF;
        z-index: 5;
    }
    .money>input[type='checkbox']{
        position: absolute;
        left: 0;
        top: 20%;
        width: 20px;
        height: 20px;
        border: 1px #000 solid;
    }
    .money>p{
      position: absolute;
      top: 10%;
      left: 19%;
      width: 40%;
    }
    .money>button{
        position: absolute;
        left: 60%;
        top: 0;
        width: 40%;
        height: 100%;
        border: none;
        background: #FF1493;
        color: white;
        font-size: 20px;
        outline: none; 
    }
</style>
