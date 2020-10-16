define(["jquery"],function($){
    //登录操作
    function registerSend(){
        $(".deng").click(function(){
            $.ajax({
                type:"post",
                url:'./php/login.php',
                data:{
                    username:$(".login_p").eq(0).val(),
                    password:$(".login_p").eq(0).val(),
                },
                success:function(result){
                    // console.log(result);
                    var obj = JSON.parse(result);
                    if(obj.code){
                        $(".err_trip").attr("class","icon_error")
                    }else{
                        $(".err_trip").attr("class","icon_true")
                        $(".err_trip1").css("color","rgb(15, 136, 80)")
                        setTimeout(function(){
                            location.assign("index.html")
                        },1000)


                    }
                    $(".err_trip1").html(obj.msg);
                },
                error:function(msg){
                    console.log(msg)
                }
            
            })
        })
    }

    return{
        registerSend
    }
})