// pages/index/components/student/student.js

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
   
  }
})