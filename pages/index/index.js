// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
  data: {
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 500,
    background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
    userInfo: {
      avatarUrl: defaultAvatarUrl,
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    menus:[
        {
            icon: './images/music.svg',
            text: '音乐'
        },
        {
            icon: './images/dance.svg',
            text: '舞蹈'
        },
        {
            icon: './images/Performance.svg',
            text: '表演'
        },
        {
            icon: './images/host.svg',
            text: '播音主持'
        },
        {
            icon: './images/art.svg',
            text: '美术设计'
        },
        {
            icon: './images/calligraphy.svg',
            text: '书法'
        },
        {
            icon: './images/art.svg',
            text: '戏曲'
        }
    ]
  },
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
   
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
  upload() {
      console.log(wx)
  },
  onChooseAvatar(e) {
    const { avatarUrl } = e.detail
    const { nickName } = this.data.userInfo
    this.setData({
      "userInfo.avatarUrl": avatarUrl,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
    })
  },
  onInputChange(e) {
    const nickName = e.detail.value
    const { avatarUrl } = this.data.userInfo
    this.setData({
      "userInfo.nickName": nickName,
      hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
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
  },
  onTapClick() {
    wx.requestSubscribeMessage({
        tmplIds: ['z37t7hBC9fNvhr8hqlIgkAGW5-VQ_Zr2FZVwMhnOsE0'],
            success: res=> {
                console.log(res);
                },
            fail:e => {
                console.log(e, '---------')
            }
        });
  }
})
