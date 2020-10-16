define(["jquery","jquery-cookie"],function($){
    
    //放大镜操作
   

    function download(){
        //1.找到详情也加载商品的id
        var product_id = valueByName(location.search, "product_id");
        // alert(product_id)
        //2.通过商品的id，找到商品信息
        $.ajax({
            type:'get',
            url:"../data/data.json",
            success:function(arr){
                // var str =``;
                var goodsMsg = arr.find(item => item.product_id == product_id);
                var node = $(` <div class="left_big fl" >
                <div class="small_img">
                    <img src="${goodsMsg.img}" alt="" srcset="">
                    <div class="mark"></div>
                </div>
                <div class="big_img">
                    <img src="${goodsMsg.img}" alt="">
                </div>
            </div>
            <div class="right_text fl">
               <p class="text_1"><span></span> ${goodsMsg.text}（全面升级！冯唐全新语录+网红老妈幽默段子，特收录冯唐24节气书法）</p> 
               <p>冯唐2021金句日历全新升级！超人气网红老妈幽默段子首次收录！冯唐亲写24节气书法，新国风奢美设计；精美烫印金工艺，180°平摊布书脊+定制金丝带，收藏馈赠新一年的欢喜！</p>
               <p class="text_2">作者；${goodsMsg.author}<span ></span>出版社:<a href="#">中国华侨出版社</a><span></span>出版时间：2020年8月</p>
               <p style="color:red">￥${goodsMsg.special}</p>
                <a href="cart.html"><div class="buycar" id='${goodsMsg.product_id}'> 加入购物车</div></a>
            </div>`)
            node.appendTo('.main .main_content') 
            }
           
            ,
            error:function(msg){
                console.log(msg);
            }
        })
        // glass()
        //购物车
        $('.main_content').on("click",".buycar",function(){
            //获取加入购物车按钮
            var id=this.id;
            //进行购物车操作   goods键，json格式字符串为值
            //1、先去判断cookie中是否存在商品信息
            var first = $.cookie("goods") == null ? true : false;
            
            if(first){
                //直接创建cookie
                var cookieStr = `[{"id":${id},"num":1}]`;
                $.cookie("goods", cookieStr, {
                    expires: 7
                })
            }else{
                var same = false; //假设没有添加过
                //3、如果不是第一次添加，判断之前是否添加过
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                for(var i = 0; i < cookieArr.length; i++){
                    if(cookieArr[i].id == id){
                        //如果之前添加过，数量+1
                        cookieArr[i].num++;
                        same = true;
                        break;
                    }
                }
                if(!same){
                    var obj = {id:id,num:1};
                    cookieArr.push(obj);
                }
                //最后存回cookie
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })

                
            }
            
        })


       
    }


    function valueByName(search,name){
        var start = search.indexOf(name +'=')
        if(start == -1){
            return null
        }else{
            var end = search.indexOf("&",start);
            if(end == -1){
                end =search.length;
            }

            var str = search.substring(start,end);
            var arr = str.split("=");
            return arr[1];
        }
    }
    



        
    function glass(){
        console.log(12346)
        $('.main_content').on("mouseover",".small_img",function(){
            $(".mark,.big_img").show();
            console.log(123456)
        })
        $('.main_content').on("mouseleave",".small_img",function(){
            $(".mark,.big_img").hide();
        })
        $('.main_content').on("mousemove",".small_img",function(ev){
            var l = ev.clientX - $(this).offset().left - 100;
            l = Math.max(0, l);
            l = Math.min(l, 220);
            var t = ev.clientY - $(this).offset().top - 100;
            t = Math.max(0, t);
            t = Math.min(t, 210);
            $(".mark").css({
              left: l,
              top: t
            })
            $(".big_img img").css({
              left: -2 * l,
              top: -2 * t
            })
        })
    }
    //加入购物车按钮，添加点击操作
    // $(".buycar").click(function(){
    //     alert('123456')

    //     var id = this.id;

    //     alert(id)
    // })
   

    return{
        
        download,
        glass
    }
});