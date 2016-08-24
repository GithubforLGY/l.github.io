// JavaScript Document
$(function(){
	var j=0;
	var jj;
	var i=$("body,html").height();
	
	 var scrollFunc = function (e) {
	   var direct = 0;
        e = e || window.event; 
       if(tur==true){
			
        if (e.wheelDelta) {  //判断浏览器IE，谷歌滑轮事件             
            if (e.wheelDelta > 0) { //当滑轮向上滚动时
				if(j==0){
					$("#body").css("margin-top","0px");
						}	
				else{
				   jj=j+1;j++
					$("#body").stop().animate({
					"margin-top":jj*i
					},1000,"easeInOutQuint")
					var timer=setTimeout(haha,1000); tur = false;
					}
             
            }//滑轮上
            if (e.wheelDelta < 0) { //当滑轮向下滚动时
				if(j==-3){
						}
					else{
						jj=j-1;j--
						$("#body").stop().animate({
						"margin-top":jj*i
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false; 	
						}
            }//滑轮下
		}

		else if (e.detail) {  //Firefox滑轮事件
            if (e.detail> 0) { //当滑轮向下滚动时
                if(j==-3){
						}
					else{
						jj=j-1;j--
						$("#body").stop().animate({
						"margin-top":jj*i
						},1000,"easeInOutQuint")
						var timer=setTimeout(haha,1000); tur = false; 	
						}
            }
            if (e.detail< 0) { //当滑轮向上滚动时//Firefox
             if(j==0){
						}	
				else{
				   jj=j+1;j++
					$("#body").stop().animate({
					"margin-top":jj*i
					},1000,"easeInOutQuint")
					var timer=setTimeout(haha,1000); tur = false;
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
	
var tur = true;
function haha(){ tur = true;

}
