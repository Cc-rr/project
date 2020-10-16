//amd规范
define(["jquery", "jquery-cookie"],function($){
    function move(){
        $(function(){
            var aBtns = $(".banner").find("ol li");
            var oUl =$('.banner').find('ul');
            var iNow = 0;
            var timer =null;


            $('.banner').mouseenter(function(){
                clearInterval(timer);
            });
            $('.banner').mouseleave(function(){
                timer = setInterval(function(){
                    iNow++;
                    tab();

                },1500);
            })

            aBtns.click(function(){
                iNow = $(this).index();
                tab()
            })

            timer = setInterval(function(){
                iNow++;
                tab();
            },1500);

            function tab(){
                aBtns.removeClass("active1").eq(iNow).addClass('active1');

                if(iNow == aBtns.size()){
                    aBtns.eq(0).addClass("active1");
                }
            

            oUl.animate({
                top:iNow * -350,
            },500,
            function (){
                if(iNow == aBtns.size()) {
                    iNow =0;
                    oUl.css('top',0);
                }
            }
            )
        }
        })
    }
    function cart(){
        $(function(){
            var aBtns = $(".newbook1").find("ol li");
            var oDiv =$('.banner3');
            var iNow = 0;
            // var timer =null;
            aBtns.click(function(){
                iNow = $(this).index();
                tab()
            })

            // timer = setInterval(function(){
            //     iNow++;
            //     tab();
            // },1500);

            function tab(){
                aBtns.removeClass("active3").eq(iNow).addClass('active3');

                if(iNow == aBtns.size()){
                    aBtns.eq(0).addClass("active3");
                }
            

            oDiv.animate({
                top:(iNow * -525),
            },500,
            function (){
                if(iNow == aBtns.size()) {
                    iNow =0;
                    oDiv.css('top',0);
                }
            }
            )
        }
        })
    }
    //detail.html(没看视频把这个都写在一起了，下次绝对不会了)
  function shopdownload() {
    $.ajax({
      url:"../data/data.json",
      success: function (arr) {
        var str = ``;
        for (var i = 0; i < arr.length; i++) {
          str += `<li class=".content-ul_li">
                        <a href="details.html?product_id=${arr[i].product_id}">
                            <img src="${arr[i].img}" alt="" srcset="">
                            <div class="d1-text">
                                <div class="d1book"><a href="#">${arr[i].text}</a></div>
                                <p class="author">${arr[i].author}</p>
                                <p class="special">${arr[i].special} <span class="original">${arr[i].original}</span> </p>
                                <div  class="buy" id=${arr[i].product_id}><a href="details.html?product_id=${arr[i].product_id}"> 加入购物车</a></div>
                            </div>
                        </a>
                    </li>`;
        }
        $(".content-ul ").html(str);
      },
      error: function (msg) {
        console.log(msg);
      },
    })
  }
    //shopping的加入购物车移入移出
    // function shoppinghover(){

    //     $(".content-ul").on("mouseenter", ".content-ul_li", function(){
    //         // $(this).find(".buy").css("display", "block");
    //         console.log(123456)

    //     })
    //     $("#J_miRecommendBox .xm-recommend ul.row").on("mouseleave", ".J_xm-recommend-list", function(){
    //         $(this).find(".xm-recommend-tips a").css("display", "none");
    //     })
    // }
    return{
        move,
        cart,
        shopdownload,
        // shoppinghover
    }
})