<template>
  <div>
    <el-table
      :data="tableData"
      style=margin-top:2%;width:90%>
      <el-table-column
        prop="stu"
        label="账号">
      </el-table-column>
      <el-table-column
        prop="date"
        label="预约日期">
      </el-table-column>
      <el-table-column
        prop="time"
        label="预约时间">
      </el-table-column>
      <el-table-column
        prop="place"
        label="阅览室">
      </el-table-column>
      <el-table-column
        prop="num"
        label="座位">
      </el-table-column>
    </el-table><br>
    <el-button type="danger" @click="dialogVisible = false" style=margin-left:35% >取 消</el-button>
    <el-button type="primary" @click="toReservation">提交</el-button>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  export default {
    name: "confirm",
    data() {
      return {
        dialogVisible: false,
      };
    },
    methods:{
      getTime(){
        let times = this.$store.state.Reservation.params.times;
        let result = times.split(",");
        let str = "";
        for(var i=0;i<result.length;i++){
          switch (result[i]){
            case "morning":
              str = str + "早上"
              break;
            case "afternoon":
              str = str + "下午"
              break;
            case "night":
              str = str + "晚上"
              break;
          }
        }

       console.log(str);
        // console.log(this.room.floor);
        // place = this.room.floor+"楼"+this.room.r
        // console.log(place);
        this.$store.state.Reservation.params.Ctime = str;
        //this.$store.state.Reservation.params.place = place;
        // this.tableData[0].place = place;
        // this.tableData[0].time = str;
      },
      toReservation(){
        this.$store.dispatch("toReservation");

      }

    },
    mounted(){

      this.$store.state.Reservation.params.sid = this.$store.state.login.sid;
      this.getTime();
    },
    created(){
      this.$store.dispatch("getRoom");
    },
    watch:{
      msg(newValue,oldValue){
        this.$alert(newValue,"提示",{
          confirmButtonText: '确定',
          callback: action => {
            this.$store.state.login.mark = 1;
            this.$router.push("/Sign");
            this.$store.state.Reservation.message = "";
          }
        })
      }
    },

    computed: {
      ...mapState({
        room: state => state.Reservation.room,
        msg:state => state.Reservation.message
      }),
      tableData:function () {
        return [{
          stu:this.$store.state.login.sid,
          date: this.$store.state.Reservation.params.date,
          time: this.$store.state.Reservation.params.Ctime,
          place:this.room.floor+"楼"+this.room.room,
          num:this.$store.state.Reservation.params.seatNum
        }]
      }
    },
  };
</script>

<style scoped>
</style>
