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
    endDate: ''
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
