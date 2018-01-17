<template>
  <div style="background-color: #EBEBEB;min-height:800px">
    <div style="width:100%;height:60px;background-color: #545c64; overflow: hidden">
            <span class="demonstration">
                图书馆座位管理系统
            </span>
      <span class="demonstration" style="float:right;padding-top:10px;margin-right:1%">
              <login></login>
            </span>
    </div>
    <div style="margin-top:5px">
      <el-row :gutter="10">
        <el-col :xs="4" :sm="4" :md="4" :lg="4">
          <div>
            <el-menu default-active="1" class="el-menu-vertical-demo" @select="handleSelect" background-color="#545c64"
                     text-color="#fff" active-text-color="#ffd04b"style="min-height:800px" >
              <el-menu-item index="1"><i class="el-icon-star-off"></i>首页</el-menu-item>
              <el-menu-item index="2"><i class="el-icon-edit-outline"></i>预约</el-menu-item>
              <el-menu-item index="3"><i class="el-icon-edit"></i>签到</el-menu-item>
              <el-menu-item index="4"><i class="el-icon-document"></i>记录</el-menu-item>
            </el-menu>
          </div>
        </el-col>
        <el-col :xs="20" :sm="20" :md="20" :lg="20">
          <div>
            <div style="border: 1px solid #A6A6A6; border-radius:6px; padding:5px; margin:2px; background-color: white">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item v-for="item in breadcrumbItems" key="item">{{item}}</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
          </div>
          <div style="margin-top:10px">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import Login from '@/components//Login.vue'
  export default {
    data(){
      return {
        breadcrumbItems: ["首页"],
      }
    },
    components:{Login},

    methods:{
      handleIconClick(ev) {
        console.log(ev);
      },
      handleSelect(key, keyPath){
        switch(key){
          case '1':
            this.$router.push('/Home');
            break;
          case '2':
            this.$router.push('/Reservation')
            break;
          case '3':
            this.$router.push('/Sign')
            break;
          case '4':
            this.$router.push('/Record')
            break;
        }
      },
    },
  }
</script>

<style>
  .demonstration{
    float:left;padding-top:10px;color:white;margin-left:1%
  }
</style>
