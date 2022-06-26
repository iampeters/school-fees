<template>
  <main class="max-w-[1440px] h-screen overflow-hidden">
    <section class="grid grid-cols-1 md:grid-cols-2">
      <div>
        <img
          src="@/assets/img/LoginImg.svg"
          alt=""
          class="w-full min-h-screen"
        />
      </div>
      <div class="bg-payazablue-100/25 flex justify-center items-center">
        <div class="w-[508px] bg-white p-12 rounded-lg box__shadow">
          <h3 class="text-center font-semibold text-payazablue-800 text-xl">
            Login to PSF
          </h3>
          <p class="text-gray-500 text-center pt-1">
            Continue to access your PSF account.
          </p>
          <div class="pt-[32px]">
            <el-form ref="login-form"
              :model="loginForm"
              :rules="rules">
              <div class="w-full relative">
                <el-form-item
                  prop="email_address"
                >
                  <CustomInput
                    v-model="loginForm.email_address"
                    placeholder="First Name"
                  />
                </el-form-item>
              </div>
              <div class="w-full relative">
                <el-form-item prop="Password">
                    <CustomInput
                      v-model="loginForm.password"
                      placeholder="Password"
                      type="password"
                    />
                </el-form-item>
              </div>
              <p class="text-right text-payazablue-500 text-sm">
                Forgot Password?
              </p>
              <button
                @click.prevent="onSubmit"
                class="w-full text-center bg-payazablue-500 text-white py-3.5 text-[13px] focus:outline-none mt-6 rounded"
              >
                Login
              </button>
              <p @click="goToRegister"
class="text-[#616E7C] text-center pt-2">
                Don’t have an account?
                <span class="text-payazablue-500 text-sm cursor-pointer"
                  >Create one</span
                >
              </p>
            </el-form>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      rules: {},
      loginForm: {
        email_address: "",
        password: "",
      },
    }
  },
  methods: {
    goToRegister() {
      this.$router.push({ path: "register" })
    },
    onSubmit() {
      this.$router.push({ path: "confirm-otp" })
    }
  },
})
</script>

<style scoped>
::v-deep(.el-form-item__content) {
  margin: 0 !important;
  display: block;
}

::v-deep(.el-input__inner) {
  height: 55px;
  padding-top: 1rem;
  color: #475467;
}
</style>
