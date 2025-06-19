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
    }
  }
})
