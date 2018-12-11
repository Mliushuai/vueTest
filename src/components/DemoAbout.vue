<template>
  <div class="about">
    <span>develop上的修改</span>
    <h2>about</h2>
    <p>在aginTest上更改内容</p>
    <span>在agin上添加了一个功能</span>
    <div @click="change"></div>
  </div>
</template>

<script>
  export default({
    name:'about',
    methods:{
      change(){
        console.log("100")
      }
    }
  })
</script>

<style scoped>
  .about{
    width: 100%;
    height: 500px;
    background-color: blue;
  }
</style>
