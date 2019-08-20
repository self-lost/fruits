!<template>
    <div class="message-max">
        <div class="top">
                <i class="iconfont icon-fanhui" @click="my()"></i>
                <span>消息</span>
                </div>
    </div>
</template>
<script>
export default {
  methods:{
        my(){
            this.$router.push('/my')
             this.$store.commit('showMenu');
        }
    },
    mounted(){
        this.$store.commit('hideMenu');
    }
}

</script>
<style scope lang="less">
    @font:Roboto, Helvetica, Arial, sans-serif;
.message-max{
    width: 100%;
    height: 100vh;
    }
    .message-max>.top{
        width: 100%;
        height: 100%;
    }
   .message-max>.top>i{
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    font-size: 25px !important;
}
    .message-max>.top>span{
        font: 17px @font;
    }
</style>