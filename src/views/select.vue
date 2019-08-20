<template>
    <div class="select-max">
        <div class='sousuo1' >
                <i class="iconfont icon-fanhui" @click="homepage()"></i>
        <input type="text"  v-model="zhi" @keyup.enter="chaxun()" @keyup.esc="homepage()">
        <span @click="chaxun()">搜索</span>
        </div>
        <div v-for="(result,index) in this.$store.state.chaxuns" :key="index" class="goods">
            <div class="max">
            <div class="photo">
                <img :src='result.img' >
            </div>
            <p>{{result.mName}}</p>
            <font>￥{{result.mPrice}}</font>
            <i class='iconfont icon-jiahao' @click.stop  @click="che(result.mId)"></i>
        </div>
        </div>
    </div>
</template>
<script>
import qs from 'qs';
export default {
    data(){
        return {
            zhi:'',
            goods:[

            ]
        };
    },
    methods:{
    //      axios(){
    //   this.axios.get('http://localhost:8080/Fruitsales/fruitInfoaxios').then((response)=>{
    //     this.newsList=response.data.data;
    //   }).catch((response)=>{
    //     console.log(response);
    //   })
//},
        homepage(){
             this.$router.push('/homepage')
             this.$store.commit('showMenu');
        },
        chaxun:function(){
            // this.$http.post('http://localhost:1234/chaxun',qs.stringify({'zhi':this.zhi})).then((response)=>{
            //        var data=response.data;
            //        this.goods=data;
            // })
                this.$store.commit('chaxun',{'zhi':this.zhi});

        },
        che:function(mId){
    this.$store.commit('che',{'mId':mId});
       
    }
    },
    mounted(){
        this.$store.commit('hideMenu');
    }
}
</script>
<style scope lang="less" >
@font:verdana,Arial,Helvetica,sans-serif;
    .select-max{
        width: 100%;
    }
    .select-max>.sousuo1>input[type='text']{
        margin-left: 35px;
        width: 72%;
        height: 60%;
        border-radius: 3px;
        border: none;
        border: 1px #000 solid;
        outline: none;
        background: #F8F8FF;
        color: #999;
        font-size: 18px;
}
.select-max>.sousuo1>span{
        display: inline-block;
        width: 60px;
        line-height: 40px;
}
.select-max>.sousuo1>i{
    position: absolute;
    left: 0;
    top: 5px;
    font-size: 25px !important;
}
.select-max>.goods i{
    position: absolute;
    left: 85%;
    top: 57%;
    font-size: 25px;
}
.select-max .goods>.max{
        position: relative;
        height: 2rem;
        border-radius: 20px;
        background: #F8F8FF;
        border: 1px #000 solid;
        margin-top: 10px;

    }
   .select-max .goods>.max>.photo{
        position: absolute;
        top: 12%;
        left: 3%;
        width: 1.5rem;
        height: 1.5rem;
    }
     .select-max .goods>.max>.photo>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    }
    .select-max .max>font{
        font: 15px @font;
        color: red;
        position: absolute;
        left: 31%;
        top: 57%;
    } 
     .select-max .goods>.max>p{
        font: 15px @font;
        width: 60%;
        position: absolute;
        left: 30%;
        top: 13%;
    }
</style>