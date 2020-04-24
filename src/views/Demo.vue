<template>
  <div id="demo">
    <div id="head">
      <span class="banner">图灵工作室|Tuling stadio</span>
      <span class="person">个人中心</span>
    </div>
    <div id="body">
      <div class="wx_common"></div>
      <div class="wx_login"></div>
    </div>
    <div id="foot"></div>
  </div>
</template>

<style lang="less" scoped>
#head {
  height: 2.2em;
  width: 100%;
  background-color: rgb(143, 126, 104);
  font-size: 1.5em;
}
.person {
  padding-left: 45%;
  line-height: 2em;
  font-family: KaiTi;
}
.banner {
  padding-left: 15%;
  line-height: 2em;
  font-family: KaiTi;
}
#body {
  background-color: grey;
  height: 39.5em;
}
#foot {
  height: 2em;
  background-color: red;
}
.boxShadow {
  padding: 0 16px 10px;
}
.el-tabs__item {
  color: #2f353b !important;
  font-size: 16px !important;
}

</style>

<script>
export default {
  methods: {}
}
</script>

