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
    
  }
})
