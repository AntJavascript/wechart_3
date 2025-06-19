// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    islogin: false,
    isteacher: true,
    defaultAvatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      isteacher: wx.getStorageSync('isteacher')
    })
  },
  toRegister(){
    wx.navigateTo({
      url: '/pages/userReg/userReg'
    })
  },
  toRegisterTeach(){
      console.log(1111)
    wx.navigateTo({
      url: '/pages/regTeacher/regTeacher'
    })
  },
  toFindTeach(){}
})
