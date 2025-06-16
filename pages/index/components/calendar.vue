<template>
  <div class="calendar">
      <div class="calendar-header">
          <h2>{{ monthYear }}</h2>
          <div class="calendar-buttons">
              <button @click="prevMonth">上个月</button>
              <button @click="nextMonth">下个月</button>
          </div>
      </div>
      <div class="calendar-weeks" id="calendarWeeks">
          <!-- 日期内容将在此处动态生成 -->
      </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
const weeks = ref([])
const rows = ref([])

export default {
  data() {
      return {
          currentDate: new Date(),
          currentYear: new Date().getFullYear(),
          currentMonth: new Date().getMonth(),
          selectedDate: null,
          weekDays: ['一', '二', '三', '四', '五', '六', '日']
      };
  },
  computed: {
      monthYear() {
          const monthNames = ["一月", "二月", "三月", "四月", "五月", "六月",
              "七月", "八月", "九月", "十月", "十一月", "十二月"];
          return `${this.currentYear}年${monthNames[this.currentMonth]}`;
      }
  },
  methods: {
     
      
  },
  mounted() {
      this.generateCalendar();
  }
};
</script>

<style scoped>
.calendar {
  background-color: #fff;
}

.calendar-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.calendar-header h2 {
  margin: 0;
}

.calendar-buttons button {
  padding: 5px 10px;
  cursor: pointer;
}

.calendar-weeks {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.calendar-week {
  display: flex;
  gap: 5px;
  margin-bottom: 5px;
}

.calendar-day {
  width: 40px;
  height: 40px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: white;
}

.calendar-day.selected {
  background-color: #b0e0e6;
}

.calendar-day.today {
  background-color: #e0e0e0;
}

.calendar-day.selected.today {
  background-color: #90EE90;
}

</style>
