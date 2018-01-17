<template>
  <div style="margin-top: 10px">
    <el-row >
      <el-col :span="4"  v-for="(item,$index) in seatList"  style="margin-top: 20px" :key="item.id">
        <div  v-if="item.state ===1" class="class-a" v-bind:class='{ "active" : $index === isChoose}'  @click="chooseSeat($index,item.id)" >
         {{item.number}}
        </div>
        <div   class="class-b" v-else>
          {{item.number}}
        </div>
      </el-col>
    </el-row >
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Vue from 'vue';
    export default {
      name: "SeatChoose",

      data() {
        return {
          isChoose: -1,
          seid:0,
        }
      },
      mounted(){
        this.$store.dispatch("getSeatList")
      },

      methods: {
        chooseSeat(index,key) {
          console.log(key);
          console.log(index);
          this.isChoose = index;
          this.$store.state.Reservation.params.seid = key;
          this.$store.state.Reservation.params.seatNum = index+1;
        }
      },
      computed: {
        ...mapState({
          seatList: state => state.Reservation.seatList
        })
      }
    }



</script>

<style scoped>
.class-a{
  display:inline-block;
  width:40px;/*在默认情况下宽度不起作用*/
  height:40px;/*在默认情况下高度不起作用*/
  background:greenyellow;/*设置背景颜色为灰色*/
  text-align:center;/*设置文本居中显示*/

}
.class-a:hover{
  background:#666;
  color:#FFF;
  box-shadow:1px 1px 1px #000;
}
.class-b {
  display: inline-block;
  width: 40px; /*在默认情况下宽度不起作用*/
  height: 40px; /*在默认情况下高度不起作用*/
  background: #666; /*设置背景颜色为灰色*/
  text-align: center; /*设置文本居中显示*/
}
.active{
  background: red;
}
</style>
