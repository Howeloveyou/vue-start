<template>
  <div>
    <p>请选择您的预约时间</p>
    <div>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        value-format="yyyy-MM-dd"
        @change = "changeDate"
      >
      </el-date-picker>
      <el-switch
        v-model="value3"
        active-text="下午预约"
        inactive-text="上午预约"
        active-value="下午"
        inactive-value="上午"
      @change="changeTime">
      </el-switch>
    </div>
  </div>
</template>

<script type="es6">
  import { mapState } from 'vuex';
  export default {
    name: 'TmeReservation',
    data(){
      return {
        value1:  '',
        value3:  '',
      }
    },
    mounted(){
      this.value1 = this.$store.state.Reservation.params.date;
      this.value3 = this.$store.state.Reservation.params.isMorning;
    },
    methods:{
      changeDate(value){
        this.$store.dispatch('changeDate',value)
      },
      changeTime(value){
        this.$store.dispatch('changeTime',value)
      }
    },
  }
</script>

<style>

</style>
