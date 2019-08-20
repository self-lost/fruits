<template>
    <div  class="goods">
        <div class="max"  v-for="(result,index) in this.$store.state.shopping" :key="index">
            <div class="photo">
                <img :src='result.img' >
            </div>
            <p>{{result.mName}}</p>
            <font>￥{{result.mPrice}} </font>
            <div class="suan">
            <button class="jian" @click="jian(result.num,result.mName,index)">-</button>
            <span> {{result.num}} </span>
            <button class="jia"  @click="jia(result.num,result.mName,index)">+</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
        }
    },
    // props:[
    //     'che'
    // ],
    mounted(){
      this.$store.commit('goods')
    },
    methods:{
        jia:function(num,mName,index){
            this.$store.state.shopping[index].num++;
            this.$store.commit('goods_num',{'num':(++num),'mName':mName})
        },
        jian:function(num,mName,index,$event){
            if(this.$store.state.shopping[index].num<=1){
                var a = confirm('确定要不要了嘛');
                if(a){
                    event.target.parentNode.parentNode.remove();
                    this.$store.commit('del_goods',mName);
                }   
            }else{
                this.$store.state.shopping[index].num--;
                this.$store.commit('goods_num',{'num':(--num),'mName':mName})
            }
        }
    }
}
</script>
<style scope lang="less">
@font:verdana,Arial,Helvetica,sans-serif;
    .hidden{
        display: none;
    }
    .goods{
        width: 100%;
        height: auto;
        padding: 0 0.3rem;
        box-sizing: border-box;
    }
    .goods>.max{
        position: relative;
        height: 2rem;
        border-radius: 20px;
        background: #F8F8FF;
        border: 1px #000 solid;
        margin-top: 10px;
    }
    .goods>.max>.photo{
        position: absolute;
        top: 12%;
        left: 3%;
        width: 1.5rem;
        height: 1.5rem;
    }
    .goods>.max>.photo>img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    }
    .goods button{
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #F8F8FF;
        border: 1px #D8BFD8 solid;
        text-align:center;
        outline: none; 
    }
    .max>.suan{
        position: absolute;
        top: 65%;
        left: 75%;
    }
    span{
        font:15px @font;
    } 
    .max>font{
        font: 15px @font;
        color: red;
        position: absolute;
        left: 31%;
        top: 57%;
    } 
    .max>font>i{
        font: 12px @font;
        color: #696969;
        text-decoration: line-through;
    } 
    .goods>.max>p{
        font: 15px @font;
        width: 60%;
        position: absolute;
        left: 30%;
        top: 13%;
    }
</style>