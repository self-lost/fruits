<template>
    <div class="all" >
        <!-- <good class="abc" :che='this.a' /> -->
        <div class="sp" @click="one()"  v-for="(result,index) in this.$store.state.merch" :key="index">
            <div class="img">
                <img :src='result.img'  >
            </div>
            <p>{{result.mName}}</p>
            <font>{{result.mDescribe}}</font>
            <i>￥{{result.mPrice}}</i>
            <i class='iconfont icon-jiahao' @click.stop  @click="che(result.mId)"></i>
        </div>
    </div>
</template>

<script>
import good from '@/components/goods.vue';
import qs from 'qs';
import $ from 'jquery';
export default {
    data(){
        return {
            goods:[

            ],
            a:[

            ],
            money:0,
        }
},
components:{
    good
},
methods:{
    one:function($event){
        alert(123)
    },
    che:function(mId){
    this.$store.commit('che',{'mId':mId});
    // this.$store.commit('insert');

    }
},
mounted(){
   this.$store.commit('merchandise');
}
}
</script>
<style lang="less" scope>
    .all{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        padding: 0  0.3rem;
        box-sizing: border-box;
    }
    .sp{
        width: 50%;
        height: 4.9rem;
        border-radius: 5px;
        box-shadow: 2px 2px 5px #999;
        background:rgba(248, 248, 255, 0.5);
        margin-top: 10px;
    }
    .img{
         width: 100%;
         height: 60%;
     }
     .img>img{
         width: 100%;
         height: 100%;
     }
    .sp>i:nth-of-type(1){
        color: red;
    }
    p{
        width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
        overflow: hidden;
        line-height: 30px;
    }
    .sp>i:nth-of-type(2){
        position: absolute;
        padding-left:30px;
        font-size: 25px;
    }
    .sp>font{
        display: inline-block;
         width: 100%;
		white-space: nowrap;
		text-overflow: ellipsis;
        overflow: hidden;
        line-height: 30px;
    }
</style>