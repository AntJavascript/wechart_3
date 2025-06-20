// index.js
const api = require('../../server/aip')
const request = require('../../server/request')
Page({
  data: {
    logined: false, // 是否已经登录
    isteacher: false, // 是否teacher
    loading: true, // 是否正在请求中
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
      wx.hideTabBar()
      const _this = this
    wx.login({
        success (res) {
          if (res.code) {
            // 发起网络请求
            request({
                url: `${api.checkSessionKey}/${res.code}`
            }).then(res => {
                console.log(res)
              if(res?.data?.token){// 当前微信用户已注册
                wx.showTabBar()
                _this.checkUserRole(res?.data?.openid).then(user => {
                    _this.setData({
                        logined: true,
                        isteacher: user.data.type === '0',
                        loading: false,
                      })
                })
                wx.setStorageSync('token', res?.data?.token)
              } 
              if(res?.data?.openid) {
                wx.setStorageSync('openid', res?.data?.openid)
              }
            })
          } else {
            wx.showToast({
              title: '失败',
              icon: 'error',
              duration: 2000
            })
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
  },
  // 校验用户角色
  checkUserRole(openid) {
    return request({
        url: `${api.queryByUserId}/${openid}`
    })
  }
})
