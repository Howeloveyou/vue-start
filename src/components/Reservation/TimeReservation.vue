<template>
  <div>
    <p>请选择您的预约时间</p>
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
        <el-radio-group v-model="time" @change = "changeTime">
          <el-radio-button label="morning">早上</el-radio-button>
          <el-radio-button label="afternoon">下午</el-radio-button>
          <el-radio-button label="night">晚上</el-radio-button>
        </el-radio-group>
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
        time:  '',
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
        this.$store.dispatch('changeTime',value)
      }
    },
  }
</script>

<style>

</style>
