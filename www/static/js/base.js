/**
* 公共js
**/
$(function(){

    //头部
    $(".dright").find("li:last-child").css("background","none");
    $(".hideNav").find("dl:last-child").css("border","none");

    $(".dright").find("li").hover(function(){
        $(this).find(".hideNav").show().parent().siblings().find(".hideNav").hide();
    },function(){
        $(".hideNav").hide();
    });

    //模仿下拉选择
    $(".selectd").find("span").click(function(){
        $(this).parent().find("ul").show();
        $(this).parent().find("li").click(function(){
            var select = $(this).text();
            $(".selectd").find("i").text(select);
            $(".selectd").find("ul").hide();
        })
        event.stopPropagation();
    })
    $(document).click(function(){
        $(".selectd").find("ul").hide();
    })

    //首页侧边导航交互
    $("#navList").find("li:last-child").siblings().find(".hideArea").css({"top":"-1px"});
    $("#navList").find("li:last-child").find(".hideArea").css({"bottom":"-1px"});
    $("#navList").find("li").hover(function(){
        $(this).find(".hideArea").show().parent().siblings().find(".hideArea").hide();
    },function(){
        $(".hideArea").hide();
    });

    //首页小banner
    jQuery(".picshow").slide({titCell:".hd ul",mainCell:".picList ul",effect:"leftLoop",autoPlay:true,autoPage:"<li></li>"});

    //公告通知轮播
    jQuery(".noticePic").slide({mainCell:".noticeList ul",effect:"leftLoop",autoPlay:true});

    //选项卡
    $("#mList").find("a").click(function(){
        var i = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $("#mid3Area").find(".mid3Tab").eq(i).show().siblings().hide();
    });

    //为您推荐选项卡
    $("#mList1").find("a").click(function(){
        var i = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".tjList").find("ul").eq(i).show().siblings().hide();
    });

    //合作伙伴
    $(".flinkList li").hover(function(){
        $(this).find("img:first-child").hide();
        $(this).find("img:last-child").show();
    },function(){
        $(this).find("img:first-child").show();
        $(this).find("img:last-child").hide();
    });

    //分页头部下拉菜单
    $("#topXl").hover(function(){
        $(this).find(".navList").show();
    },function(){
        $(this).find(".navList").hide();
    });

    //点赞
    $(".dzfx").find("li").click(function(){
        $(this).find("span").show();
    })

    //选项卡
    $(".ptTit").find("li").hover(function(){
        var pti = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(this).parent().parent().next().find(".ptzxArea").eq(pti).show().siblings().hide();
    });

    //培训模拟select
    $("#xiala").find("div").click(function(){
        $(this).next().show();
        $(this).parent().addClass("on");
        $(this).parent().find("li").click(function(){
            var stext = $(this).text();
            $(this).parent().prev().find("span").text(stext);
            $("#xiala").find("ul").hide();
            $("#xiala").removeClass("on");
        });
        event.stopPropagation();
    });
    $(document).click(function(){
        $("#xiala").find("ul").hide();
    })

    //人才库交互
    $(".rcRight").find("li").hover(function(){
        $(this).find("a").stop(true,true).animate({"top":"0"});
    },function(){
        $(this).find("a").stop(true,true).animate({"top":"190"});
    });

    //人才培训选项卡
    $(".rckTop").find("li").click(function(){
        var rli = $(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".rcRight").find("ul").eq(rli).show().siblings().hide();
    });

    $(".tjrcList").find("li:last-child").css("border","none");



    //yxjs

    //购物车
    $(".Td1 input[type='checkbox']").change(function(){
        if($(this).is(':checked')){
            $(this).parents(".Border").css("background","#eee");

            var chk = document.getElementById("check")
            $(this).parents("sCTable").find("Title").find(".Td1 input")

            chk.checked = true;
        }else{
            $(this).parents('.Border').css("background","#fff");
            var chk = document.getElementById("check");
            chk.checked = false;
        }
    });



    //蒙版层
    $(".sc").click(function () {
        $(".mbc").fadeIn();
    });
    $(".qx").click(function () {
        $(".mbc").fadeOut();
    });

    $(".sq").click(function () {
        $(".mbq").fadeIn();
    });
    $(".qx").click(function () {
        $(".mbq").fadeOut();
    });

    //登录
    $(function(){
        var obj = document.getElementById('pw');
        obj.onclick = change;
        function change(){
            obj.value = '';
            obj.type = 'password';}
    });

    //模仿下拉选择
    $(".ddSelect").find("span").click(function(){
        $(this).parent().find("ul").show();
        $(this).parent().find("li").click(function(){
            var select = $(this).text();
            $(".ddSelect").find("i").text(select);
            $(".ddSelect").find("ul").hide();
        });
    });

    //新头部下拉
    $(".dTLeft").find("li").hover(function(){
        $(this).find(".dHideNav").show().parent().siblings().find(".dHideNav").hide();
    },function(){
        $(".dHideNav").hide();
    });

//模仿下拉选择
    $('.fbBxl').toggle(function () {
        $(this).find("ul").stop(true,true).slideDown(400);
        $(this).find("em").css("background","url('../images/images/fbBxlpic2.png') no-repeat left center")

    },function () {
        $(this).find("ul").stop(true,true).slideUp(250)
        $(this).find("em").css("background","url('../images/images/fbBxlpic1.png') no-repeat left center")
    });
    $(document).click(function(){
        $(".fbBxl").find("ul").hide();
        $(".fbBxl").find("em").css("background","url('../images/images/fbBxlpic1.png') no-repeat left center")

    });
    $('.fbBxl ul li').click(function () {
        $(this).parent().siblings('input').val($(this).text());
    });








    //zmxjs

    /*midOne banner*/
    $(".LeftBot").find("li").click(function(){
        var i=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $(".LeftTop").find("li").eq(i).show().siblings().hide()

    });

    /*.Tr1上边框*/
    $(".midThree .Tright").find(".Tr1").css({"border-top":"2px solid #d2d2d2"});

    /*.Tr4 ul li去掉右外边距*/
    $(".midThree .Tright .Tr4").find("li:nth-child(3n)").css({"margin-right":"0"});

    /*宝贝详情 服务评价选项卡*/
    $("#title").find("li").click(function(){
        var i=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $("#xxk1").find(".Content1").eq(i).show().siblings().hide();
        $("#xxk2").find(".Content2").eq(i).show().siblings().hide()

    });

    /*服务评价-评论选项卡*/
    $("#title2").find("li").click(function(){
        var i=$(this).index();
        $(this).addClass("on").siblings().removeClass("on");
        $("#Txtlist").find("ul").eq(i).show().siblings().hide()

    });

    /*右上角关闭弹窗*/
    $(".hovers").find(".Esc").click(function(){
        $(this).parents(".hovers").hide()
    });

    /*按钮关闭弹窗*/
    $(".hovers .boxBut").find(".inputS").click(function(){
        $(this).parents(".hovers").hide()
    });


    /*已收藏商品*/ /*收藏成功弹窗*/
    $("#collect").find(".a1").click(function(){
        $(this).hide().siblings().show();

        $("#hovers1").show()

    });


    /*已收藏商家*/
    $("#Rbot").find(".em2").click(function(){
        $(this).hide().siblings().show()
    });


    /*已收藏弹窗*/
    $("#collect").find(".a2").click(function(){

        $("#hovers2").show()

    });

    /*报价弹窗*/
    $("#but2").find(".bj").click(function(){

        $("#hovers3").show()

    });


    /*收货地址*/
    $("#shdz").find("li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).find("input").attr("checked",true);
        $("#xzdz").hide();
        $("#xzdzBut").show()
    });

    /*地址选中*/
    $("#shdz ul .on").find("input").attr("checked",true);

    /*使用新地址*/
    $("#xzdzBut").click(function(){
        $(this).hide();
        $("#xzdz").show()
    });

    /*支付方式*/
    $("#fkList").find("li").click(function(){
        $(this).addClass("on").siblings().removeClass("on");
        $(this).find("input").attr("checked",true);
    });


    /*手机号码有误*/
    $("#number").find("em").click(function(){
        $(this).siblings().show()
    });

    $("#number").find(".help").click(function(){
        $(this).hide()
    });

    /*短信验证码弹窗*/
    $("#fkBut").find("input").click(function(){

        if($("#fkList ul li").hasClass("on")){
            $("#hovers4").show()
        }
    });

    /*关闭短信验证码弹窗*/
    $(".hovers .boxBut").find(".input3").click(function(){
        $(this).parents(".hovers").hide()
    });

    /*省市区点击字体变色*/
    $("#info").find("select").click(function(){
        $(this).css({"color":"#313131"})

    });

    /*text点击字体变色*/
    $(".xzdz ul li").find("input").click(function(){
        $(this).css({"color":"#313131"})

    });

    /*添加银行卡下一步*/
    $(".step1").find(".next").click(function(){
        $(".step1").hide().next().show()
    });

    $(".step2").find(".next").click(function(){
        $(".step2").hide().next().show()
    });

    $(".step3").find("a").click(function(){
        $(this).parent().hide();
        $(this).parents("#hovers5").hide()
        $(".step1").show();
    });


    /*下拉上边框*/
    $(".select").find("ul").css({"border-top":"1px solid #fff"});

    /*向下箭头隐藏*/
    $(".select").find(".em2").hide();


    /*选择银行 模仿下拉选择*/
    $(".select").find(".left").click(function(){
        $(this).find(".em1").hide();
        $(this).find(".em2").show();
        var css=$(".select1 ul").css("display");
        if(css == "none"){
            $(".select1").find("ul").show()
        }else{
            $(".select1").find("ul").hide();
            $(this).find(".em1").show();
            $(this).find(".em2").hide()
        };
        $(this).parent().find("li").click(function(){
            var select = $(this).text();
            $(".select .left").find("i").text(select);
            $(this).parent().hide();
        })
        event.stopPropagation();
    });


    $(".select").find(".right").click(function(){
        $(this).find(".em1").hide();
        $(this).find(".em2").show();
        var css=$(".select2 ul").css("display");
        if(css == "none"){
            $(".select2").find("ul").show()
        }else{
            $(".select2").find("ul").hide();
            $(this).find(".em1").show();
            $(this).find(".em2").hide()
        };
        $(this).parent().find("li").click(function(){
            var select = $(this).text();
            $(".select .right").find("i").text(select);
            $(this).parent().hide();
        })
        event.stopPropagation();

    });


    /*添加银行卡*/
    $("#Bank").click(function(){
        $("#hovers5").show()
    });


    /*===账户管理===*/

    /*公用头部 下拉*/
    $(".zhglTop .nav").find("li").hover(function(){
        $(this).find(".Hide").show()
    },function(){
        $(this).find(".Hide").hide()
    });


    //wljs


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





    //cdjs
    // 第一个多选
    $(".fltopmes").find("#em1").click(function () {
        $("#fltopmesmid1").find(".checkicon1").show();
        $("#fltopmesmid1").find(".fltopmesbar").show();
        $(this).hide();
        var wHeight = $("#fltopmesmid1").height();
        $("#fltopmesleft1").css("height",wHeight);
    })
    $(".fltopmesbar").find(".cancel").click(function () {
        $(".fltopmesmid ").find(".checkicon1").hide();
        $(".fltopmesmid ").find(".fltopmesbar").hide();
        $(".fltopmes em").show();
        var wHeight = $("#fltopmesmid1").height();
        $("#fltopmesleft1").css("height",wHeight);
        var wHeight = $("#fltopmesmid2").height();
        $("#fltopmesleft2").css("height",wHeight);
    })
    // 第二个多选
    var wHeight = $("#fltopmesmid2").height();
    $("#fltopmesleft2").css("height",wHeight);
    $(".fltopmes").find("#em2").click(function () {
        $("#fltopmesmid2").find(".checkicon1").show();
        $("#fltopmesmid2").find(".fltopmesbar").show();
        $(this).hide();
        var wHeight = $("#fltopmesmid2").height();
        $("#fltopmesleft2").css("height",wHeight);
    })
    $(".flmidright2").find("li:nth-child(4n)").css("margin-right","0")
    //输入关键字
    $(".searchArea input[type=button]").click(function () {
        var a=$(".searchArea input[type=text]").val();
        $(".fltoptitle").find("em").append(a);
    })
    //个人中心
    $(".pright-mid-title").find("ul li").click(function () {
        $(this).addClass("on").siblings().removeClass("on")
        var i=$(this).index();
        $(".pright-mid-mes").find("ul").eq(i).show().siblings().hide();
    })
    //关注中心选项卡
    $(".caresearchleft").find("li").click(function () {
        $(this).addClass("on").siblings().removeClass("on")
        var i=$(this).index();
        $(".carearea").find(".tab").eq(i).show().siblings().hide();
    })
    //关注中心视频图片效果
    $(".carevideo").find("li").hover(function(){
        $(this).find("span").stop(true,true).animate({
            top:"155px"
        })
    },function(){
        $(this).find("span").stop(true,true).animate({
            top:"189px"
        })
    })
    //收藏商品的图片交互
    $(".goods").find("li").hover(function(){
        $(this).find("span").stop(true,true).animate({
            top:"120px"
        })
    },function(){
        $(this).find("span").stop(true,true).animate({
            top:"150px"
        })
    })
    $(".careicon1").click(function () {
        $(this).addClass("ok")
    })



})


//倒计时
$(function(){
    show_time();
});

function show_time(){
    var time_start =new Date().getTime(); //设定当前时间
    var time_end =  new Date("2016/11/02 13:22:00").getTime(); //设定目标时间
    // 计算时间差
    var time_distance = time_end - time_start;
    //天
    var int_day = Math.floor(time_distance/86400000)
    time_distance -= int_day * 86400000;
    //时
    var int_hour = Math.floor(time_distance/3600000)
    time_distance -= int_hour * 3600000;
    // 分
    var int_minute = Math.floor(time_distance/60000)
    time_distance -= int_minute * 60000;
    // 秒
    var int_second = Math.floor(time_distance/1000)
    // 时分秒为单数时、前面加零
    if(int_day < 10){
        int_day = "  " + int_day;
    }
    if(int_hour < 10){
        int_hour = "0" + int_hour;
    }
    if(int_minute < 10){
        int_minute = "0" + int_minute;
    }
    if(int_second < 10){
        int_second = "0" + int_second;
    }
    // 显示时间
    $("#time_d").val(int_day);
    $("#time_h").val(int_hour);
    $("#time_m").val(int_minute);
    $("#time_s").val(int_second);
    // 设置定时器
    setTimeout("show_time()",1000);
}
