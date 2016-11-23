/**------账户管理下拉框js------**/

$(function(){
	
	/*修改*/
	$("#list1").find("i").click(function(){
		$("#list1 .amend").find("input").show().siblings().hide();
		});
		
	$("#list7").find("i").click(function(){
		$("#list7 .amend").find("input").show().siblings().hide()
		});
	
	/*年*/
	$(".listR").find(".Bot").css({"border-top":"0"});
	
	$(".listR .year").find(".Top").click(function(){
        var css=$(".listR .year .Bot").css("display"); 
          if(css == "none"){
			  $(".listR .year").find(".Bot").show();
			 
			  }else{
				$(".listR .year").find(".Bot").hide();
				
				  };  
        $(this).parent().find("li").click(function(){
            var select = $(this).text();
            $(".listR .year .Top").find("i").text(select);
            $(".listR").find(".Bot").hide();
        })
        event.stopPropagation();
        });
	
	/*月*/
	$(".listR .month").find(".Top").click(function(){
        var css=$(".listR .month .Bot").css("display"); 
          if(css == "none"){
			  $(".listR .month").find(".Bot").show()
			  }else{
				$(".listR .month").find(".Bot").hide()
				  };  
        $(this).parent().find("li").click(function(){
            var select = $(this).text();
            $(".listR .month .Top").find("i").text(select);
            $(".listR").find(".Bot").hide();
        })
        event.stopPropagation();
        });
		
	/*日*/
	$(".listR .day").find(".Top").click(function(){
        var css=$(".listR .day .Bot").css("display"); 
          if(css == "none"){
			  $(".listR .day").find(".Bot").show()
			  }else{
				$(".listR .day").find(".Bot").hide()
				  };  
        $(this).parent().find("li").click(function(){
            var select = $(this).text();
            $(".listR .day .Top").find("i").text(select);
            $(".listR").find(".Bot").hide();
        })
        event.stopPropagation();
        });
	
	 /*月收入*/
	$(".listR .money").find(".Top").click(function(){
        var css=$(".listR .money .Bot").css("display"); 
          if(css == "none"){
			  $(".listR .money").find(".Bot").show()
			  }else{
				$(".listR .money").find(".Bot").hide()
				  };  
        $(this).parent().find("li").click(function(){
            var select = $(this).text();
            $(".listR .money .Top").find("i").text(select);
            $(".listR").find(".Bot").hide();
        })
        event.stopPropagation();
        });
	
	  
	 /*教育程度*/
	$(".listR .school").find(".Top").click(function(){
        var css=$(".listR .school .Bot").css("display"); 
          if(css == "none"){
			  $(".listR .school").find(".Bot").show()
			  }else{
				$(".listR .school").find(".Bot").hide()
				  };  
        $(this).parent().find("li").click(function(){
            var select = $(this).text();
            $(".listR .school .Top").find("i").text(select);
            $(".listR").find(".Bot").hide();
        })
        event.stopPropagation();
        });
		
	
	/*行业*/
	$(".listR .work").find(".Top").click(function(){
        var css=$(".listR .work .Bot").css("display"); 
          if(css == "none"){
			  $(".listR .work").find(".Bot").show()
			  }else{
				$(".listR .work").find(".Bot").hide()
				  };  
        $(this).parent().find("li").click(function(){
            var select = $(this).text();
            $(".listR .work .Top").find("i").text(select);
            $(".listR").find(".Bot").hide();
        })
        event.stopPropagation();
        });
	
	
	
	
	
	
	
	
	
	
	
	
	
	
 }) 