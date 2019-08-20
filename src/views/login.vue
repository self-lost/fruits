<template>
    <div  class="login-max">
       <div class="login-top">
                <i class="iconfont icon-fanhui" @click="my()"></i>
                <span>login</span>
                </div>
            <loginform />
    </div>
</template>
<script>
import loginform from  '@/components/login-form.vue'
export default {
   methods:{
        my(){
            this.$router.push('/my')
             this.$store.commit('showMenu');
        }
    },
    components:{
        loginform
    },
    mounted(){
        this.$store.commit('hideMenu');
    }
}
</script>
<style scope lang="less">
    @font:Roboto, Helvetica, Arial, sans-serif;
    .login-max{
        position: relative;
        left: 0;
        top: 0;
        width: 100%;
        height: 100vh;
    }
    .login-top{
    width: 100%;
    height: 20%;
    }
    .login-top>i{
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    font-size: 25px !important;
}
    .login-top>span{
        font: 17px @font;
    }
</style>