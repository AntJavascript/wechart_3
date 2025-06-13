Page({
  /**
   * 页面的初始数据
   */
  data: {
    autosize: { maxHeight: 100, minHeight: 50 },
    name: "", // 姓名
    phone: "", // 联系电话
    price: "", // 价格
    discipline: "", // 教学学科
    disciplineArray: ['管理学', '医学', '农学', '工学'], // 教学学科选项
    teachingYears: "", // 教龄
    education: "", // 学历
    educationArray: ["专科","本科","硕士研究生","博士研究生"], // 学历选项
    school: "", // 毕业院校
    teachingMethod: "", // 授课方式
    teachingMethodArray: ['学生上门', '网络授课', '上门授课'], // 授课方式选项
    personaldesc: "", // 个人描述
    personalPhotos: [], // 个人照片
    IDCards: [], // 身份证
    academicCertificates: [], // 学历证书
    vocationalCertificates: [], // 职业证书
    HonorCertificates: [], // 荣誉证书
  },
  bindDisciplineChange(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
        discipline: e.detail.value
    })
  },
  bindEducationChange(e){
    this.setData({
        education: e.detail.value
    })
  },
  bindTeachingMethodChange(e){
    this.setData({
        teachingMethod: e.detail.value
    })
  },
  uploadFile(file){
    wx.uploadFile({
        url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
        filePath: file.url,
        name: 'file',
        formData: { user: 'test' },
        success(res) {
          // 上传完成需要更新 fileList
          console.log(res)
        },
      });
  },
  // 个人照片上传
  personalPhotosupload(event) {
    const { file } = event.detail;
    this.uploadFile(file)
  },
  // 身份证上传
  cardPhotosupload(event) {
    const { file } = event.detail;
    this.uploadFile(file)
  },
  // 学历证书上传
  academicPhotosupload(event) {
    const { file } = event.detail;
    this.uploadFile(file)
  },
  // 职业证书上传
  vocationalPhotosupload(event) {
    const { file } = event.detail;
    this.uploadFile(file)
  },
  // 荣誉证书上传
  honorPhotosupload(event) {
    const { file } = event.detail;
    this.uploadFile(file)
  },
  // 提交注册
  submit() {
    wx.request({
        url: 'http://192.168.1.104:8080/login/saveTeacherInfo', //仅为示例，并非真实的接口地址
       method: 'POST',
       data:{
           name: '第一个',
           mobile: '15817351609',
           teachingSeniority: 10,
           personalProfile: '我是一名老教授'
       },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success (res) {
          console.log(res.data)
        }
      })
  }
})
