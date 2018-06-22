<template>
  <div id="app">
    <demo-header></demo-header>
    <router-view>11</router-view>
  </div>
</template>

<script>
  import DemoHeader from '@/page/DemoHeader';
  export default {
    name: 'App',
    components: {DemoHeader},
  }
</script>

<style>
  html, body, .el-container {
    height: 100%;
    margin: 0px;
    background-color: aquamarine;
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
