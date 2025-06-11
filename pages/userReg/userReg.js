// pages/userReg/userReg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    avatarUrl: 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0',
    nickName: '',
    phone: ''
  },
  onInputChange(e) {
    const nickName = e.detail.value
    this.setData({
      "nickName": nickName,
    })
  },
})
