<template>
    <div class="my-fuwu">
        <div  class="fuwu">
        <span>我的服务</span>
        </div>
        <div class="tu">
            <ul>
            <li @click="huiyuan()">
                <i class="iconfont icon-huiyuan"></i>
                <font>储存送会员</font>
            </li>
            <li @click="pintuan()">
                <i class="iconfont icon-pintuan"></i>
                <font>我的拼团</font>
            </li>
            <li @click="tuijian()">
                <i class="iconfont icon-tuijianyouli"></i>
                <font>推荐有礼</font>
            </li>
            <li @click="jifen()">
                <i class="iconfont icon-integral"></i>
                <font>积分商场</font>
            </li>
            <li @click="hongbao()">
                <i class="iconfont icon-hongbao"></i>
                <font>邀请得红包</font>
            </li>
            <li @click="dizhi()">
                <i class="iconfont icon-shouhuodizhi"></i>
                <font>收货地址</font>
            </li>
            <li @click="kefu()">
                <i class="iconfont icon-kefu"></i>
                <font>客服与帮助</font>
            </li>
             <li @click="shezhi()">
                <i class="iconfont icon-shezhi"></i>
                <font>设置</font>
            </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{}
    },
    methods:{
        huiyuan(){
            alert('会员')
        },
        pintuan(){
            alert('拼团')
        },
        tuijian(){
            alert('推荐')
        },
        jifen(){
            alert('积分')
        },
        hongbao(){
            alert('邀请得红包')
        },
        dizhi(){
            alert('地址')
        },
        kefu(){
            alert('客服')
        },
        shezhi(){
            alert('设置')
        }
    }
}
</script>
<style scope lang="less">
    .my-fuwu{
        width: 100%;
        height: auto;
        position: absolute;
        margin-top: 15px;
        background: rgba(11, 321, 333, 0.5)
    }
    .fuwu{
        text-align: left;
    }
    .fuwu span{
        margin-left: 15px;
        font-size: 18px;
    }
    .tu{
        width:100%;
    }
    .tu ul li {
        float: left;
        margin-left: 50px;
        margin-top: 30px;
        margin-bottom: 20px;
    }
    .tu ul li i{
        display: block;
        font-size: 30px ;
    }

</style>