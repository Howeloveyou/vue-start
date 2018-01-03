<template>
  <div>
  <el-button size="medium" round @click="centerDialogVisible = true"  v-if="login">登录</el-button>
    <el-dropdown v-if="!login">
      <span class="el-dropdown-link">
       <span style="color:white">{{sname}}</span><i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>安全退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  <el-dialog
    title="登录"
    :visible.sync="centerDialogVisible"
    width="30%"
    center>
    <el-form>
      <el-form-item label="账号">
        <el-input v-model="form.sid"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.psw"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="centerDialogVisible=false" round>取消</el-button>
        <el-button type="primary" round @click="onSubmit">登录</el-button>
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
            login:true,
            sname:"王俊豪",
            form:{
              sid:"",
              psw:"",
            },
          }
      },
      methods:{
        onSubmit(){
          this.$store.dispatch('login',this.form);
          console.log('submit!');
          this.login=!this.login;
          this.centerDialogVisible=false;
        }
      }
    }
</script>

<style scoped>

</style>
