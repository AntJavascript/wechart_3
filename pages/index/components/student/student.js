const api = require('../../../../server/aip')
const request = require('../../../../server/request')

Component({

  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    value: '',
    isRefreshing: false,
    isLoading: false, // 加载数据中
    list: []
  },
  lifetimes: {
    created(){
        request({
            url: api.teacherList
        }).then(res => {
            if(Array.isArray(res.data) && res.data.length > 0) {
                this.setData({
                    list: res.data
                })
            }
            console.log(res,'====')
        })
    },
    ready() {
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    loadMoreData() {
        if (this.data.isLoading) {
            wx.showToast({
                title: '成功',
                icon: 'success',
              })
            console.log('加载中。。。')
            return
        }
        this.setData({
            isLoading: true
        })
        console.log('loadMoreData')
    },
   
    bindscrolltoupper() {
        console.log('bindscrolltoupper')
        setTimeout(() => {
            this.setData({
                isRefreshing: false
            })
        }, 3000)
    },
    toTeachDetail(e) {
        console.log(e)
        const userid = e.currentTarget.dataset.userid
        console.log(userid)
        wx.navigateTo({
          url: `/pages/teacherDetail/teacherDetail?userid=${userid}`,
        })
    }
  }
})