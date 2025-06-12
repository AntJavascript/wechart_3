Page({
  /**
   * 页面的初始数据
   */
  data: {
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
    IDCard: [], // 身份证
    academicCertificates: [], // 学历证书
    vocationalCertificates: [], // 职业证书
    HonorCertificates: [], // 荣誉证书
  },
  bindDisciplineChange(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
  },
  bindEducationChange(){
    console.log('picker发送选择改变，携带值为', e.detail.value)
  },
  bindTeachingMethodChange(){
    console.log('picker发送选择改变，携带值为', e.detail.value)
  }
})
