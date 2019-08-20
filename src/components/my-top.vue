<template>
    <div class="my-top-max">
        <span v-if="this.$store.state.user==''" @click="login()">登录/注册</span> 
        <span v-else>{{ this.$store.state.user[0].cLoginName }}</span>
        <i class="iconfont icon-xiaoxi "  @click="message()"></i>
        <div class="photo" @click="AboutMe()"> 
            <img v-if="this.$store.state.user==''" src=" " alt="">
            <img v-else :src="this.$store.state.user[0].toxiang" alt="">
             </div>
    </div>
</template>
<script>
export default {
    data(){
        return {};
    },
    methods:{
        login(){
            this.$router.push('/login')
        },
        message(){
            this.$router.push('/message')
        },
        AboutMe(){
            this.$router.push('/AboutMe')
        }


    }
}
</script>
<style scope lang="less">
@font:Roboto, Helvetica, Arial, sans-serif;
   .my-top-max{
        width: 100%;
        height: 25%;        
        background: linear-gradient( 70deg, #FFC0CB , #F08080);

    }
    .my-top-max >.photo{
        position: absolute;
        top: 30px;
        margin-left: 20px;
        width: 70px;
        height:70px;
        border-radius: 50%;
        border: 1px #FFF solid;
        background-size: 100%;
    }
    .my-top-max >.photo>img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .my-top-max>span{
        font: 20px @font;
        display: inline-block;
        margin-top: 15%;
        margin-left: -20px;
    }

    .my-top-max>i{
        position: absolute;
        left: 85%;
        top: 50px;
        font-size: 25px !important;
    }

</style>