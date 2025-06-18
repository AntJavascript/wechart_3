// pages/userReg/userReg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '',
    phone: '',
    school: '',
    address: ''
  },
  toSelectMap(e) {
      const _this = this
   wx.chooseLocation({
     success(res){
       _this.setData({
        address: res.address
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
