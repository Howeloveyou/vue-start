<template>
  <div>
  <el-button size="medium" round @click="centerDialogVisible = true">登录</el-button>
  <el-dialog
    title="登录"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <el-form>
      <el-form-item label="账号">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="" round>取消</el-button>
        <el-button type="primary" round @click="">登录</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
  </div>
</template>

<script>
    import ElForm from "element-ui/packages/form/src/form";
    import ElFormItem from "element-ui/packages/form/src/form-item";

    export default {
      components: {
        ElFormItem,
        ElForm},
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
