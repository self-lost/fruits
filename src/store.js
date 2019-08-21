import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'; 


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu:true,
    money:true,
    price:0,
    shopping:[],
    merch:[],
    chaxuns:[],
    count:0,
    user:[],
    totalPrice:0,
    one:0,
    userOrderforms:[],
  },
  mutations: {
    hideMenu:function(state){
      state.menu = false;
    },
    showMenu:function(state){
      state.menu = true;
    },
    showmoney(state){
      state.money = true;
    },
    hidemoney(state){
      state.money = false;
    },
    login(state,obj){
      Vue.axios.post('http://localhost:1234/login',qs.stringify({'haoma':obj.haoma,'yanzheng':obj.yanzheng})).then((response)=>{
            //this.count=response.data[i].count;
            var data=response.data;
              state.user=data;
    })
    },
    che(state,obj){
      state.one=1;
      Vue.axios.post('http://localhost:1234/chezi',qs.stringify({'mId':obj.mId})).then((response)=>{
      var data=response.data;
      var mName = response.data[0].mName.replace(/^\s*|\s*$/g,"");
      var mPrice=response.data[0].mPrice;
      var img=response.data[0].img;
      var cId='';
      if(state.shopping.length==0){
        Vue.axios.post('http://localhost:1234/insgoods',qs.stringify({'cId':cId,'mName':mName,'mPrice':mPrice,'img':img})).then((response)=>{
          var row=response.data.affectedRows;
          if(row==1){
            this.commit('goods')
          }
         })
      }else{
        for(var i=0;i<state.shopping.length;i++){
          if(state.shopping[i].mName==mName){
            Vue.axios.post('http://localhost:1234/num',qs.stringify({'num':state.shopping[i].num,'mName':mName})).then((response)=>{
              var row=response.data.affectedRows;
              if(row==1){
                this.commit('goods')
              }
            })
          }else{
            Vue.axios.post('http://localhost:1234/querygoods_name',qs.stringify({'mName':mName})).then((response)=>{
              var count=response.data[0]['count(1)'];
              if(count!=0){
                return;
              }else{
                if(state.one==1){
                  state.one=2;
                Vue.axios.post('http://localhost:1234/insgoods',qs.stringify({'cId':cId,'mName':mName,'mPrice':mPrice,'img':img})).then((response)=>{
                  var row=response.data.affectedRows;
                  if(row==1){
                    this.commit('goods')
                  }
                 })
                }
              }
          })
          }
      }
      }
      })
  },
  goods_num(state,obj){
    //,qs.stringify({'cId':state.cId,"data":data})
    Vue.axios.post('http://localhost:1234/shuzi',qs.stringify({'num':obj.num,'mName':obj.mName})).then((response)=>{
      var row=response.data.affectedRows;
      if(row==1){
        this.commit('goods')
      }
    })
  },
  del_goods(state,mName){
    Vue.axios.post('http://localhost:1234/delgoods',qs.stringify({'mName':mName})).then((response)=>{
      var row=response.data.affectedRows;
      if(row==1){
        this.commit('goods')
      }
    })
  },
  merchandise(state){
    Vue.axios.post('http://localhost:1234/Fruitmer').then((response)=>{
      var data=response.data;
      state.merch=data;
      for(var i=0;i<data.length;i++){
           var date=new Date(data[i].mAddedDate)
          var year=date.getFullYear();
          var month=date.getMonth()+1;
          var day=date.getDate();
          var time=year+'年'+month+'月'+day+'日';
          state.merch[i].mAddedDate=time;
      }
  })


  },
  chaxun:function(state,obj){
    Vue.axios.post('http://localhost:1234/chaxun',qs.stringify({'zhi':obj.zhi})).then((response)=>{
           var data=response.data;
           state.chaxuns=data;
    })
},
goods(state){
  Vue.axios.post('http://localhost:1234/goods').then((response)=>{
    var data=response.data;
      state.shopping=data;
      state.totalPrice=0;
      for(var i=0;i<state.shopping.length;i++){
        // state.shopping.push(data[i]);
         state.totalPrice+=state.shopping[i].num*state.shopping[i].mPrice;
  //   }else{
  //     state.shopping=data;
  //     state.totalPrice=0;
  //     for(var i=0;i<state.shopping.length;i++){
  //       // state.shopping.push(data[i]);
  //        state.totalPrice+=state.shopping[i].num*state.shopping[i].mPrice;
  //     }
     }
    })

},
userOrderform(state){
  Vue.axios.post('http://localhost:1234/userOrderform',qs.stringify({'cId':cId})).then((response)=>{
        var data=response.data;
        state.userOrderforms=data;
        for(var i=0;i<data.length;i++){
          var date=new Date(data[i].oDate)
         var year=date.getFullYear();
         var month=date.getMonth()+1;
         var day=date.getDate();
         var time=year+'年'+month+'月'+day+'日';
         state.userOrderforms[i].oDate=time;
     }

  })

}

  },
  actions: {

      
  }
})
