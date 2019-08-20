<template>
    <div class="my-order">
        <div class="dingdan">
           <span> 我的订单</span>
           <font @click="alldingdan()">
               全部订单<i class="iconfont icon-you"></i>
           </font>
            </div>
        <div class="biao">
            <ul>
                <li  @click="zhifu()">
                    <i class="iconfont icon-daizhifu"></i>
                    <font>待支付</font>
                    </li>
                <li  @click="daipeisong()">
                    <i class="iconfont icon-daipeisong"></i>
                    <font>待配送</font>
                    </li>

                <li  @click="peisongzhong()">
                    <i class="iconfont icon-peisongzhong"></i>
                    <font>配送中</font>
                </li>
                <li  @click="daipingjia()">
                    <i class="iconfont icon-pingjia"></i>
                    <font>待评价</font>
                </li>
                <li  @click="shohou">
                    <i class="iconfont icon-shouhou"></i>
                    <font>售后/退款</font>
                </li>
            </ul>
            </div>
    </div>
</template>
<script>
export default {
        data(){
            return{};
        },
        methods:{
            zhifu(){
                alert('待支付')
            },
            daipeisong(){
                alert('待配送')
            },
            peisongzhong(){
                alert('配送中')
            },
            daipingjia(){
                alert('待评价')
            },
            shohou(){
                alert('售后')
            },
            alldingdan(){
                this.$store.commit('userOrderform');
                alert('全部订单')
            }
        }
}
</script>
<style lang="less">
@font: Roboto, Helvetica, Arial, sans-serif;
    .my-order{
        height: auto;
        border: 1px #000 solid;
        background: rgba(227, 66, 0, 0.4);
        margin-top: 10px;
    }
    .dingdan{
        height: 30px;
        text-align: left;
        padding-left: 10px;
        padding-top: 2px;
        box-sizing: border-box;
    }
    .dingdan>span{
        font:18px @font;
    }
    .dingdan>font{
        position: absolute;
        right: 15px;
        padding-top: 2px;
        font:14px @font;
    }
    .biao{
        margin-top: 15px;
        width: 100%;
        height: 55px;
    }
    .my-order ul li i{
    display: block;  
    font-size: 20px !important;
  }
    .my-order ul li{
        float: left;
        margin-left: 25px;

    }
    .my-order ul li font{
        font: 13px @font;

    }
</style>