function request(params) {
    const { url, data, method = 'GET' } = params
    var Authorization = wx.getStorageSync('Authorization')
    return new Promise((resolve, reject) => {
        wx.request({
            url,
            data,
            method,
            header: {
                'content-type': 'application/json',
                Authorization
            },
            success(res){
                resolve(res)
            },
            fail(err) {
                resolve(err)
            }
          })
    })
}
module.exports = request