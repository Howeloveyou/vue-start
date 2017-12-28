<template>
  <div>
  <el-button size="medium" round @click="centerDialogVisible = true">登录</el-button>
  <el-dialog
    title="登录"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>

    <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false">登录</el-button>
  </span>
  </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "login",
      data(){
          return{
            centerDialogVisible: false,
          }
      }
    }
</script>

<style scoped>

</style>
