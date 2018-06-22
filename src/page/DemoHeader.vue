<template>
  <div class="Demo-header">
    <span class="nav-btn">
      <router-link to="/home">首页</router-link>
     </span>
    <span class="nav-btn">
      <router-link to="/about">关于</router-link>
     </span>
    <span class="nav-btn">
      <router-link to="/contact">联系方式</router-link>
     </span>
  </div>

</template>
<script>
  export default {
    name: 'DemoHeader',
  }
</script>
