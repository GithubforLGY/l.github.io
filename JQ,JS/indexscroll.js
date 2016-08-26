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
          
                alert("phone");
                
                
                
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