//遵从AMD规范
define(["parabola", "jquery", "jquery-cookie"], function (parabola, $) {
  function download() {
    $.ajax({
      url:"../data/data.json",
      success: function (arr) {
        var str = ``;
        for (var i = 0; i < arr.length; i++) {
          str += `<div class="d1 fl">
          <a href="details.html?product_id=${arr[i].product_id}">
              <img src="${arr[i].img}" alt="" srcset="">
              <div class="d1-text">
                  <div class="d1book">${arr[i].text}</div>
                  <p class="author">${arr[i].author}</p>
                  <p class="special">${arr[i].special}<span class="original">${arr[i].original}</span> </p>
              </div>
          </a>
      </div>`;
        }
        $(".banner3 ").html(str);
      },
      error: function (msg) {
        console.log(msg);
      },
    })
  }


  















  function asidedownload() {
    $.ajax({
      url:"../data/aside.json",
      success: function (arr) {
        // alert(arr)
        var str='';
        var str1='';
        var arr2
        for(var i=0;i<arr.length;i++){
          node1=$(`<li><a href="#">${arr[i].title1}<span class="fr">></span></a><div class="act2-list"></div></li>`); 
          
            // $(".book-kind ").html(str);
            node1.appendTo(".book-kind ");

            arr2 = arr[i].asideNav;

            for(var j=0;j<arr2.length;j++){
              // console.log(arr2[j].title)
            node=$(` 
            <div class="act2-list1">

            </div>
            `); 
            // console.log(arr[i]);
            // console.log(arr2[1].title)
            node.appendTo(node1.find(" .act2-list"));
            // str1.appendTo(".book-kind li") 
            node3=$(`<p>${arr2[j].title1}</p>`);
            
            node3.appendTo(node);
              var arr3 = [];
              arr3.push(arr2[j].asidenav);
              // $(`<a href="#">123456</a><span>|</span> `).appendTo(node3);
              node4=$(`<div></div>`).appendTo(node3)
              for(var k=0;k<arr3.length;k++){
                
                $(`<a href="shopping.html">${arr3[k]}<span>|</span></a> `).appendTo(node4);

              }
         
            }
          
        }
       
      },
      error: function (msg) {
        console.log(msg);
      },
    })
  }





  function listdownload() {
    $.ajax({
      url:"../data/list1.json",
      success: function (data) {
        var str = ``;
          var childArr = data[0].list1
        for (var j = 0; j < childArr.length; j++) {
          str += `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      } 
      $(".wrap1 ").html(str);
      $(".wrap2 ").html(str);
        var str1=``;
        var childArr = data[1].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
      $(".wrap3 ").html(str1);
       str1=``;
        var childArr = data[2].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
      $(".wrap4 ").html(str1);
        
        str1=``;
        var childArr = data[3].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
        $(".wrap5 ").html(str1);
        str1=``;
        var childArr = data[4].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
        $(".wrap6 ").html(str1);
        str1=``;
        var childArr = data[5].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
        $(".wrap7 ").html(str1);
        str1=``;
        var childArr = data[6].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
        $(".wrap8 ").html(str1);
        str1=``;
        var childArr = data[7].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
        $(".wrap9 ").html(str1);
        str1=``;
        var childArr = data[8].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
        $(".wrap10 ").html(str1);
        str1=``;
        var childArr = data[9].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
        $(".wrap11 ").html(str1);
        str1=``;
        var childArr = data[10].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
        $(".wrap12 ").html(str1);
        str1=``;
        var childArr = data[10].list1;
        for (var j = 0; j < childArr.length; j++) {
          str1+= `<div class="supply fl">
          <a href="shopping.html">
              <img src="${childArr[j].img}" alt="" srcset="">
              <div class="supply-text">
                  <div class="supply-book"><a href="#">${childArr[j].text}</a></div>
                  <p class="supply-person"><span></span> ${childArr[j].author}</p>
                  <p class="supply-special">${childArr[j].special} <span class="original">${childArr[j].original}</span> </p>
              </div>
          </a>
      </div>`; 
      }
      $(".list2-list ").html(str1);




        
      },
      error: function (msg) {
        console.log(msg);
      },
    })
  }
    function hover(){
      var aBtns = $(".list1-wrap ").find(" li");
            var aDivs = $(".list1-wrap1").find("div");
            aBtns.mouseover(function(){
              // aBtns.attr("class", "");
              aDivs.css("display", 'none');
              console.log("123456")
              // $(this).attr("class", "active");
              aDivs.eq($(this).index()).css("display", 'block');
            })
    }

  
    
    return {
      download,
      listdownload,
      hover,
      asidedownload,
      // shoppingCar,
      // sc_RightHover,
      // sc_RightDelete,
      // sc_RightNumButton
    };
  });
  