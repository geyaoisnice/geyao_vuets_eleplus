<template>
    <div class="login">
      <div class="container">
        <div class="content">
          <h4>歌谣后台管理系统</h4>
          <div class="username-area">
            <el-form ref="formRef" :rules="loginRules" :model="loginForm" label-width="auto"
              :hide-required-asterisk="true">
              <el-form-item label="手机号" prop="username">
                <el-input v-model="loginForm.username" placeholder="请输入用户名">
                  <template #prepend>
                    <el-icon><User /></el-icon>
                  </template>
                </el-input>
              </el-form-item>
              <el-form-item  prop="password" label="密码">
                <el-input v-model="loginForm.password" placeholder="请输入密码">
                  <template #prepend>
                    <el-icon><Lock /></el-icon>
                  </template>
                </el-input>
              </el-form-item>
            </el-form>
            <div class="operation-area">
              <el-button class="submit-btn" type="primary" @click="handleLogin">登录</el-button>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  </template>
  <script lang="ts" setup>
  import { ElMessage } from 'element-plus';
  import { computed, reactive, ref, watch } from 'vue';
  const loginRules = {
    username: [
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ],
    password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
  }
  const formRef = ref<HTMLFormElement>(null);
  const loginForm = reactive({
    username: '',
    password: '',
    verifyCode: ''
  });

  const handleSendVerifyCode = () => {
    formRef.value.validateField('username', (valid: boolean) => {
      if (valid) {
        ElMessage.info('您的验证码为：005114')
      }
    })
  }
  const handleLogin = () => {
    formRef.value.validate((vaild: boolean) => {
      if (vaild) {
        console.log('表单验证通过，提交接口验证信息')
        if (loginType.value === 'vetifycode' && loginForm.verifyCode !== '005114') {
          return ElMessage.error('验证码错误')
        }
        let message = '登录成功'
        if (loginForm.username) {
          message += ',登录的账号为' + loginForm.username;
        }
        if (loginForm.password) {
          message += ',登录的密码为' + loginForm.password;
        }
        if (loginForm.verifyCode) {
          message += ',登录的验证码为' + loginForm.verifyCode;
        }
        ElMessage.success(message)
      } else {
        console.log('验证失败');
      }
    })
  }
  </script>
  <style  scoped>
  .login {
    min-height: 675px;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(to right, #fbc2eb, #a6c1ee);
  }
  .container {
    width: 350px;
  }
  .content {
    color: #fff;
    width: 300px;
    background-color: #fff;
    border: 1px solid #eee;
    padding: 20px;
    box-shadow: -15px 15px 15px rgba(6, 17, 47, 0.7);
    background: linear-gradient(230deg,
        rgba(53, 57, 74, 0) 0%,
        rgb(0, 0, 0) 100%);
  }
  .username-area {
    margin-top: 50px;
  }
  :deep(.el-form-item__label) {
    color: #fff;
  }
  .qr-code-area {
    width: 200px;
    height: 200px;
    margin: 40px auto 20px auto;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .forget-area {
    float: right;
    font-size: 13px;
    line-height: 16px;
    color: #267EF0;
  }
  .submit-btn {
    margin: 50px 0 30px 0;
    width: 100%;
  }
  </style>
