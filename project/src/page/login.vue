<template>
	<div class="login_page fillcontain">
		<el-form :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px" class="demo-ruleForm">
			<el-form-item label="用户名" prop="username">
				<el-input v-model="loginForm.username" placeholder="用户名"><span>dsfsf</span></el-input>
			</el-form-item>
	
			<el-form-item label="密码" prop="password">
				<el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
			</el-form-item>
			<el-form-item>
				<el-button type="primary" @click="submitForm('loginForm')" class="submit_btn">登陆</el-button>
				<el-button @click="resetForm('loginForm')">重置</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' }]
      }
    }
  },
  mounted () {
    // el挂载到实例上去之后调用该钩子
    console.log('DOM树挂载成功')
    if (!this.adminInfo.id) {
      this.getAdminData() // 获取不到数据则请求数据
    }
  },
  computed: {
    ...mapState(['adminInfo']) // 获取状态
  },
  methods: {
    ...mapActions(['getAdminData']),
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!')
          return false
        }
      })
    },
    resetForm (formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="less" scoped>
.fillcontain {
  width: 500px;
  margin: 0 auto;
}
</style>
