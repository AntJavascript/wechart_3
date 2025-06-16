Component({
    properties: {
        // 这里定义了innerText属性，属性值可以在组件使用时指定
        innerText: {
            type: String,
            value: 'default value',
        }
    },
    data: {
        // 这里是一些组件内部数据
        weeks: [],
        rows: [],
        currentDate: new Date(),
        currentYear: new Date().getFullYear(),
        currentMonth: new Date().getMonth(),
        selectedDate: null,
        weekDays: ['一', '二', '三', '四', '五', '六', '日'],
        monthYear: ''
    },
    lifetimes: {
        ready() {
            const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
            wx.setNavigationBarTitle({
                title: `${this.data.currentYear}年${monthNames[this.data.currentMonth]}`
            })
            this.generateCalendar()
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
            const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
            wx.setNavigationBarTitle({
                title: `${this.data.currentYear}年${monthNames[this.data.currentMonth]}`
            })
            this.generateCalendar();
        },
        nextMonth() {
            this.data.currentMonth++;
            if (this.data.currentMonth > 11) {
                this.data.currentMonth = 0;
                this.data.currentYear++;
            }
            const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"];
            wx.setNavigationBarTitle({
                title: `${this.data.currentYear}年${monthNames[this.data.currentMonth]}`
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
            const selectedDate = new Date(this.currentYear, this.currentMonth, date);
            const today = new Date();
            today.setHours(0, 0, 0, 0);
            selectedDate.setHours(0, 0, 0, 0);
            
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
                            [w]: true
                        })
                    }
                })
            });
            this.selectedDate = selectedDate;
        }
    }
})