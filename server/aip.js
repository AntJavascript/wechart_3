const baseUrl = 'http://192.168.1.104:8080'
const api = {
  checkSessionKey: `${baseUrl}/login/checkSessionKey`, // 验证登录
  saveTeacherInfo: `${baseUrl}/login/saveTeacherInfo`, // 注册教员
  saveUserInfo: `${baseUrl}/login/saveUserInfo`, // 注册用户
  upload: `${baseUrl}/file/uploadFile`, // 上传图片
  queryByUserId:`${baseUrl}/user/queryByUserId`,  // 查询个人信息
  saveStudentInfo:`${baseUrl}/login/saveStudentInfo`,  // 注册学员
  teacherList:`${baseUrl}/teacher/teacherList`,  // 查询所有老师列表
  queryTeacherDetail: `${baseUrl}/teacher/queryByUserId`,  // 查询老师详情
  
}

module.exports = api
