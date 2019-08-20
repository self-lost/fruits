<template>
    <div class="address-max">
        <div class="top">
                <i class="iconfont icon-fanhui" @click="onlineShopping()"></i>
                <span>选择收货地址</span>
                </div>
    </div>
</template>

<script>
export default {
    methods:{
        onlineShopping(){
            this.$router.push('/onlineShopping')
             this.$store.commit('showMenu');
        }
    },
    mounted(){
        this.$store.commit('hideMenu');
        this.$store.commit('hidemoney');
    }
}
</script>

<style scope lang="less">
@font:Roboto, Helvetica, Arial, sans-serif;

    .max{
    width: 100%;
    height: 100vh;
    }
    .top>i{
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    font-size: 25px !important;
}
    .top>span{
        font: 17px @font;
    }
</style>