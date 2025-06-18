Component({
  // 外部 props
    properties: {
    },
  data: {
    active: 1,
  },
  lifetimes: {
    ready() {}
  },
  methods: {
    onChange(event) {
      wx.showToast({
        title: `切换到标签 ${event.detail.name}`,
        icon: 'none',
      });
    },
  }
})
