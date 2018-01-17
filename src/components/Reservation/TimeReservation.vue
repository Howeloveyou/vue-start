<template>
  <div>
    <p>请选择您的预约日期</p>
    <div>
      <el-date-picker
        v-model="date"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
        @change = "changeDate"
        :picker-options="pickerOptions0"
      >
      </el-date-picker>
    </div>
    <div>
      <p>请选择您的预约时间</p>
      <el-checkbox-group v-model="time" @change = "changeTime">
        <el-checkbox-button label="morning">早上（8：00--12:00）</el-checkbox-button>
        <el-checkbox-button label="afternoon">下午（12:00--17:00）</el-checkbox-button>
        <el-checkbox-button label="night">晚上（17:00--22:00）</el-checkbox-button>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script type="es6">
  import { mapState } from 'vuex';
  export default {
    name: 'TmeReservation',
    data(){
      return {
        date:  '',
        time: [],
        pickerOptions0: {
          disabledDate(time) {
            let curDate = (new Date()).getTime();
            let three = 30 * 24 * 3600 * 1000;
            let threeMonths = curDate + three;
            return time.getTime() < Date.now() || time.getTime() > threeMonths;
          }
        },
      }
    },
    mounted(){
      this.date = this.$store.state.Reservation.params.date;
      this.time = this.$store.state.Reservation.params.time;
    },
    methods:{
      changeDate(value){
        console.log(value);
        this.$store.dispatch('changeDate',value)
      },
      changeTime(value){
        console.log(value);
        this.$store.state.Reservation.params.times=value.join(',');
        console.log(this.$store.state.Reservation.params.times);
        this.$store.dispatch('changeTime',value)
      }
    },
  }
</script>

<style>

</style>
