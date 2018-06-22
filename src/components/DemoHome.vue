<template>
  <div class="home">
    <h2>home</h2>
  </div>
</template>

<script>
  import ApiBase from '@/BaseApi/index'
  const api = ApiBase.ajaxBaseUrl;
  export default({
    name:'home',
    methods:{
      commit:function () {
        this.$axios({
          url: api + "product_tasks",
          method: "get",
          data: {
            pageSize: 10,
            pageIndex: 1,
          }
        }).then(res => {

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
  .home{
    width: 100%;
    height: 500px;
    background-color: pink;
  }
</style>
