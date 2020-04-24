<template>
  <div id="login_form">
    <el-form ref="form" :model="form" class="label_form">
      <el-form-item label="账号" class="label_name">
        <el-input class="input" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" class="label_name">
        <el-input class="input" v-model="form.pwd"></el-input>
      </el-form-item>

      <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>-->
    </el-form>
    <!-- <div class="title">账号登录</div> -->
  </div>
</template>

<style lang="less" scoped>
.label_form {
  position: relative;
}
.input {
  position: absolute;
  left: 17%;
  width: 18vw;
}
.label_name {
  padding-left: 2em;
  padding-top: 1.5em;
  // position: absolute;
  // left: 1%;
  
}
</style>

<script>
export default {
  name: 'login_form',
  props: {},
  data() {
    return {
      form: {
        name: '',
        pwd: ''
      }
    }
  },

  methods: {
    onSubmit() {
      console.log('submit!')
    }
  }
}
</script>
