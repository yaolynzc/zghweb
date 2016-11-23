$(function () {

/*————————————交易市场——————————————*/

    /*首页侧边导航交互*/
    $(".nav2").hover(function () {
        $("#navList").show()
    },function () {
        $("#navList").hide()

    });

    /*背景色*/
    $(".WL2Row").each(function(){
        var aH = $(this).css("height");
        $(this).find(".WLHead").css("height",aH)

    });


    /*添加搜索关键词*/

    $(".WLBody").find("label").click(function (_Event_) {
        if (this !== _Event_.target)
            return;
        var aText = $(this).text();
        $(".WL2Top").append('<i class="fa fa-angle-right"></i>');
        $(".WL2Top").append('<a href="#" class="on">'+aText+'</a>');
        $(".WL2Top").find("a").eq(-1).addClass("on").siblings("a").removeClass("on")
    });



    /*显示多选框*/
    $(".WL2Row").find(".WLFoot .dxk").click(function () {
        $(this).parent().siblings(".WLBody").find("div").show().parent().parent().siblings(".WL2Row").find(".WLBody div").hide();
        $(this).parent().siblings(".WLBody").find("label input").show();
        var bH = $(this).parent().siblings(".WLBody").css("height");
        $(this).parent().siblings(".WLHead").css("height",bH);
        $(this).hide().parent().parent().siblings(".WL2Row").find(".dxk").show();




    });

    $(".WL2Row").find(".WLFoot .more").toggle(function () {
        $(this).parent().siblings(".WLBody").css({"overflow-y":"scroll",
            "height":"200px"
        });
        $(this).text("收起")
        $(this).append("<i class='fa fa-angle-up'></i>")

    },function () {
        $(this).parent().siblings(".WLBody").css({"overflow-y":"hidden",
            "height":"auto"
        });
        $(this).text("更多")
        $(this).append("<i class='fa fa-angle-down'></i>")


    });



    /*显示多选按钮及隐藏提交取消按钮及多选框*/
    $(".WLBody").find("div input[type='reset']").click(function () {
        $(this).parent().parent().siblings(".WLFoot").find(".dxk").show();
        $(this).parent().siblings("label").find("input").removeAttr("checked").hide();
        var cH = $(this).parent().siblings(".WLBody").css("height");
        $(this).parent().parent().siblings(".WLHead").css("height",cH);
        $(this).parent().hide()
    });






    /*去掉多余下边框*/
    $(".WL2Content .WL2ContentLeft .WL2Server:last-child").css("border","none")


    /*翻页按钮*/
    if($(".WL2BtnWarp>ol li:eq(1)").hasClass("active")){
        $(".WL2BtnWarp>ol li:eq(0)").css("background-color","#ffffff")
    }

    /*title边框*/
    $(".WL2Content .WL2ContentRight .WL2title>ul>li:last-child").css("border","1px solid #d2d2d2")


    /*title hover效果*/
    $(".WL2Content .WL2ContentRight .WL2title>ul>li:last-child").hover(function () {
        $(this).find(".List").show()
    },function () {
        $(this).find(".List").hide()

    });

/*————————————商家宝贝——————————————*/
    /*综合评价*/
    $("#rank li").each(function(){
    var aW = parseFloat($(this).find("span i").text());
    var bW = ((aW/5.00)*100)+"%";
    $(this).find("p i").css("width",bW)



    });


    /*选项卡切换*/
    $("#title ul li").click(function () {
        var aIndex = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $(".ulWarp").find(".ulex").eq(aIndex).show().siblings(".ulex").hide();
    });

    /*多余边框*/
    $(".WLSjdpRightUnder .ulWarp .ul2 li:eq(0)").css("border","none");


    /*弹出框*/
    var bodyH = $("body").css("height");
    $(".collection").click(function () {
        var aTitle =  $(".collection").attr("title");
        var bTitle =  "您已收藏过该店铺";
        if (aTitle != bTitle) {
            $(".fullScreen").show().css("height", bodyH);
            $(".tanchu .left").css({
                "background-image": "url(images/WL/tanchu.png)",
                "background-repeat": "no-repeat",
                "background-position": "0"
            });
            $(".tanchu h1").text("您已成功收藏该店铺！");
            $(".tanchu .text .right").append("<p>去<a href='#'>我收藏的店铺</a>看看</p>");
            $(".tanchu").show().stop().animate({top: "60%"})
            $(this).attr("title", "您已收藏过该店铺")
        }
        else {
            $(".fullScreen").show().css("height", bodyH);
            $(".tanchu .left").css({
                "background-image": "url(images/WL/tanchu.png)",
                "background-repeat": "no-repeat",
                "background-position": "-64px 0"
            });
            $(".tanchu h1").text("您收藏过该商品！");
            $(".tanchu .text .right").append("<p>去<a href='#'>我收藏的宝贝</a>看看</p>");
            $(".tanchu").show().stop().animate({top: "60%"});

        }
    });

    $(".contact").click(function () {
        var cTitle =  $(".contact").attr("title");
        var dTitle =  "请先支付定金";
        if (cTitle == dTitle) {
            $(".fullScreen").show().css("height", bodyH);
            $(".tanchu .left").css({
                "background-image": "url(images/WL/tanchu.png)",
                "background-repeat": "no-repeat",
                "background-position": "-64px 0"
            });
            $(".tanchu h1").text("抱歉，您现在还无法联系卖家！");
            $(".tanchu .text").css({"margin-top":"30px","padding-left":"20px"});
            $(".tanchu .text .right").append("<p>交易类宝贝因为每个宝贝只有一个，所以为了保障您和卖家的交易能够顺利精进行，只有在支付定金后才可与卖家联系，支付定金后若不想要宝贝了，定金可退</p>");
            $(".tanchu").show().stop().animate({top: "60%"})
        }
    });




    /*隐藏弹出框*/
    $(".tanchu").find(".in i").click(function () {
        $(".tanchu").hide().css("top","100%");
        $(".tanchu .text .right p").remove();
        $(".tanchu .text").css({"margin-top":"80px","padding-left":"40px"});
        $(".fullScreen").hide()
    })

});