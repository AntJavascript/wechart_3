Component({
  // 外部 props
    properties: {
      currentStart: {
        type: String,
        value: ''
      },
      endStart: {
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
  }
})
