<template>
  <div id="demo">
    <div id="head">
      <span class="banner">图灵工作室|Tuling stadio</span>
      <span class="person">个人中心</span>
    </div>
    <qr></qr>
    <div id="foot"></div>
  </div>
</template>

<style lang="less" scoped>
#demo {
  width: 100%;
  height: 100%;
}
#head {
  height: 3vw;
  width: 100%;
  background-color: rgb(143, 126, 104);
  font-size: 1.5em;
}
.person {
  padding-left: 45%;
  line-height: 3vw;
  font-family: KaiTi;
}
.banner {
  padding-left: 15%;
  line-height: 3vw;
  font-family: KaiTi;
}

#foot {
  height: 2vw;
  background-color: cornflowerblue;
}
</style>

<script>
import qr from '../views/Qr'

export default {
  components: {
    qr
  },
  methods: {}
}
</script>

