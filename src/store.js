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
      console.log(data)
      if(state.shopping.length==0){
        Vue.axios.post('http://localhost:1234/insgoods',qs.stringify({'cId':state.user[0].cId,'mName':mName,'mPrice':mPrice,'img':img})).then((response)=>{
          var row=response.data.affectedRows;
          console.log(row)
         })
      }else{
        for(var i=0;i<state.shopping.length;i++){
          if(state.shopping[i].mName==mName){
            Vue.axios.post('http://localhost:1234/num',qs.stringify({'num':state.shopping[i].num,'mName':mName})).then((response)=>{
              console.log(response.data)
              var row=response.data.affectedRows;
            })
          }else{
            Vue.axios.post('http://localhost:1234/querygoods_name',qs.stringify({'mName':mName})).then((response)=>{
              console.log(response.data)
              console.log(response.data[0]['count(1)'])
              var count=response.data[0]['count(1)'];
              if(count!=0){
                return;
              }else{
                if(state.one==1){
                  state.one=2;
                Vue.axios.post('http://localhost:1234/insgoods',qs.stringify({'cId':state.user[0].cId,'mName':mName,'mPrice':mPrice,'img':img})).then((response)=>{
                  var row=response.data.affectedRows;
                  console.log(row)
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
    console.log(obj.num)
    Vue.axios.post('http://localhost:1234/shuzi',qs.stringify({'num':obj.num,'mName':obj.mName})).then((response)=>{
      var data=response.data;
      console.log(data)
    })
  },
  del_goods(state,mName){
    Vue.axios.post('http://localhost:1234/delgoods',qs.stringify({'mName':mName})).then((response)=>{
      var data=response.data;
      console.log(data)

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
    if(data.length==state.shopping.length){
      return;
    }else{
      
    for(var i=0;i<data.length;i++){
      state.shopping.push(data[i]);
       state.totalPrice+=data[i].num*data[i].mPrice;
    }
  }
    })

},
userOrderform(state){
  console.log('1')
  Vue.axios.post('http://localhost:1234/userOrderform',qs.stringify({'cId':state.user[0].cId})).then((response)=>{
        var data=response.data;
        alert(data)
        state.userOrderforms=data;
        for(var i=0;i<data.length;i++){
          var date=new Date(data[i].oDate)
         var year=date.getFullYear();
         var month=date.getMonth()+1;
         var day=date.getDate();
         var time=year+'年'+month+'月'+day+'日';
         state.userOrderforms[i].oDate=time;
     }
     console.log(state.userOrderforms)

  })

}

  },
  actions: {

      
  }
})
