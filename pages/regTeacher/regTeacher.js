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
        phone: "", // 联系电话
        price: "", // 价格
        discipline: "", // 教学学科
        disciplineArray: ['管理学', '医学', '农学', '工学'], // 教学学科选项
        teachingYears: "", // 教龄
        education: "", // 学历
        educationArray: ["专科", "本科", "硕士研究生", "博士研究生"], // 学历选项
        middleSchool: "", // 毕业院校(初中)
        highSchool: "", // 毕业院校(高中)
        school: "", // 毕业院校（大学）
        teachingMethod: "", // 授课方式
        teachingMethodArray: ['学生上门', '网络授课', '上门授课'], // 授课方式选项
        address: '', // 地址
        personaldesc: "", // 个人描述
        personalPhotos: [], // 个人照片
        IDCards: [], // 身份证
        academicCertificates: [], // 学历证书
        vocationalCertificates: [], // 职业证书
        HonorCertificates: [], // 荣誉证书
    },
    bindDisciplineChange(e) {
        console.log('picker发送选择改变，携带值为', e.detail.value)
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
            url: 'http://192.168.1.104:8080/file/upload', // 仅为示例，非真实的接口地址
            filePath: file.url,
            name: 'file',
            formData: {
                id: '1'
            },
            success(res) {
                // 上传完成需要更新 fileList
                let list = _this.data[type];
                const data = JSON.parse(res.data)
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
    // 提交注册
    submit() {
        wx.request({
            url: 'http://192.168.1.104:8080/login/saveTeacherInfo', //仅为示例，并非真实的接口地址
            method: 'POST',
            data: {
                name: this.data.name,
                vxName: '1111',
                gender: 'man',
                primarySchool: this.data.school,
                middleSchool: this.data.middleSchool,
                highSchool: this.data.highSchool,
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
                academicQualification: this.data.education
            },
            header: {
                'content-type': 'application/json', // 默认值
                'Authorization': '1'
            },
            success(res) {
                console.log(res.data)
            }
        })
    }
})