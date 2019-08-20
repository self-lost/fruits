<template>
    <div  class="shopping-max">
        <push>
            <div class="push-max">
        <div class="top">
             <i class="iconfont icon-iconfontzhizuobiaozhun16"  @click="address()"></i>
              <span>购物车</span>
               </div>
        <div  class="wupin">
            <goods/>
<!-- <img src="../img/gouwuche.jpg" style="width:100%;" alt=""> -->

        </div>
        <h3>猜你喜欢</h3>
        <merchandise />

        </div>
        
        </push>
    </div>
</template>
<script>
import merchandise from '@/components/merchandise.vue'
import push from '@/components/push1.vue'
import goods from '@/components/goods.vue'
export default {
        data(){
        return {
            money:0,
        };
    },

    methods:{
        address(){
            this.$router.push('/address')
        }
    },
    components: {
    merchandise,
    push,
    goods
  },
  mounted(){
    this.$store.commit('showmoney');
  }
}
</script>
<style scope>
.shopping-max{
    width: 100%;
    height: auto;
}
.shopping-max> .top{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 5%;
}
   .shopping-max .top i{
       position: absolute;
       left: 38%;
       font-size: 20px !important;
    }
   .shopping-max>.top>span{
        font-size: 16px;
	    line-height: 5vh;
        margin: 0;
        padding: 0;
    }
    .push-max{
        width: 100%;
        height: 90%;
        overflow: scroll;
        background: #f6f6f6;
    }
    
</style>