/*$("#works #a1").hover(function(){
	$(this).stop().animate({opacity:0.98});
	},function(){
		$(this).stop().animate({opacity:0});
	})*/
$("#poin li img").hover(function(){
	$(this).attr("src","images/works/p1.png")
	},function(){
		var ll=j*-1;
		$(this).attr("src","images/works/p2.png");
		$("#poin li img").eq(ll).attr("src","images/works/p1.png");
		});
function aa(){
	$("#poin li").bind("click", function(){
	$("#poin li").unbind("click");
	setTimeout(aa,1000);
	var kkk=$(this).index();
	
	var sss=$("#works1").css("opacity");
	if(kkk==1){
		if(sss==0){setTimeout(works,1000);clean();
		
		}
		
		
		}
	if(kkk==2){
		
		move();clean();
		}
	else{
		clean();
		}
	
	
	$("#poin li img").attr("src","images/works/p2.png");
	$("#poin li img").eq(kkk).attr("src","images/works/p1.png");
	
	$("#body").stop().animate({
						"margin-top":kkk*-i
						},1000,"easeInOutQuint")
	j=kkk*-1;
	})
	}	
$("#poin li").bind("click", function(){
	$("#poin li").unbind("click");
	setTimeout(aa,1000);
	var kkk=$(this).index();
	
	var sss=$("#works1").css("opacity");
	if(kkk==1){
		if(sss==0){setTimeout(works,1000);clean();
		
		}
		
		
		}
	if(kkk==2){
		
		move();clean();
		}
	else{
		clean();
		}
	
	
	$("#poin li img").attr("src","images/works/p2.png");
	$("#poin li img").eq(kkk).attr("src","images/works/p1.png");
	
	$("#body").stop().animate({
						"margin-top":kkk*-i
						},1000,"easeInOutQuint")
	j=kkk*-1;
	})
	
	
$(window).resize(function() {
  window.k=$("body,html").width();
})
var k=$("body,html").width()
function works(){
	
		$("#work").stop().animate({
		"margin-left":"+="+20
		})
		$("#works1").stop().animate({
		"opacity":1
		},700)
		$("#works2").stop().animate({
		"opacity":1
		},700)
		$("#works3").stop().animate({
		"opacity":1
		},700)
		$("#works4").stop().animate({
		"opacity":1
		},700)
	/*$("#works1").stop().animate({
		"opacity":1
		},100,function(){
			$("#works2").stop().animate({
		"opacity":1
		},100,function(){
			$("#works4").stop().animate({
		"opacity":1
		},100,function(){
			$("#works3").stop().animate({
		"opacity":1
		},100,function(){
				$("#works1").css("background-color","#FFF");}	)
			})
			}	)
			}	)*/
}
function clean(){
	var www=setTimeout(cleaning,1000);
	}
function cleaning(){
	if(j!=-1){
		$("#work").css("left","50%");
		$("#works1").css("opacity","0");
		$("#works2").css("opacity","0");
		$("#works3").css("opacity","0");
		$("#works4").css("opacity","0");
		$("#works1").css("background","");
		}
	if(j!=-2){
		$("#left").css("margin-left",-k*1.2);
		$("#right").css("margin-left",k*1.2);
		$("#about img").css("opacity","0");
		$("#about img").css("margin-left","30px");
		$("#name").css("opacity","0");
		}
	
	}
function move(){
		var screenwidth=screen.width;
    
                
      if(screenwidth>"1200"){      
        $("#left").animate({
		"margin-left":-k*0.6
		},1500,"easeInOutQuint");
	   $("#right").animate({
		"margin-left":k*0.4
		},1500,"easeInOutQuint",function(){
			$("#about img").stop().animate({
				opacity:1,
				"margin-left":0
				},function(){
					$("#name").stop().animate({
						opacity:1
						},100)
					}); 
        
    
	
			});
        
        
             }
           
     if(screenwidth<="1200"){
         
         
            $("#right").css("top","50%");
            $("#left").animate({
		"margin-left":0
		},1500,"easeInOutQuint");
        
	   $("#right").animate({
		"margin-left":0
		},1500,"easeInOutQuint",function(){
			$("#about img").stop().animate({
				opacity:1,
				"margin-left":0
				},function(){
					$("#name").stop().animate({
						opacity:1
						},100)
					}); 
        
    
	
			});
         
     }  
       
	
    
    
    }