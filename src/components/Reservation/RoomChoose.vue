<template>
  <div >
    <div>
      <el-card class="box-card" v-for="item in roomList" :key="item.id">
        <div class="bs-example margin-bot_20 red-bs-example">
          <div class="media">
            <div class="media-left">
             {{item.floor}}F
            </div>
            <div class="media-body">
              <h4 class="media-heading font30">{{item.room}}</h4>
              <p>剩余座位数：{{item.surplus}}个</p>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate | formatDate }}</time>
                <el-switch
                  v-model="choose"
                  active-color="#13ce66"
                  inactive-color="#ff4949">
                </el-switch>
              </div>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script type="es6">
  import { mapState } from 'vuex';
  import {formatDate} from '@/common/dateFormat'
  export default {
    name: "RoomChoose",
    data(){
      return{
        choose:false,
        currentDate: new Date()
      }
    },
    mounted(){
      this.$store.dispatch("getRoomList")
      //roomList=this.$store.Reservation.state.roomList
    },
    computed:{
      ...mapState({
        roomList:state=>state.Reservation. roomList,
      })
    },
    filters: {
      formatDate(time) {
        var date = new Date(time);
        return formatDate(date, "yyyy-MM-dd hh:mm");
      }
    }
  }
</script>
<style>
  .box-card {
    width: 360px;
    background: #EBEBEB;
  }
.red-bs-example{
  border-color: #b44543;
  box-shadow: 0 0 5px #b44543;
}
.bs-example{
  border: #cacaca 3px solid;
  border-radius: 8px;
  padding: 15px 15px 0px;
  position: relative;
}
  .margin-bot_20{
    margin-bottom: 20px;
  }
.media-body, .media-left, .media-right {
  display: table-cell;
  vertical-align: top;
}
  .media-left{
    font-size: 28px;
    font-weight: lighter;
    line-height: 28px;
    font-family: "mmm";
  }
  .font30 {
    font-size: 30px;
  }
.media-heading {
  margin-top: 0;
  margin-bottom: 5px;
}
.media-body i {
   height: 22px;
   width: 22px;
   display: inline-block;
   position: absolute;
   right: 5px;
   bottom: 10px;
 }
  .time {
    font-size: 13px;
    color: #999;
  }
</style>
