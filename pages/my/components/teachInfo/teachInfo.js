import Dialog from '@vant/weapp/dialog/dialog';
Component({
  // 外部 props
    properties: {
      startDateProps: {
        type: String,
        value: ''
      },
      endDateProps: {
        type: String,
        value: ''
      }
    },
  data: {
    rangeTimeShow: false,
    startDate: '',
    endDate: '',
    currentType: 'start',
    rangtimes: []
  },
  lifetimes: {
    ready() {
      this.setData({
        startDate: this.properties.startDateProps,
        endDate: this.properties.endDateProps,
      })
    }
  },
  methods: {
     onInput(value) {
         if (this.data.currentType === 'start') {
            this.setData({
                startDate: value.detail
            })
         } else {
            this.setData({
                endDate: value.detail
            })
         }
        
    },
    add(){
      this.setData({
        rangeTimeShow: true
      })
    },
    cancel(){
        this.setData({
            rangeTimeShow: false
        })
    },
    confirm(){
      this.setData({
        rangeTimeShow: false,
      })
    },
    handle(e){
        const type = e.target.dataset.type
        this.setData({
            currentType: type,
          })
    },
    beforeClose(action) {
        return new Promise((resolve) => {
            setTimeout(() => {
              if (action === 'confirm') {
                resolve(true);
              } else {
                // 拦截取消操作
                resolve(true);
              }
            }, 1000);
          })
        },
    closeReserve() {
        Dialog.confirm({
            zIndex:10000,
            context: this,  // 添加this指向
            title: "确定关闭预约？",
            message: '关闭预约之后学员将不能对你进行预约',
            beforeClose: this.beforeClose,
          });
    }
  }
})
