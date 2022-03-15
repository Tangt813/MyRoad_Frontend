var amapFile = require('../../libs/amap-wx.130');//如：..­/..­/libs/amap
Page({
  onLoad: function() {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({key:'高德Key'});
    myAmapFun.getPoiAround({
      success: function(data){
        //成功回调
      },
      fail: function(info){
        //失败回调
        console.log(info)
      }
    })
  },
})