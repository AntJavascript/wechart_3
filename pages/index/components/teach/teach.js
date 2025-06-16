Component({
    // 外部 props
    properties: {
    },
    // 这里是一些组件内部数据
    data: {
        weeks: [],
        rows: [],
        currentDate: new Date(),
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth(),
        selectedDate: null,
        weekDays: ['一', '二', '三', '四', '五', '六', '日'],
        monthYear: '',
        journeyList: []
    },
    lifetimes: {
        ready() {
            wx.setNavigationBarTitle({
                title: `${this.data.currentYear}年${this.data.currentMonth + 1}月`
            })
            this.generateCalendar()
            const data = new Date().getDate()
            console.log(data)
            this.setData({
                selectedDate: data,
                currentYearName: this.data.currentYear,
                currentMonthName: this.data.currentMonth + 1
            })
        },
    },
    methods: {
        // 这里是一个自定义方法
        customMethod: function () {},
        generateCalendar() {
            const daysInMonth = new Date(this.data.currentYear, this.data.currentMonth + 1, 0).getDate();
            const firstDayOfMonth = new Date(this.data.currentYear, this.data.currentMonth, 1).getDay();
            let date = 1;
            let week = [];
            let row = [];
            
            // 计算需要填充的空单元格数量
            const firstDayOffset = (firstDayOfMonth + 6) % 7; // 调整为从星期一作为第一天
            for (let i = 0; i < firstDayOffset; i++) {
                week.push({
                  isEmpty: true
                });
            }
            while (date <= daysInMonth) {
                const day = {
                  textContent: date,
                };
                
                // 高亮显示当前日期
                if (new Date(this.data.currentYear, this.data.currentMonth, date).toDateString() === new Date().toDateString()) {
                    day['today'] = true
                }
                
                week.push(day);
                
                if (week.length % 7 === 0) {
                    row.push(week)
                    week = []
                }
                
                date++;
            }
            
            // 填充剩余空单元格
            if (week.length > 0) {
                while (week.length < 7) {
                    week.push({
                      isEmpty: true
                    });
                }
            }
            row.push(week)
            this.setData({
                rows: row
            })
  
            console.log(row)
        },
        prevMonth() {
            this.data.currentMonth--;
            if (this.data.currentMonth < 0) {
                this.data.currentMonth = 11;
                this.data.currentYear--;
            }
            wx.setNavigationBarTitle({
                title: `${this.data.currentYear}年${this.data.currentMonth +1}月`
            })
            this.generateCalendar();
        },
        nextMonth() {
            this.data.currentMonth++;
            if (this.data.currentMonth > 11) {
                this.data.currentMonth = 0;
                this.data.currentYear++;
            }
            wx.setNavigationBarTitle({
                title: `${this.data.currentYear}年${this.data.currentMonth + 1}月`
            })
           
            this.generateCalendar();
        },
        selectDate(event) {
            const date = event.target.dataset.item.textContent
            const index = event.target.dataset.index
            const pindex = event.target.dataset.pindex
            if (!date) {
                return
            }
            console.log(this.data.currentYear, this.data.currentMonth, date)
           
            this.data.rows.forEach((item, i) => {
                item.forEach((day, s) => {
                    let pf = 'rows['+i+']['+s+']'
                        let pw = pf + ".active"
                        this.setData({
                            [pw]: false
                        })
                    if (parseInt(day.textContent) === date) {
                        let f = 'rows['+pindex+']['+index+']'
                        let w = f + ".active"
                        this.setData({
                            [w]: true,
                            currentYearName: this.data.currentYear,
                            currentMonthName: this.data.currentMonth + 1,
                            selectedDate: date
                        })
                    }
                })
            });
        },
        // 获取行程
        getJourney(date) {
            wx.request({
              url: 'url',
              data: {
                  date: date
              }
            })
        }
    }
})