Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "", // 姓名
    phone: "", // 联系电话
    price: "", // 价格
    discipline: "", // 教学学科
    teachingYears: "", // 教龄
    education: "", // 学历
    school: "", // 毕业院校
    teachingMethod: "", // 授课方式
    personaldesc: "", // 个人描述
    personalPhotos: [], // 个人照片
    IDCard: [], // 身份证
    academicCertificates: [], // 学历证书
    vocationalCertificates: [], // 职业证书
    HonorCertificates: [], // 荣誉证书
  },
  bindDisciplineChange(){
    console.log('picker发送选择改变，携带值为', e.detail.value)
  }
})
