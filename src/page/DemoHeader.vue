<template>

  <div class="Demo-header">
    <img src="../../build/logo.png" alt="" width="100%" height="atuo">
    <el-row class="tac demo-menu">
      <el-col :span="24">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1" class="menu-align">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>物料管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-setting"></i>
                <router-link to="/home" width="100%" index="1-1">
                  首页
                </router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2" class="menu-align">
            <template slot="title">
              <i class="el-icon-menu"></i>
              <span>生产配置</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <router-link to="/about">关于</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3" class="menu-align">
            <template slot="title">
              <i class="el-icon-setting"></i>
              <span>关于我们</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i class="el-icon-menu"></i>
                <router-link to="/contact">联系方式</router-link>
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'DemoHeader',
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style>
  .Demo-header {
    line-height: 0;
  }

  .demo-menu {
    width: 100%;
    height: 100%;
  }

  .menu-align {
    text-align: left;
  }

  .el-submenu__title a {
    color: #fff;
    text-decoration: none;
  }

  .el-menu-item-group ul li a {
    width: 100%;
  }
</style>
