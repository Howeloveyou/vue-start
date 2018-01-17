<template>
  <div>
    <div class="num">账号：{{sid}}</div><br>

    <div class="info">恭喜你已成功预约到座位！</div><br>

    <el-button type="primary" @click="getSignInfo">点击查看具体信息</el-button>
    <el-button type="danger" @click="cancelReservation">取消预约</el-button>
  </div>



</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: "page3",
    data() {
      return {
        sid:this.$store.state.login.sid
      };
    },
    mounted(){
      this.$store.state.record.sid = this.$store.state.login.sid;
      this.$store.state.Reservation.params.sid = this.$store.state.login.sid;
      this.$store.dispatch("getSignInfo");
    },


    methods:{
      getSignInfo(){
        this.$alert(this.$store.state.record.signInfo.date+"     "+this.$store.state.record.signInfo.point,"提示",{
          confirmButtonText: '确定',
          callback: action => {
          }
        })
      },
      cancelReservation(){
        this.$store.dispatch("cancelReservation");
      }

    },
    watch:{
      msg(newValue,oldValue){
        this.$alert(newValue,"提示",{
          confirmButtonText: '确定',
          callback: action => {
            this.$router.push("/Page1");
          }
        })
      }
    },
    computed: {
      ...mapState({
        msg: state => state.Reservation.cancelMessage
      }),
    }
  };
</script>

<style scoped>
  .num{
    font-size: large;
  }
  .info{
    font-size:20px;
  }
</style>
