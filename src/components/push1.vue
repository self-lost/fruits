<template>
    <div class="push-max">
        <div class="swiper-container" id="swiperone">
        <div class="xiala">下拉刷新</div>
  <div class="swiper-wrapper">
    <div class="swiper-slide">
        <slot>
        </slot>
    </div>
    </div>
    </div>
    </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
export default {
    data(){
        return{

        }
    },
    methods:{
        _initSwiper:function(){
		    var a=false;
            var mySwiper = new Swiper('#swiperone',{
                direction:'vertical',
                slidesPerView: 'auto',
                freeMode:false,

  })
document.querySelector('#swiperone').addEventListener('touchmove',function(){
        console.log(mySwiper.translate)
		if (mySwiper.translate>=70) {
			document.querySelector('.xiala').innerText='释放刷新'
			a=true;
		}else{
			document.querySelector('.xiala').innerText='下拉刷新'
			a=false;
		}
    })	
    
    document.querySelector('#swiperone').addEventListener('touchend',function(){
			if(a==true){
			document.querySelector('.xiala').innerText='刷新中'
			mySwiper.setTransition(mySwiper.params.speed);
            mySwiper.setTranslate(50);
			mySwiper.touchEventsData.isTouched=false;
			mySwiper.allowTouchMove=false;
			setTimeout(function () {  
            document.querySelector('.xiala').innerText='刷新完成';
            mySwiper.setTransition(mySwiper.params.speed);
            mySwiper.setTranslate(0);
            mySwiper.allowTouchMove=true;
                        },1000);
				
			}
				
				
				});	
        }
    },
    mounted() {
        this._initSwiper();
        },
}
</script>
<style scope lang="less">
    #swiperone{
        width: 100%;
        height: auto;
    }
    .xiala{
        position: fixed;
        top: 0;
        left: 40%;
    }
</style>