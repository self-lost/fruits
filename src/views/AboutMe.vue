!<template>
    <div class="AboutMe-max">
        <div class="top">
                <i class="iconfont icon-fanhui" @click="my()"></i>
                <span>我的</span>
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
.AboutMe-max{
    width: 100%;
    height: 100vh;
    }
    .AboutMe-max>.top{
        width: 100%;
        height: 100%;
    }
   .AboutMe-max>.top>i{
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    font-size: 25px !important;
}
    .AboutMe-max>.top>span{
        font: 17px @font;
    }
</style>