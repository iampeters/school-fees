<template>
  <main class="max-w-[1440px]">
    <section class="w-8/12">
      <header class="border-b border-gray-100 pb-8">
        <h6 class="text-gray-700 text-2xl">
          Make <span class="text-primary-800 font-semibold">Payment</span>
        </h6>
        <p class="text-gray-500 pt-1">Fill in the details below to continue</p>
      </header>
      <section class="py-8">
        <h6 class="text-primary-800 text-lg font-semibold">
          Beneficiary Details
        </h6>
        <p class="text-gray-500 pt-1">
          Tell us about the beneficiary recieving this payment
        </p>
        <el-form ref="makePayment" :v-model="makePayment" :rules="rules">
          <div
            class="py-12 grid grid-cols-1 md:grid-cols-2 gap-6 border-b border-gray-100 pb-8"
          >
            <el-form-item prop="school">
              <CustomInput
                v-model="makePayment.school"
                placeholder="Enter School Name"
              />
            </el-form-item>
            <el-form-item prop="beneficiaryName">
              <CustomInput
                v-model="makePayment.beneficiaryName"
                placeholder="Enter Beneficiary Name"
              />
            </el-form-item>
            <el-form-item prop="accountNumber">
              <CustomInput
                v-model="makePayment.accountNumber"
                placeholder="Account Number"
              />
            </el-form-item>
            <el-form-item prop="swiftCode">
              <CustomInput
                v-model="makePayment.swiftCode"
                placeholder="Account Number"
              />
            </el-form-item>
            <el-form-item prop="address">
             <CustomInput
                v-model="makePayment.address"
                placeholder="Address"
              />
            </el-form-item>
          </div>
          <div class="pt-12 pb-8 border-b border-gray-100">
            <h6 class="text-primary-800 text-lg font-semibold">
              Payment Details
            </h6>
            <p class="text-gray-500 pt-1">
              Kindly provide your amount in pounds
            </p>
            <div class="flex items-center flex-wrap py-8">
              <div
                class="w-24 flex justify-center py-3 rounded items-center border border-gray-100"
              >
                <british-icon width="30" height="30"></british-icon>
              </div>
              <div class="w-6/12 ml-[12px] mt-4">
                <el-form-item
                  prop="amount"
                  label="Beneficiary Amount in Pounds"
                >
                  <el-tooltip placement="right-start" raw-content>
                    <template #content>
                      <div class="flex items-center">
                        <danger-icon></danger-icon>
                        <span class="ml-2">
                          You will be paying the equivalent of N2,400,000.
                          Please proceed below
                        </span>
                      </div>
                    </template>
                    <div class="relative flex items-center pounds_input">
                      <el-input v-model="makePayment.amount"></el-input>
                      <div
                        class="absolute mt-[15px] ml-4"
                        v-if="makePayment.amount.length"
                      >
                        £
                      </div>
                    </div>
                  </el-tooltip>
                </el-form-item>
              </div>
            </div>
          </div>
          <div
            class="flex justify-end flex-col pt-12 border-b border-gray-100 pb-8"
          >
            <table class="w-[370px] ml-auto">
              <tr>
                <td class="text-right text-gray-600">Sub Total</td>
                <td class="text-right text-gray-800 font-medium">
                  {{ formatPrice(2400000) }}
                </td>
              </tr>
              <tr>
                <td class="text-right text-gray-600">Transactional Fee</td>
                <td class="text-right text-gray-800 font-medium">
                  {{ formatPrice(470) }}
                </td>
              </tr>
              <tr>
                <td class="text-right text-gray-600">Operational Fee</td>
                <td class="text-right text-gray-800 font-medium">
                  {{ formatPrice(200) }}
                </td>
              </tr>
            </table>
            <div class="text-right flex flex-col pt-8">
              <span class="text-gray-600 text-sm"> Total Amount </span>
              <p class="text-gray-800 font-medium text-4xl pt-2">
                {{ formatPrice(2400670) }}
              </p>
            </div>
            <div></div>
          </div>
          <div class="flex justify-end py-8">
            <button
              @click="goBack"
              class="border border-payazagreen-100 text-payazagreen-600 py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button
              @click.prevent="showPaymentSummary = true"
              class="ml-4 border-0 bg-payazagreen-600 text-white rounded py-2 px-4"
            >
              Make Payment
            </button>
          </div>
        </el-form>
      </section>
    </section>
   <payment-summary v-model="showPaymentSummary"></payment-summary>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

import BritishIcon from "@/components/svg-icons/BritishIcon.vue"
import DangerIcon from "@/components/svg-icons/DangerIcon.vue"
import PaymentSummary from "@/components/modals/PaymentSummary.vue"
import StringUtils from '@/helpers/functions'

export default Vue.extend({
  components: {
    BritishIcon,
    DangerIcon,
    PaymentSummary
  },
  layout: "dashboard",
  data() {
    return {
      rules: {},
      showPaymentSummary: false,
      makePayment: {
        school: "",
        beneficiaryName: "",
        accountNumber: "",
        swiftCode: "",
        address: "",
        amount: "",
      },
    }
  },
  methods: {
    formatPrice(amount: any): string {
      return StringUtils.formatPrice(amount)
    },
    poundsFomrat(amount: number): string {
      return StringUtils.poundsFomrat(amount)
    },
    goBack() {
      this.$router.push({ name: "payments" })
    },
    closeModal() {
      this.showPaymentSummary = false
    },
  },
})
</script>

<style scoped>
* >>> .el-form-item__content {
  margin: 0 !important;
  display: block;
}

* >>> .el-input__inner {
  height: 55px;
  padding-top: 1rem;
  color: #475467;
}
th,
td {
  padding: 5px;
}
* >>> .el-form-item__label {
  position: absolute !important;
  top: -0.4rem;
  left: 1.03rem;
  z-index: 1;
  transform: translate(0, 16px) scale(1) !important;
  transition: all 0.1s ease-in-out !important;
  font-size: 10px !important;
  line-height: 12px !important;
  color: #98A2B3 !important;
}

* >>> .el-form-item {
  position: relative !important;
  margin-top: 4px !important;
}

* >>> .el-input__inner {
  padding-left: 1.6rem !important;
  outline: none !important;
}
.linear__button {
  background: linear-gradient(90deg, #0635c9 26.13%, #3e61f4 75.38%);
  border-radius: 4px;
}
</style>
