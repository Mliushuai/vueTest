<template>
  <div class="home">
    <el-table
      :data="tableData"
      stripe
      row-key
      style="width: 100%;height: 100%">
      <el-table-column
        prop="code"
        label="物料编码"
       >
      </el-table-column>
      <el-table-column
        prop="name"
        label="物料名称"
       >
      </el-table-column>
      <el-table-column
        prop="model"
        label="规格型号">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import ApiBase from '@/BaseApi/index'

  const api = ApiBase.ajaxBaseUrl;
  export default ({
    name: 'home',
    data() {
      return {
        tableData: []
      }
    },
    methods: {
      commit: function () {
        this.$axios({
          url: api + "materials",
          method: "get",
          data: {
            pageSize: 10,
            pageIndex: 1,
          }
        }).then(res => {
//          console.log(res.data.data, "dadadada")
          this.tableData = res.data.data
        })
      }
    },
    /**
     * 使用vue生命周期中mounted 加载完成时调用接口
     */
    mounted() {
      this.commit()
    }
  })
</script>

<style scoped>
  .home {
    width: 100%;
    height: 500px;
    background-color: pink;
  }
</style>
