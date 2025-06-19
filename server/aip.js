const baseUrl = 'http://192.168.1.104:8080'
const api = {
  checkSessionKey: `${baseUrl}/login/checkSessionKey`,
  saveTeacherInfo: `${baseUrl}/login/saveTeacherInfo`,
  saveUserInfo: `${baseUrl}/login/saveUserInfo`,
  upload: `${baseUrl}/file/uploadFile`,
  queryByUserId:`${baseUrl}/user/queryByUserId`,
}

module.exports = api
