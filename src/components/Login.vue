<template>
  <div>
  <el-button size="medium" round @click="toDialog"  v-if="!isLogin">登录</el-button>
    <el-dropdown v-if="isLogin">
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
        <el-input v-model="form.sid" placeholder="账号"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="form.psw" placeholder="密码"></el-input>
        <p v-if="isError">
          <span style="color: red">账号或密码错误！</span>
        </p>
      </el-form-item>
      <el-form-item style="margin-left:25%;margin-top:20%">
        <el-button @click="FDialog" round>取消</el-button>
        <el-button type="primary" round @click="onSubmit">登录</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>

  </div>
</template>

<script>
    import ElForm from "element-ui/packages/form/src/form";
    import ElFormItem from "element-ui/packages/form/src/form-item";
    import { mapState } from 'vuex';

    export default {
      components: {
        ElFormItem,
        ElForm},
      name: "login",
      data(){

          return{
            form:{
              sid:"",
              psw:"",
            },
          }
      },
      methods:{
        onSubmit(){
          var params ={};
          for(let i in this.form){
            params[i] = this.form[i];
          }
          this.$store.dispatch('login',params);
          console.log('submit!');
          this.$store.state.Reservation.params.sid = this.$store.state.login.sid;
          this.login=!this.login;
          //this.centerDialogVisible=false;
        },
        toDialog(){
          this.$store.state.login.centerDialogVisible = true;
        },
        FDialog(){
          this.$store.state.login.centerDialogVisible = false;
        }
      },
      computed:{
        ...mapState({
          sname:state=>state.login.sname,
          isLogin:state=>state.login.isLogin,
          isError:state=>state.login.isError,
          centerDialogVisible:state=>state.login.centerDialogVisible
        })
      }
    }
</script>

<style scoped>

</style>
