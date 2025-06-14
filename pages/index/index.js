// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

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
    wx.checkSession({
      success: () => {
        this.setData({isLogin: true})
        //session_key 未过期，并且在本生命周期一直有效
      },
      fail: () => {
        // session_key 已经失效，需要重新执行登录流程
        this.setData({isLogin: false})
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
        }) //重新登录
      }
    })
    // wx.request({
    //     url: 'http://192.168.1.104:8080/login/saveUserInfo', //仅为示例，并非真实的接口地址
    //    method: 'POST',
    //    data:{
    //        id: 11
    //    },
    //     header: {
    //       'content-type': 'application/json' // 默认值
    //     },
    //     success (res) {
    //       console.log(res.data)
    //     }
    //   })
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
