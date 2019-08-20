var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var mysql=require('mysql');



app.all('*',function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
  
    res.header('Access-Control-Allow-Headers',
    'Content-Type,Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE,OPTIONS');
    res.header("X-Powered-By", ' 3.2.1')
    next();
});



app.use(bodyParser.urlencoded({extended:false}));
var db=mysql.createConnection({
	host:'localhost',
	port:'3306',
	user:'root',
	password:'2001',
	database:'fruit'
})
 db.connect();


 
app.get('/',function(request,response){
    console.log()
 db.query('select mer.mId,mer.mName,ty.mType,mer.mPrice,mer.mBrand,mer.mDescribe,mer.mAddedDate  from merchandise as mer,type as ty   where mer.mType =ty.tId',function(err,data){
 		response.send(data)
 })

})
//登录
app.post('/login',function(request,response){
    var Name=request.body.haoma;
    var Pwd=request.body.yanzheng;
    // var login='select count(1)  from client  where cLoginName="'+Name+'" or cRealName="'+Name+'" and cPassWord="'+Pwd+'"';
   var sql='select  * from client   where cLoginName="'+Name+'" or cRealName="'+Name+'"  and cPassWord="'+Pwd+'"';
    db.query(sql,function(err,data){
        response.send(data)
    })
})
//查询水果
app.post('/chaxun',function(request,response){
    var zhi=request.body.zhi;
    var sql='select mId,mName,mPrice,img from  merchandise where  mName like "%'+zhi+'%"  or  mBrand="'+zhi+'"'
    db.query(sql,function(err,data){
        response.send(data)
    })

})
//购物车
app.post('/goods',function(request,response){
    var sql='select mName,mPrice,num,img from goods'
    db.query(sql,function(err,data){
        response.send(data)
    })

})
//根据水果id查询信息
app.post('/chezi',function(request,response){
    var mId=request.body.mId;
    var sql='select mName,mPrice,img from merchandise where mId="'+mId+'"';
    db.query(sql,function(err,data){
        response.send(data)
    })
    
})
//往购物车添加商品
app.post('/insgoods',function(request,response){
    var data=request.body;
    var num=1;
     var sql='insert into goods values('+null+',"'+data.cId+'","'+data.mName+'",'+parseFloat(data.mPrice)+','+num+',"'+data.img+'")';
     db.query(sql,function(err,result){
        response.send(result)
     })
})
//修改数量  +
app.post('/num',function(request,response){
    var num=request.body.num;
    var mName=request.body.mName;
    var sql='update  goods set num='+(++num)+'  where mName="'+mName+'"'
    db.query(sql,function(err,result){
        response.send(result);
    })
})
//修改num数量 + -
app.post('/shuzi',function(request,response){
    var num=request.body.num;
    var mName=request.body.mName;
    var sql='update goods set num='+num+'  where mName="'+mName+'"';
    db.query(sql,function(err,result){
        response.send(result)
    })

})
//删除商品
app.post('/delgoods',function(request,response){
    var mName=request.body.mName;
    var sql='delete from goods where mName="'+mName+'"';
    db.query(sql,function(err,result){
        response.send(result)
    })
})
//查询购物车  一条数据是否存在
app.post('/querygoods_name',function(request,response){
    var mName=request.body.mName;
    var sql='select count(1)  from goods  where mName="'+mName+'"';
    db.query(sql,function(err,result){
            response.send(result)

    })
})
//查询水果信息
app.post('/Fruitmer',function(request,response){
    var merchandise='select mer.mId,mer.mName,ty.mType,mer.mPrice,mer.mBrand,mer.mDescribe,mer.mAddedDate,mer.img  from merchandise as mer,type as ty   where mer.mType =ty.tId';
    db.query(merchandise,function(err,data){
        response.send(data)
})
})
//查询用户本身的订单
app.post('/userOrderform',function(request,response){
    var kehuId=request.body.cId;
    var sql='select * from orderform where  cId="'+kehuId+'"';
    db.query(sql,function(err,result){
        response.send(result)
        console.log(result)
    })

})
app.post('/post',function(request,response){
    response.send('123')
})





app.listen('1234',function(){
    console.log('监听成功')
})