// index.js
Page({
  data: {
    islogin: false, // 是否已经登录
    isteacher: false, // 是否teacher
  },
  toRegTeacher() {
    wx.navigateTo({
      url: '/pages/regTeacher/regTeacher'
    })
  },
  toReguser() {
    wx.navigateTo({
      url: '/pages/userReg/userReg'
    })
  },
  onLoad() {
    wx.login({
        success (res) {
          if (res.code) {
            // 发起网络请求
            wx.request({
              url: `http://192.168.1.104:8080/login/checkSessionKey/${res.code}`,
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  }
})
