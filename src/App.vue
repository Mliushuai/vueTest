<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <router-link to="/Home">Home页</router-link>
        <router-link to="/BomList">BomList</router-link>
        <router-view></router-view>
      </el-aside>
      <el-container>
        <el-header>

        </el-header>
        <el-main>
          <BomList></BomList>
          <Home></Home>
        </el-main>
        <el-footer>

        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  //1.先使用import导入你要在该组件中使用的子组件
  import Home from '@/components/Home'
  import BomList from '@/components/BomList'

  export default {
    name: 'App',
    //2.然后,在components中写入子组件
    components:{BomList,Home}
  }
</script>

<style>
  html, body, .el-container {
    height: 100%;
    margin: 0px;
  }

  #app {
    position: relative;
    overflow: hidden;
    height: 100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: 100%;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
