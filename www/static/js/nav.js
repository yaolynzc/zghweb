	$(document).ready(function(){
		$('.dropdown').hover(function(){
			$('.down-icon').removeClass("rotate");
			$(this).children('.down-icon').addClass("rotate");
			$(this).children(".hide_list").show();
        },function(){
        	$(".hide_list").hide();
            $('.down-icon').removeClass("rotate");
        });

        $('.account_dropdown').hover(function(){
            $(this).children(".hide_list").show();
        },function(){
            $(this).children(".hide_list").hide();
        });
        $('.store_dropdown').hover(function(){
            $(this).children(".hide_list").show();
        },function(){
            $(this).children(".hide_list").hide();
        });


		$(".consult_navbar li").click(function(){
			$(".consult_navbar li").removeClass("active");
			$(this).addClass("active");
			$(".consult_list").html('<a href="G-ptzx-index.html"><img src="images/I-01.png"/></a>')
		});
		$(".demo_nav li").click(function(){
			$(".demo_nav li").removeClass("active01");
			$(this).addClass("active01");
			$(".demo_con").html('<a href="G-ptzx-index.html"><img src="images/I-03.png"/></a>')
		});
		$('.video_item').hover(function(){
			$(".mask").css("display","none");
			$(this).children('.mask').css("display","block");
        },function(){
        	$(".mask").css("display","none");
        });
        $('.video_item .mask').click(function(event){
            //event.stopPropagation();
            event.preventDefault();
        	$(this).parents('.video_list').remove();
        });

        $('.products_item').hover(function(){
			$(".mask").css("display","none");
			$(this).children('.mask').css("display","block");
        },function(){
        	$(".mask").css("display","none");
        });
        $('.products_item .mask').click(function(event){
            event.preventDefault();
        	$(this).parents('.products_list').remove();
        });

        $('.store_item').hover(function(){
			$(".mask").css("display","none");
			$(this).children('.mask').css("display","block");
        },function(){
        	$(".mask").css("display","none");
        });
        $('.store_item .mask').click(function(event){
            event.preventDefault();
        	$(this).parents('.store_main').remove();
        });

        $('.cancel-btn').click(function(){
        	$('.video-con').html('<a href="rcpx_kc.html"><img src="images/I-06.png"/></a>')
        });
        $('.cancel-btn01').click(function(){
        	$('.products-con').html('<a href="javascript:;"><img src="images/I-09.png"/></a>')
        });
        $('.cancel-btn02').click(function(){
        	$('.store-con').html('<a href="javascript:;"><img src="images/I-12.png"/></a>')
        });

        $('.cancel_order').click(function(){
        	layer.open({
                type: 2,
                title:'提示',
                area: ['400px', '240px'],
                shadeClose: true,
                shade: 0.8,
                maxmin: false,
                btn: ['确认', '取消'],
                content: 'order_cancel.html'
            });
        });

        $('.submit_btn').click(function(){
        	$('.judge_con').html('<img src="images/I-14.png" style="width:100%;height:600px;"/>');
        });


    });