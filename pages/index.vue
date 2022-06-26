<template>
  <main class="h-screen overflow-hidden max-w-[1440px]">
    <section class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="px-[100px] sm:items-center">
        <h3 class="font-semibold text-xl pt-9">PSF</h3>
        <div class="pt-20">
          <h4 class="font-semibold text-[56px] text-gray-800">
            Quickly & Safely Pay for your
          </h4>
          <h3 class="font-bold text-[56px] text-payazablue-500">
            UK School Fees
          </h3>
        </div>
        <p class="text-gray-800 text-xl pt-8 w-full md:w-11/12">
          Payaza provides a platform to pay your school fees and reach your
          personal goals.
        </p>
        <div class="flex items-center my-8">
          <button
            class="rounded text-white bg-payazablue-500 flex justify-center items-center text-xs w-[156px] py-3 border-0 focus:outline-none"
          >
            Start Payment
            <arrow-right-icon></arrow-right-icon>
          </button>
          <button
            class="rounded flex ml-4 justify-center items-center text-xs py-[13px] text-payazablue-500 w-[156px] border border-payazablue-100"
          >
            Check Payment Status
          </button>
        </div>
        <div>
          <h3 class="text-gray-600">Current Exchange Rate</h3>
          <div class="flex items-center pt-2">
            <div class="flex items-center">
              <span class="text-payazablue-800 text-[32px] mr-2">1£</span>
              <british-icon></british-icon>
            </div>
            <span class="mx-6">
              <swap-icon></swap-icon>
            </span>
            <span class="text-payazablue-800 text-[32px] font-medium">
              {{ formatPrice(731.31) }}
            </span>
          </div>
        </div>
      </div>
      <div class="relative">
        <div class="flex items-center my-8 absolute z-50 left-1/4">
          <button
            class="rounded text-payazablue-500 bg-white flex justify-center items-center text-xs w-[156px] py-2 border-none focus:outline-none"
          >
            Check Payment Status
          </button>
          <button
            @click="goToRegister"
            class="rounded flex ml-4 justify-center bg-payazablue-500 items-center text-xs py-2 text-white w-[156px]"
          >
            Create Account
          </button>
        </div>
        <img
          src="~/assets/img/LandingHero.svg"
          alt=""
          class="w-full min-h-screen"
        />
        <div class="layer"></div>
      </div>
    </section>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapActions } from 'vuex'
import { paylaodConstants } from '~/helpers/PayloadInterface'
import ArrowRightIcon from "../components/svg-icons/ArrowRightIcon.vue"
import BritishIcon from "../components/svg-icons/BritishIcon.vue"
import SwapIcon from "../components/svg-icons/SwapIcon.vue"
import StringUtils from '~/helpers/functions'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    ArrowRightIcon,
    BritishIcon,
    SwapIcon
  },
  mounted() {
    this.onSubmit()
  },
  methods:{
  ...mapActions({
      fetchRates: 'auth/fetchRates',
    }),
    formatPrice(amount: any): string {
      return StringUtils.formatPrice(amount)
    },
    poundsFomrat(amount: number): string {
      return StringUtils.poundsFomrat(amount)
    },
    goToRegister() {
      this.$nuxt.$router.push('/register')
    },
    async onSubmit() {
      const payload = {
        service_type: 'ForeignExchange',
        service_payload: {
          ...paylaodConstants,
          request_class: 'FetchCurrencyRate'
        }
      }

      const data = {
        options: payload,
        requestClass: 'fetchcurrencyrate',
      }

      console.log('===>data:', data);
      

      await this.fetchRates(data)
    }
  }
})
</script>

<style scoped>
.layer {
  background: rgba(77, 82, 95, 0.25);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
