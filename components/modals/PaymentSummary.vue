<template>
   <el-dialog
   :visible.sync="showModal"
    :appendToBody="true"
    style=""
    :showClose="false"
    center
  >
    <div>
      <h4 class="text-payazablue-800 font-medium">Payment Summary</h4>
      <p class="text-gray-500 text-sm pt-1">
        Kindly confirm that your details below are correct
      </p>
      <div class="pt-12">
        <h6 class="text-payazablue-800 font-medium pb-6">
          Beneficiary Details
        </h6>
        <div
          class="flex justify-between items-center py-[14px] border-t border-gray-100"
        >
          <span class="text-xs text-gray-500">School Name</span>
          <span class="text-xs text-gray-800">Cornell College</span>
        </div>
        <div class="flex justify-between py-[14px] border-t border-gray-100">
          <span class="text-xs text-gray-500">Beneficiary</span>
          <div class="flex flex-col gap-2">
            <span class="text-xs text-gray-800">HSBC Bank of London</span>
            <span class="text-xs text-gray-500 text-right">102931100192</span>
          </div>
        </div>
        <div
          class="flex justify-between items-center py-[14px] border-t border-gray-100"
        >
          <span class="text-xs text-gray-500">Swift Code</span>
          <span class="text-xs text-gray-800">203-120-392</span>
        </div>
        <div
          class="flex justify-between items-center py-[14px] border-t border-gray-100"
        >
          <span class="text-xs text-gray-500">Address</span>
          <span class="text-xs text-gray-800 w-[204px] text-right"
            >14, Halley Mclurkin Street, Ife’s house</span
          >
        </div>
      </div>
      <div class="pt-12">
        <h6 class="text-payazablue-800 font-medium pb-6">Payment Details</h6>
        <div class="py-[14px] border-t border-b border-gray-100">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-500">Amount</span>
            <div class="flex items-center">
              <span class="text-xs text-gray-800">{{
                formatPrice(24000000)
              }}</span>
              <span class="text-xs text-gray-500 ml-1"
                >({{ poundsFomrat(4000) }})</span
              >
            </div>
          </div>
          <div class="flex justify-between items-center pt-5">
            <span class="text-sm text-gray-500">Operational Fees</span>
            <span class="text-sm text-red-600">{{ formatPrice(470) }}</span>
          </div>
          <div class="flex justify-between items-center pt-5">
            <span class="text-sm text-gray-500">Transactional Fees</span>
            <span class="text-sm text-red-600">{{ formatPrice(200) }}</span>
          </div>
        </div>
        <div class="flex justify-between items-center py-6">
          <span class="text-sm text-gray-500">Total</span>
          <span class="text-gray-800 text-2xl">{{ formatPrice(2400670) }}</span>
        </div>
        <div class="my-[40px]">
          <button
            class="text-white w-full py-3 linear__button"
          >
            Make Payment ({{ formatPrice(2400670) }})
          </button>
          <p
            class="text-center text-payazablue-500 pt-3 cursor-pointer"
            @click="closeModal()"
          >
            No, I want to cancel
          </p>
        </div>
      </div>
    </div>
  </el-dialog>
</template>

<script lang="ts">
import Vue from 'vue'
import StringUtils from '@/helpers/functions'

export default Vue.extend({
  model: {
    prop: 'visible',
    event: 'updateVisibility',
  },
  props: {
    visible: {
      required: true,
      type: Boolean,
    },
  },
  data() {
    return {
      showModal: false
    }
  },
   watch: {
    visible(val) {
      this.showModal = val
    },
    showModal(val) {
      this.$emit('updateVisibility', val)
    },
  },
  methods: {
    closeModal() {
      this.$emit('updateVisibility', false)
    },
    formatPrice(amount: any): string {
      return StringUtils.formatPrice(amount)
    },
    poundsFomrat(amount: number): string {
      return StringUtils.poundsFomrat(amount)
    },
  }
})
</script>

<style scoped>
.linear__button {
  background: linear-gradient(90deg, #0635c9 26.13%, #3e61f4 75.38%);
  border-radius: 4px;
}

* >>> .el-dialog {
  width: 416px !important;
  max-width: 95% !important;
  border-radius: 20px !important;
  border-radius: 8px !important;
  position: relative !important;
}

</style>