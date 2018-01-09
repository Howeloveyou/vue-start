<template>
  <div >
    <el-row >
      <el-col :span="8"  v-for="item in roomList" :key="item.id">
        <el-card class="box-card" >
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
                  <el-radio v-model="whichRoom" :label="item.id" :disabled="item.surplus==0" @change="chooseRoom"  border>选择</el-radio>
                </div>
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="pagination">
      <el-pagination
        background
        layout="total,prev, pager, next"
        :page-size=pageSize
        :total=totals
        :current-page=currentPage
        @current-change="currentChange">
      </el-pagination>
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
        currentDate: new Date(),
        whichRoom:0,
        currentPage:1,
      }
    },
    mounted(){
      this.$store.dispatch("getRoomList")
      this.whichRoom = this.$store.state.Reservation.params.whichRoom;
      //roomList=this.$store.Reservation.state.roomList
    },
    methods:{
      chooseRoom(value){
        this.$store.state.Reservation.params.whichRoom=this.whichRoom;
        this.$store.dispatch('chooseRoom',value)
      },
      currentChange(value){
        console.log(value)
        this.$store.state.Reservation.params.currentPage=value;
        this.$store.dispatch("getRoomList")
      }
    },
    computed:{
      ...mapState({
        roomList:state=>state.Reservation.roomList,
        pageSize:state=>state.Reservation.params.pageSize,
        totals:state=>state.Reservation.total,
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
  .pagination{
    margin-top:60px;
    margin-left:35%;
  }
</style>
