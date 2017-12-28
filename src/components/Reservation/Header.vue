<template>
  <div>
    <div class="step-left">
      <el-steps :active="active" finish-status="success">
        <el-step title="时间预约"></el-step>
        <el-step title="选择阅览室"></el-step>
        <el-step title="位置选择"></el-step>
        <el-step title="确认选择"></el-step>
      </el-steps>
    </div>
    <div class="button-right">
      <el-button style="text-align: center" @click="last">上一步</el-button>
      <el-button style="text-align: center" @click="next">下一步</el-button>
    </div>

  </div>
</template>

<script type="es6">
  import { mapState } from 'vuex';
  export default {
    data() {
      return {
      };
    },
    computed: {
      ...mapState({
        active: state => state.Reservation.active,
      })
    },

    methods: {
      next() {
        this.$store.dispatch('stepNext')
      },
      last(){
        this.$store.dispatch('stepLast')
      }
    }
  }
</script>

<style>
.step-left{
  display: inline-block;
  width: 70%;
}
  .button-right{

    display: inline-block;
    width: 25%;
  }
</style>
