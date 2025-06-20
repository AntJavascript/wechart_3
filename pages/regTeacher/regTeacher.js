const api = require('../../server/aip')
const request = require('../../server/request')

Page({
    /**
     * 页面的初始数据
     */
    data: {
        autosize: {
            maxHeight: 100,
            minHeight: 50
        },
        name: "", // 姓名
        gender: "", // 性别
        genderArray: ['男', '女'], // 性别选项
        nickname: "", // 昵称
        phone: "", // 联系电话
        price: "", // 价格
        discipline: "", // 教学学科
        disciplineArray: ['管理学', '医学', '农学', '工学'], // 教学学科选项
        teachingYears: "", // 教龄
        education: "", // 学历
        educationArray: ["专科", "本科", "硕士研究生", "博士研究生"], // 学历选项
        primarySchool: "", // 毕业院校（小学学）
        middleSchool: "", // 毕业院校(初中)
        highSchool: "", // 毕业院校(高中)
        university: "", // 毕业院校（大学）
        teachingMethod: "0", // 授课方式
        teachingMethodArray: ['学生上门', '网络授课', '上门授课'], // 授课方式选项
        address: '', // 地址
        personaldesc: "", // 个人描述
        personalPhotos: [], // 个人照片
        IDCards: [], // 身份证
        academicCertificates: [], // 学历证书
        vocationalCertificates: [], // 职业证书
        HonorCertificates: [], // 荣誉证书
    },
    bindGenderChange(e) {
        this.setData({
            gender: e.detail.value
        })
    },
    bindDisciplineChange(e) {
        this.setData({
            discipline: e.detail.value
        })
    },
    bindEducationChange(e) {
        this.setData({
            education: e.detail.value
        })
    },
    bindTeachingMethodChange(e) {
        this.setData({
            teachingMethod: e.detail.value
        })
    },
    uploadFile(file, type) {
        let _this = this
        wx.uploadFile({
            url: api.upload, // 仅为示例，非真实的接口地址
            filePath: file.url,
            name: 'file',
            formData: {
                id: '1'
            },
            success(res) {
                // 上传完成需要更新 fileList
                let list = _this.data[type];
                const data = JSON.parse(res.data)
                console.log(res)
                list.push({
                    url: data.filePath
                })
                _this.setData({
                    [type]: list
                })
                console.log(list)
            },
        });
    },
    // 个人照片上传
    personalPhotosupload(event) {
        const {
            file
        } = event.detail;
        this.uploadFile(file, 'personalPhotos')
    },
    fileDelete(event) {
        const {
            index
        } = event.detail;
        const {
            type
        } = event.target.dataset;
        const list = this.data[type]
        list.splice(index, 1)
        console.log(index, event, list)
        this.setData({
            [type]: list
        })
    },
    // 身份证上传
    cardPhotosupload(event) {
        const {
            file
        } = event.detail;
        this.uploadFile(file, 'IDCards')
    },
    // 学历证书上传
    academicPhotosupload(event) {
        const {
            file
        } = event.detail;
        this.uploadFile(file)
    },
    // 职业证书上传
    vocationalPhotosupload(event) {
        const {
            file
        } = event.detail;
        this.uploadFile(file)
    },
    // 荣誉证书上传
    honorPhotosupload(event) {
        const {
            file
        } = event.detail;
        this.uploadFile(file)
    },
    toSelectMap(e) {
        const _this = this
        wx.chooseLocation({
            success(res) {
                console.log(res)
                _this.setData({
                    address: res.address + res.name
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
                type: '0',
                photoFileName: '',
                hxUser: ''
            },
            method: "POST",
        })
    },
    // 提交注册
    submit() {
        this.saveUser().then(res => {
            if(res.data === true) {
                wx.request({
                    url: api.saveTeacherInfo,
                    method: 'POST',
                    data: {
                        userId: wx.getStorageSync('openid'),
                        name: this.data.name,
                        vxName: this.data.nickname,
                        gender: 'man',
                        address: this.data.address,
                        primarySchool: this.data.primarySchool,
                        middleSchool: this.data.middleSchool,
                        highSchool: this.data.highSchool,
                        university: this.data.university,
                        teachingType: this.data.disciplineArray[this.data.discipline],
                        lifePicture: this.data.personalPhotos.map((item) => {
                            return item.url
                        }).join(','),
                        chinaIdNumber: new Date().getTime(),
                        chinaIdNumberPicture: this.data.IDCards.map((item) => {
                            return item.url
                        }).join(','),
                        mobile: this.data.phone,
                        teachingSeniority: this.data.teachingYears,
                        personalProfile: this.data.personaldesc,
                        academicQualification: this.data.educationArray[this.data.education],
                        price: this.data.price
                    },
                    header: {
                        'content-type': 'application/json', // 默认值
                    },
                    success:(res)=> {
                        console.log(res.data)
                        wx.navigateBack()
                    },
                    fail: () => {
                        console.log(1)
                        wx.showToast({
                          title: '提交失败',
                          icon: 'error'
                        })
                    }
                })
            }
        })
        
    }
})
