<template>
  <div id="demo">
    <div id="head">
      <span class="banner">图灵工作室|Tuling stadio</span>
      <span class="main">首页</span>
      <span class="person">个人中心</span>
      <span class="task" @click="publish">发布任务</span>
      <span class="login" @click="login">登录</span>
    </div>
    <!-- <div id="foot"></div> -->
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
.main {
  padding-left: 18%;
  line-height: 3vw;
  font-family: KaiTi;
}
.main:hover {
  cursor: pointer;
  color: burlywood;
}
.person {
  padding-left: 1%;
  line-height: 3vw;
  font-family: KaiTi;
}
.person:hover {
  cursor: pointer;
  color: burlywood;
}
.task {
  padding-left: 1%;
  line-height: 3vw;
  font-family: KaiTi;
}
.task:hover {
  cursor: pointer;
  color: burlywood;
}
.login {
  padding-left: 13%;
  line-height: 3vw;
  font-family: KaiTi;
}
.login:hover {
  cursor: pointer;
  color: burlywood;
}
</style>

<script>
import qr from '../views/Qr'

export default {
  components: {
    qr
  },
  methods: {
    publish() {
      this.$router.push({
        name: 'task'
      })
    },
    login() {
      this.$router.push({
        name: 'login'
      })
    }
  }
}
</script>

