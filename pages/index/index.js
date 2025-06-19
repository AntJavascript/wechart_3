// index.js
const aip = require('../../server/aip')
const request = require('../../server/request')
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
            console.log(1111, aip)
            request({
                url: `${aip.checkSessionKey}/${res.code}`
            }).then(res => {
                console.log(res)
              if(res.Authorization){
                wx.setStorageSync('Authorization', res.Authorization)
              }
            })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
  }
})
