// pages/userReg/userReg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    school: '',
    address: '',
    addressName: '',
    longitude: '',
    latitude: '',
  },
  toSelectMap(e) {
      const _this = this
   wx.chooseLocation({
     success(res){
       _this.setData({
        address: res.address,
        addressName: res.name,
        longitude: res.longitude,
        latitude: res.latitude
       })
     }
   })
  },
  login(){
    wx.login({
  success (res) {
    if (res.code) {
      //发起网络请求
      wx.request({
        url: 'https://example.com/onLogin',
        data: {
          code: res.code
        }
      })
    } else {
      console.log('登录失败！' + res.errMsg)
    }
  }
})
  }
})
