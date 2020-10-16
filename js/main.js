console.log("加载成功");
//一个.html页面独享一个js，配置要引入的js文件
require.config({
  paths: {
    "jquery": "jquery-1.11.3",
    "jquery-cookie": "jquery.cookie",
    "parabola": "parabola",
    "index": "index",
    "banner": "banner",
    "shopping":"shopping"
  },
  shim: {
    //设置依赖关系
    "jquery-cookie": ['jquery'],
    //parabola 不遵从amd规范
    parabola: {
      exports: "_"
    }
  }
})


// require(["index","banner"], function(index,banner){
//   index.download();
//   index.shoppingCar();
//   index.sc_RightHover();
//   index.sc_RightDelete();
//   index.sc_RightNumButton();


//   //轮播图可以实现
//   banner.move();
// })
require(["banner","index"], function(banner,index){
  index.download();
  index.listdownload();
  index.hover();
  index.asidedownload();
  banner.shopdownload();
  // banner.shoppinghover()
  //轮播图可以实现
  banner.move();
  banner.cart();
})
