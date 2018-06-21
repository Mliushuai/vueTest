<template>
  <div id="app">
   <header>
     这是脑袋
   </header>
<div class="menu-con">
111
</div>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html,body{height:100%;margin:0px;}
  #app {
    position: relative;
    overflow: hidden;
    height:100%;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
header{
  float: right;
  width: 80%;
  height: 60px;
  background-color: blue;
}
  .menu-con{
    float: left;
    width: 20%;
    height: 100%;
    overflow: hidden;
    background-color: aquamarine;
  }


</style>
