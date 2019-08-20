<template>
    <div  class="top-max"> 
        <div>
            <font>手机号</font>    
            <input type="text" placeholder="请输入您的手机号" v-model="haoma"  name="haoma">
        </div>
        <div>
            <font>验证码</font>    
            <input type="text" placeholder="请输入验证码" v-model="yanzheng" @keyup.enter="login()">
            <input type="button" @click="yanzhengma()"  value="获取验证码">  
        </div>
        <input type="submit" @click="login()" value="登录">
    </div>
</template>
<script>
import qs from 'qs';
export default {
        data(){
            return{
                haoma:'',
                yanzheng:'',
                count:0
            };

        },methods:{
        yanzhengma:function(){
            alert('123')
        },
        login(){
            if(this.haoma&&this.yanzheng!=''){
            this.$store.commit('login',{'haoma':this.haoma,'yanzheng':this.yanzheng});
                    this.$router.push('/my')
            // if(this.$store.state.user!=''){
            //     }else{
            //         alert('密码或账号错误')
            //         return;
            //     }
            }else{
                alert('请输入')
                return;
            }
        }

        }
}
</script>
<style lang="less" scope>
    .top-max{
        position: absolute;
        left:0;
        width: 100%;
        height: auto;
    }
    .top-max> div{
        width: 100%;
        height: 5%;
        margin-top: 20px;
    } 
    .top-max>  div >input[type='text']{
        width: 60%;
        height: 30px;
        padding-left:60px;
        border: none;
        border-bottom: 1px #000 solid;
        margin-left: 20px;
    }
    .top-max>  div >font{
        position: absolute;
        left: 13%;
        margin-top: 7px;
        width: 50px;
    }
    input{
        outline: none;
    }
    .top-max>  div >input[type='button']{
        width: 110px;
        height:30px;
        border: 1px #000 solid;
        border-radius: 15PX;
        position: absolute;
        left: 240px;
        top: 75px;
        background: #FFF;
    }
    .top-max   >input[type='SUBMIT']{
        position: absolute;
        top: 165px;
        left: 110px;
        width: 130px;
        height: 35px;
        border: none;
        border: 1px #000 solid;
        border-radius: 15px;
        background: #FFF;
    }
</style>