<template>
  <main
    class="max-w-[1440px] h-screen flex justify-center items-center bg-payazablue-100/25 m-auto"
  >
    <div class="w-[508px] bg-white p-12 rounded-lg box__shadow">
      <div
        class="bg-payazablue-100/50 w-[60px] h-[60px] flex justify-center items-center rounded-full mx-auto"
      >
        <document-icon></document-icon>
      </div>
      <h3
        class="text-center text-payazablue-800 text-2xl font-semibold pt-8 pb-4"
      >
        Please Enter OTP
      </h3>
      <p class="text-center text-gray-600">
        A 6 digit code has been sent to your email address Kindly enter the code
        to continue
      </p>
      <div class="pt-[50px] pb-[32px]">
        <div class="flex flex-row justify-center items-center">
          <v-otp-input
              ref="otpInput"
              inputClasses="otp-input"
              separator=""
              :numInputs="6"
              :shouldAutoFocus="true"
              :isInputNum="true"
              @on-change="handleOnChange"
              @on-complete="handleOnComplete"
            />
        </div>
      </div>
      <button
        @click.prevent="onSubmit"
        class="w-full text-center bg-payazablue-500 text-white py-3.5 text-[13px] focus:outline-none mt-6 rounded"
      >
        Confirm
      </button>
      <p class="text-[#616E7C] text-center pt-2">
        Didn’t get the code?
        <span class="text-payazablue-500 text-sm cursor-pointer"
          >Resend Code</span
        >
      </p>
    </div>
    <otp-verification-modal
      v-model="isOtpModalVisible"
    ></otp-verification-modal>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import OtpVerificationModal from "~/components/modals/OtpVerification.vue"
import DocumentIcon from "../components/svg-icons/EnvelopeIcon.vue"

export default Vue.extend({
  components: {
    DocumentIcon,
    OtpVerificationModal,
  },
  data() {
    return {
      isOtpModalVisible: false,
    }
  },
  methods: {
    handleOnChange() {},
    handleOnComplete() {},
    onSubmit() {
      this.isOtpModalVisible = true
      setTimeout(() => (
        this.isOtpModalVisible = false
      ), 2000)
      this.$router.push({ path: "dashboard" })
    },
  },
})
</script>

<style scoped>
* >>> input.otp-input {
  width: 44px;
  height: 56px;
  padding: 5px;
  margin: 0 10px;
  font-size: 20px;
  border-radius: 4px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
}
</style>
