const api = require('../../server/aip')
const request = require('../../server/request')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: '学生',
    nickname: '',
    gender: '0',
    genderArray: ['男', '女'], // 性别选项
    phone: '15811111111',
    primarySchool: "小学", // 毕业院校(小学)
    middleSchool: "初中", // 毕业院校(初中)
    highSchool: "高中", // 毕业院校(高中)
    education: "1", // 学历
    educationArray: ["小学", "初中", "高中"], // 学历选项
    address: '广东省深圳市龙湖区高坳新村',
    addressName: '',
    longitude: '',
    latitude: '',
  },
  bindGenderChange(e) {
    this.setData({
        gender: e.detail.value
    })
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
  // 注册用户
  saveUser() {
    return request({
        url: api.saveUserInfo,
        data: {
            openid: wx.getStorageSync('openid'),
            mobile: this.data.phone,
            type: '1',
            photoFileName: '',
            hxUser: ''
        },
        method: "POST",
    })
},
  async submit(){
      const res = await this.saveUser()
      if(res.data === true) {
        request({
            url: api.saveStudentInfo,
            method: 'POST',
            data: {
                userId: wx.getStorageSync('openid'),
                name: this.data.name,
                vxName: this.data.nickname,
                gender: this.data.gender === 0 ? 'man' : 'wman',
                primarySchool: this.data.school,
                middleSchool: this.data.middleSchool,
                highSchool: this.data.highSchool,
                address: this.data.address,
                mobile: this.data.phone,
                academicQualification: this.data.educationArray[this.data.education]
            }
        }).then(res => {
            if(res.data === true) {
                wx.redirectTo({
                    url: 'pages/index/index'
                })
            }
        })
      }
  }
})
