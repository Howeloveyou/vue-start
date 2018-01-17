<template>
  <div>
    <el-table
      :data="recordList"
      style="width: 100%"
      :row-class-name="tableRowClassName">
      <el-table-column
        prop="date"
        label="日期"
        width="300">
      </el-table-column>
      <el-table-column
        prop="point"
        label="位置"
        width="420">
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
    export default {
        name: "page4",

      mounted(){
          console.log("do..")
          this.$store.state.record.sid = this.$store.state.login.sid;
          this.$store.dispatch("getRecord")
      },
      computed: {
        ...mapState({
          recordList: state => state.record.recordList,
        })
      },

      methods: {
        tableRowClassName({row, rowIndex}) {
          if (rowIndex === 1) {
            console.log(1);
            return 'warning-row';
          } else if (rowIndex === 3) {
            console.log(3);
            return 'success-row';
          }
          return '';
        }
      },
      data() {
        return {
          tableData2: [{
            date: '2016-05-02',
            point: '1F A区阅览室 11号座位',
            state: '已预约',
          }, {
            date: '2016-05-02',
            point: '1F A区阅览室 11号座位',
            state: '已预约',
          }, {
            date: '2016-05-02',
            point: '1F A区阅览室 11号座位',
            state: '已预约',
          }, {
            date: '2016-05-02',
            point: '1F A区阅览室 11号座位',
            state: '已预约',
          }]
        }
      }
    }
</script>

<style scoped>
  .el-table .warning-row {
    background: indianred;
  }

  .el-table .success-row {
    background: greenyellow;
  }
</style>
