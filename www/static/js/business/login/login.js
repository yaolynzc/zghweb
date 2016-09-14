$(function(){
    $("#loginBtn").on('click',function(){
        var mydata={
            username:$("#email").val(),
            password:$("#passwd").val()
            // __CSRF__:G_csrf
        }
        
        $.ajax({
                url:'/home/login/dologin',
                data:mydata,
                type:'POST',
                success:function(json){
                    if(json.status===1){
                        alert(json.msg);
                        window.location.href="/";
                    }else {
                        alert(json.msg);
                    }
                }
        })
    })
})