// JavaScript Document
window.j=0;
	var jj;
	window.i=$("body,html").height();

	















function browserRedirect() {
            var sUserAgent = navigator.userAgent.toLowerCase();
            var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
            var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
            var bIsMidp = sUserAgent.match(/midp/i) == "midp";
            var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
            var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
            var bIsAndroid = sUserAgent.match(/android/i) == "android";
            var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
            var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
          
            if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
                //手机端滑轮事件
          
                
                
                
                function GetSlideAngle(dx, dy) {
    return Math.atan2(dy, dx) * 180 / Math.PI;
}
 
//根据起点和终点返回方向 1：向上，2：向下，3：向左，4：向右,0：未滑动
function GetSlideDirection(startX, startY, endX, endY) {
    var dy = startY - endY;
    var dx = endX - startX;
    var result = 0;
 
    //如果滑动距离太短
    if (Math.abs(dx) < 2 && Math.abs(dy) < 2) {
        return result;
    }
 
    var angle = GetSlideAngle(dx, dy);
    if (angle >= -45 && angle < 45) {
        result = 4;
    } else if (angle >= 45 && angle < 135) {
        result = 1;
    } else if (angle >= -135 && angle < -45) {
        result = 2;
    }
    else if ((angle >= 135 && angle <= 180) || (angle >= -180 && angle < -135)) {
        result = 3;
    }
 
    return result;
}
 
//滑动处理
var startX, startY;
document.addEventListener('touchstart', function (ev) {
    startX = ev.touches[0].pageX;
    startY = ev.touches[0].pageY;   
}, false);
document.addEventListener('touchend', function (ev) {
    var endX, endY;
    endX = ev.changedTouches[0].pageX;
    endY = ev.changedTouches[0].pageY;
    var direction = GetSlideDirection(startX, startY, endX, endY);
    switch (direction) {
        case 0:
            alert("没滑动");
            break;
        case 1:
            alert("向上");
            break;
        case 2:
            alert("向下");
            break;
        case 3:
            alert("向左");
            break;
        case 4:
            alert("向右");
            break;
        default:            
    }   
}, false);
                
                
                
                
                
                
                
            } else {//PC端滑轮事件
                
                $(function(){
            var scrollFunc = function (e) {
	        var direct = 0;
            e = e || window.event; 
       if(tur==true){
			clean();
			var lll=j*-1;
        if (e.wheelDelta) { 
		 //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
			if(j==0){}
			$("#poin img").attr("src","images/works/p2.png");
				
			if(j==-1){
				$("#body").stop().animate({
						"margin-top":0
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false;
						$("#poin img").eq(0).attr("src","images/works/p1.png");
				j=0;
				}
			if(j==-2){
				$("#body").stop().animate({
						"margin-top":-i
						},1000,"easeInOutQuint",works)
						var timer=setTimeout(haha,1000); tur = false; 
				j=-1;$("#poin img").eq(1).attr("src","images/works/p1.png");
				}	
             if(j==-3){
				 move();
				$("#body").stop().animate({
						"margin-top":2*-i
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false; 
				j=-2;$("#poin img").eq(2).attr("src","images/works/p1.png");
				}	
				
			 
			 
			 
            }//滑轮上
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
			$("#poin img").attr("src","images/works/p2.png");
				if(j==-3){
					
					}
				if(j==-2){
					$("#body").stop().animate({
						"margin-top":3*-i
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false; 
						j=-3;
						$("#poin img").eq(3).attr("src","images/works/p1.png");
					}
				if(j==-1){ move();
					$("#body").stop().animate({
						"margin-top":2*-i
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false; 
						j=-2;
						$("#poin img").eq(2).attr("src","images/works/p1.png");
					}
				if(j==0){
					j=-1;
					$("#body").stop().animate({
						"margin-top":-i
						},1000,"easeInOutQuint",works)
						var timer=setTimeout(haha,1000); tur = false; 
						$("#poin img").eq(1).attr("src","images/works/p1.png");
					}
					
            }//滑轮下
		}

		else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向下滚动时
               $("#poin img").attr("src","images/works/p2.png");
			  if(j==-3){
					
					}
				if(j==-2){
					$("#body").stop().animate({
						"margin-top":3*-i
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false; 
						j=-3;$("#poin img").eq(3).attr("src","images/works/p1.png");
					}
				if(j==-1){ move();
					$("#body").stop().animate({
						"margin-top":2*-i
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false; 
						j=-2;$("#poin img").eq(2).attr("src","images/works/p1.png");
					}
				if(j==0){
					$("#body").stop().animate({
						"margin-top":-i
						},1000,"easeInOutQuint",works)
						var timer=setTimeout(haha,1000); tur = false; 
						j=-1;$("#poin img").eq(1).attr("src","images/works/p1.png");
					} 
					
			   
            }
            if (e.detail< 0) { //当滑轮向上滚动时//Firefox
			$("#poin img").attr("src","images/works/p2.png");
             if(j==0){}
			if(j==-1){
				$("#body").stop().animate({
						"margin-top":0
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false; 
				j=0;$("#poin img").eq(0).attr("src","images/works/p1.png");
				}
			if(j==-2){
				$("#body").stop().animate({
						"margin-top":-i
						},1000,"easeInOutQuint",works)
						var timer=setTimeout(haha,1000); tur = false; 
				j=-1;$("#poin img").eq(1).attr("src","images/works/p1.png");
				}	
             if(j==-3){ move();
				$("#body").stop().animate({
						"margin-top":2*-i
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false; 
				j=-2;$("#poin img").eq(2).attr("src","images/works/p1.png");
				}	
			 if(j==-4){
				$("#body").stop().animate({
						"margin-top":3*-i
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false; 
				j=-3;$("#poin img").eq(3).attr("src","images/works/p1.png");
			 }
         }
       }
        ScrollText(direct);
	}		
		
	
  
	
	
	
	
else{}
	
	
	
	
	
	
	
	
	
	
		
		if($("#body").css("margin-top")<i){
		j=1;
		}
	if($("#body").css("margin-top")<2*i&&$("#body").css("margin-top")>=i)
	{
		j=2;
		}
	if($("#body").css("margin-top")>=2*i&&$("#body").css("margin-top")<3*i)
	{
		j=3;
		}
	if($("#body").css("margin-top")>=3*i&&$("#body").css("margin-top")<4*i)
	{
		j=4;
		}
	if($("#body").css("margin-top")>=4*i&&$("#body").css("margin-top")<5*i)
	{
		j=5;
		}
	if($("#body").css("margin-top")>=5*i&&$("#body").css("margin-top")<6*i)
	{
		j=6;
		}
    }
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法
    window.onmousewheel = document.onmousewheel = scrollFunc; 
	
	})
                
            }
        }

        browserRedirect();


























var tur = true;
function haha(){ tur = true;

}