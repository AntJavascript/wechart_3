// pages/my/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isLogin: false,
    defaultAvatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    wx.checkSession({
      success () {
        this.setData({isLogin: true})
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail () {
        // session_key 已经失效，需要重新执行登录流程
        this.setData({isLogin: false})
        wx.login() //重新登录
      }
    })
  },
  toRegister(){
    wx.navigateTo({
      url: '/pages/userReg/userReg'
    })
  },
  toRegisterTeach(){
    wx.navigateTo({
      url: '/pages/regTeacher/regTeacher'
    })
  },
  toFindTeach(){}
})
