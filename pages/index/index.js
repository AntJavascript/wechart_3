// index.js
Page({
  data: {
    logined: false, // 是否已经登录
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
  }
})
