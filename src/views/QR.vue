<template>
  <div id="qr">
    <div class="wx_common">
      <img class="qr_code" src="../static/qrcode.jpg" />
      <!-- <div class="title">扫码关注</div> -->
    </div>
    <div v-if="account_login" class="wx_login">
    <login_form></login_form>
      <!-- <div class="title">账号登录</div> -->
    </div>
    <div v-else class="wx_login">
      <img class="qr_code" src="../static/qrcode.jpg" />
      <!-- <div class="title">扫码登录</div> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
#qr {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-around;
  justify-content: space-around;
  background-color: grey;
  height: 43vw;
  text-align: center;
}

.wx_common {
  background-color: whitesmoke;
  color: black;
  height: 18vw;
  width: 18vw;
  border-radius: 0.5em;
  position: relative;
  top: 15%;
}
.wx_login {
  background-color: whitesmoke;
  color: black;
  height: 18vw;
  width: 24vw;
  border-radius: 0.5em;
  position: relative;
  top: 15%;
}
.title {
  margin-top: 0.7em;
}
.qr_code {
  position: absolute;
  margin: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 17vw;
  width: 17vw;
  border-radius: 0.5em;
}
</style>
<script>
import login_form from '../views/form/Login_form'

export default {
  name:"Qr",
  props: {},
  components: {
    login_form
  },
  data() {
    return {
      form: {
        name: '',
        pwd: ''
      },
      qr_login: false,
      account_login: true
    }
  },
  created() {
    this.account_login = true
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
