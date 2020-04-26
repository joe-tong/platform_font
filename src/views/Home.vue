<template>
  <div id="demo">
    <div id="head">
      <span class="banner">图灵工作室|Tuling stadio</span>
      <span class="person">首页</span>
      <span class="person">个人中心</span>
      <span class="person">发布项目</span>
      <span class="person">登录</span>
      <span class="person">注册</span>
    </div>
    <qr></qr>
    <div id="foot"></div>
  </div>
</template>

<script>

// 引用api
import { login } from 'api/user'

console.log(process.env.TEST)

export default {
  name: 'home',
  components: {
  
  },
  methods: {
    /**
     * [loadData axios示例]
     * @return
     */
    loadData() {
      login({
        uid: 1233
      }).then(res => {
          if (res.code === 200) {
          }
        })
        .catch(err => {
        })
    }
  }
}
</script>
