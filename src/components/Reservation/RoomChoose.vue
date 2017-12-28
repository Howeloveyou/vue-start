<template>
  <div>
    <el-card class="box-card">
     <div class="bs-example margin-bot_20 red-bs-example">
       <div class="media">
         <div class="media-left">
           1F
         </div>
         <div class="media-body">
           <h4 class="media-heading font30">西区C2阅览室</h4>
           <p>剩余座位数：12个</p>
           <i class="green"></i>
         </div>
       </div>
     </div>
    </el-card>
  </div>
</template>

<script type="es6">
  export default {
    name: "RoomChoose",
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
i.green {

}
</style>
