<template>
  <div id="login">
    <qr></qr>
  </div>
</template>

<style lang="less" scoped>
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

