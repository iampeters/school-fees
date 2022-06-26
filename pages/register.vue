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
          <h3 class="font-semibold text-payazablue-800 text-xl">
            Create a PSF Account
          </h3>
          <p class="text-gray-500">Continue to access your PSF account.</p>
          <div class="pt-[32px]">
            <el-form
              ref="create-branch"
              :model="registrationForm"
              :rules="rules"
            >
              <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <el-form-item prop="first_name">
                  <CustomInput
                    v-model="registrationForm.first_name"
                    placeholder="First Name"
                  />
                </el-form-item>
                <el-form-item prop="last_name">
                   <CustomInput
                    v-model="registrationForm.last_name"
                    placeholder="Last Name"
                  />
                </el-form-item>
              </div>
              <div class="w-full">
                <el-form-item
                  id="input_icon"
                  prop="email_address"
                > 
                  <CustomInput
                    v-model="registrationForm.email_address"
                    placeholder="Email Address"
                  />
                </el-form-item>
              </div>
              <div class="w-full">
                <el-form-item
                  id="input_icon"
                  prop="phone_number"
                >
                  <CustomInput
                    v-model="registrationForm.phone_number"
                    placeholder="Phone Number"
                  />
                </el-form-item>
              </div>
              <div class="w-full">
                <el-form-item
                  id="input_icon"
                  prop="address"
                >
                  <CustomInput
                    v-model="registrationForm.address"
                    placeholder="Address"
                  />
                </el-form-item>
              </div>
              <button
                class="w-full bg-payazablue-500 text-white rounded py-3.5 text-[13px] focus:outline-none"
              >
                Create Account
              </button>
              <p class="text-center font-normal text-[#616E7C] pt-4">
                Already have an account?
                <span
                  class="text-payazablue-500 text-sm cursor-pointer"
                  @click="goToLogin"
                  >Log In</span
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
      registrationForm: {
        first_name: "",
        last_name: "",
        phone_number: "",
        email_address: "",
        address:"",
      },
    }
  },
  methods: {
    goToLogin() {
      this.$router.push({ path: "login" })
    },
  },
})
</script>

<style>

</style>