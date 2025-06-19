Component({
  // 外部 props
    properties: {
      startDate: {
        type: String,
        value: ''
      },
      endDate: {
        type: String,
        value: ''
      }
    },
  data: {
    rangeTimeShow: false,
    startDate: '',
    endDate: ''
  },
  lifetimes: {
    ready() {}
  },
  methods: {
     onInput(event) {
    },
    add(){
      this.setData({
        rangeTimeShow: true
      })
    },
    cancel(){},
    confirm(){
      this.setData({
        rangeTimeShow: fase,
        startDate: '',
        endDate: ''
      })
    }
  }
})
