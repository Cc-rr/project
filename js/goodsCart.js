//加载数据不写了
define(["jquery", "jquery-cookie"],function($){
    //加载已经加入购物车的商品
    //异步加载用不到要记住

    function loadCarData(){
         //1.找到详情也加载商品的id
         // alert(product_id)
         //2.通过商品的id，找到商品信息
          //加载右侧的购物车里面的数据   根据购物车内的商品，筛选加入购物车的商品信息
      //1、购物车的数据存储在cookie  2、商品数据在服务器
      
        
    
         $.ajax({
             type:'get',
             url:"../data/data.json",
             success:function(arr){
                //  console.log(arr) 所有商品的信息  我们需要找出被加入购物车的数据
                //1.在购物车中将所有数据拿到
            var cookieStr = $.cookie("goods");
            console.log(cookieStr )
            if(!cookieStr){
                return;
            }    
            var cookieArr = JSON.parse(cookieStr);
                //精益求精  写算法

            var newArr = [];
            for(var i = 0; i < arr.length; i++){
              for(var j = 0; j < cookieArr.length; j++){
                  
                if(cookieArr[j].id == arr[i].product_id){
                  arr[i].num = cookieArr[j].num;
                  newArr.push(arr[i]);
                  break;
                }
                
              }
              
            }
            for(var i = 0; i < newArr.length; i++){
                 var node = $( `<div id="${newArr[i].product_id}" class="body_wrap">
                 <div class="list_0"><input type="checkbox" name="" id="check"></div>
                 <div class="list_1">
                     <div class="list_1_img fl">
                         <img src="${newArr[i].img}" alt="">
                     </div>
                     <div class="list_1_text fl">
                                ${newArr[i].text}   （全面升级！当当特惠，速来购买，买二送一）
                     </div>
                 </div>
                 <div class="list_2">￥<span>${newArr[i].special}</span> </div>
                 <div class="list_3"><button class="sub">-</button><span id="num">${newArr[i].num}</span><button class="add">+</button></div>
                 <div class="list_4" style="color: red">￥${(newArr[i].special * newArr[i].num).toFixed(2)}</div>
                 <div class="list_5"><a href="javascript:;">删除</a> </div>
               </div> `)
                node.appendTo('.wrap_body')
             }
             
             isCheckAll();
            }
            
             ,
             error:function(msg){
                 console.log(msg);
             }
         })
        }
        //全选按钮 和单选按钮加点击
        // function checkfunction(){
        //     $(".cart_list .list_0").find(".col-check")
        // }


        //设置商品总价
        function isCheckAll(){
            var allChecks = $(".wrap_body").find(".body_wrap");
            var total= 0; //记录总数
            var totalnum= 0
            allChecks.each(function(index, item){
                totalnum += parseFloat($(item).find(".list_3").children("#num").text());
                total += parseFloat($(item).find(".list_3").children("#num").text()) * parseFloat($(item).find(".list_2").children().text());
            });
            $(".shopnum").html(total.toFixed(2));
            // $(".shopnum").html(total.toFixed(2));
            


        }

        //给页面上的商品添加删除    数量增减的操作
        function changeCars(){
            //给每一个删除按钮添加事件
            $('.wrap_body').on("click",".body_wrap .list_5",function(){
                var id = $(this).closest(".body_wrap").remove().attr("id");
                //cookie中删除数据
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                for(var i = 0; i < cookieArr.length; i++){
                    if(id == cookieArr[i].id){
                        //删除数据
                        cookieArr.splice(i, 1);
                        break;
                    }
                }
                cookieArr.length == 0 ? $.cookie("goods", null) : $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                })
                isCheckAll();
                return false;
                
            })

            $('.wrap_body').on("click",".sub,.add",function(){
                var id = $(this).closest(".body_wrap").attr("id");
                var cookieStr = $.cookie("goods");
                var cookieArr = JSON.parse(cookieStr);
                var str 
                for(var i = 0; i < cookieArr.length; i++){
                    if(cookieArr[i].id == id){
                        //说明该用户找到了
                        if(this.className == "sub"){
                            //数量-1
                            cookieArr[i].num == 1 ? alert("数量已经为1，不能再减少！") : cookieArr[i].num--;
                        }else{
                            cookieArr[i].num +=1;
                        }
                        break;
                    }

                }
                
                $(this).siblings("#num").html(cookieArr[i].num);
                var price = parseFloat($(this).closest(".list_3").siblings(".list_2").children().text());
                $(this).closest(".list_3").siblings(".list_4").html('￥'+(price * cookieArr[i].num).toFixed(2) );
                
                //  str+=  '￥'+(price * cookieArr[i].num).toFixed(2); 
                // console.log( $('.list4').html(str)) 
                $.cookie("goods", JSON.stringify(cookieArr), {
                    expires: 7
                }) 
                isCheckAll();
                return false;

               
            })

        }
        
    
    
    
    return{
        loadCarData,
        changeCars
    }

});