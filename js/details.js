console.log('加载成功')
//配置当前项目引入的模块
require.config({
    paths:{
        "jquery":"jquery-1.11.3",
        "jquery-cookie":"jquery.cookie",
        "goodsDesc":"goodsDesc"
    },
    shim:{
        "jquery-cookie":["jquery"]
    }
})

require(['goodsDesc'],function(goodsDesc){
    
    goodsDesc.download();
    goodsDesc.glass();
})

//再次创建一个文件处理详情页