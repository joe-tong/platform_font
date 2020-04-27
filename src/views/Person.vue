<template>
  <div id="person">
    <el-row class="tac">
      <el-col :span="4">
        <h2>个人中心</h2>
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="2">
            <span slot="title">订单</span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">个人设置</span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">任务规则</span>
            
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>


<script>
export default {
  name: 'person',
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
