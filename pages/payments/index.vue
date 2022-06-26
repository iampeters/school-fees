<template>
  <main>
    <h6 class="text-primary-800 text-2xl">All Payments</h6>
    <div class="flex justify-between gap-2 flex-wrap py-6">
      <div class="max-w-full w-80">
        <!-- Search field -->
        <el-input
          v-model="searchPhrase"
          placeholder="Look for a collection"
          prefixIcon="el-icon-search"
        >
        </el-input>
      </div>
      <!-- Filter export add -->
      <button
        @click="createPayment"
        class="text-white bg-payazablue-500 rounded px-10 h-12 text-sm flex items-center"
      >
        <plus-icon></plus-icon>
        <span class="ml-2">Make Payment</span>
      </button>
      <!-- end filter export add -->
    </div>
    <div class="py-6">
      <el-table
        :data="tableData"
        border
        style="width: 100%"
        class="allpayments-table"
      >
        <el-table-column
          prop="beneficary"
          label="Beneficiary"
        ></el-table-column>
        <el-table-column label="FX Amount">
          <template v-slot="scope">
            <div class="flex items-center">
              <british-icon></british-icon>
              <span class="ml-1.5">{{
                poundsFomrat(scope.row.fx_amount)
              }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column label="rate">
          <template v-slot="scope">
            <span>{{ formatPrice(scope.row.rate) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Amount(NGN)">
          <template v-slot="scope">
            <span>{{ formatPrice(scope.row.amount) }}</span>
          </template>
        </el-table-column>
        <el-table-column label="Status"
style="text-align: center"
width="120">
          <template v-slot="scope">
            <span
              class="capitalize inline-flex justify-center items-center rounded-2xl h-7 w-24 font-medium text-xs -ml-5"
              :class="statusClass(scope.row.status)"
              >{{ scope.row.status }}</span
            >
          </template>
        </el-table-column>
        <el-table-column
          label="Transaction ID"
          prop="transactionID"
        ></el-table-column>
        <el-table-column prop="date"
label="date"></el-table-column>
        <el-table-column fixed="right"
:width="50"
label="">
          <template v-slot="scope">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <ellipsis-icon width="24"
height="12" />
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item @click="view(scope.row)">
                    <span class="flex items-center gap-2 text-payazablue-800">
                      <eye-icon width="12"
height="13" />
                      <span class="text-xs">View Payment</span>
                    </span></el-dropdown-item
                  >
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
      <div v-show="tableData.length > 0"
class="mt-5 flex justify-end mr-2">
        <el-pagination
          :currentPage="currentPage"
          background
          :pageSizes="pageSizes"
          :pageSize="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
import Vue from 'vue'
import PlusIcon from "@/components/svg-icons/PlusIcon.vue"
import StringUtils from '@/helpers/functions'
import BritishIcon from "@/components/svg-icons/BritishIcon.vue"
import EllipsisIcon from "@/components/svg-icons/EllipsisIcon.vue"
import EyeIcon from "@/components/svg-icons/EyeIcon.vue"

export default Vue.extend({
  components: {
    PlusIcon,
    BritishIcon,
    EllipsisIcon,
    EyeIcon,
  },
  layout: 'dashboard',
  data() {
    return {
      currentPage: 1,
      searchPhrase: "",
      pageSizes: [5, 10, 20, 30, 40, 50, 60],
      pageSize: 20,
      search: "",
      tableData: [
        {
          beneficary: "Cornel College",
          fx_amount: 500,
          rate: 613,
          amount: 5000.84,
          status: "Completed",
          transactionID: "tmx_ref132342qwsd",
          date: "Thurs, June 30, 2021",
        },
        {
          beneficary: "Cornel College",
          fx_amount: 500,
          rate: 613,
          amount: 5000.84,
          status: "Completed",
          transactionID: "tmx_ref132342qwsd",
          date: "Thurs, June 30, 2021",
        },
        {
          beneficary: "Cornel College",
          fx_amount: 500,
          rate: 613,
          amount: 5000.84,
          status: "Completed",
          transactionID: "tmx_ref132342qwsd",
          date: "Thurs, June 30, 2021",
        },
        {
          beneficary: "Cornel College",
          fx_amount: 500,
          rate: 613,
          amount: 5000.84,
          status: "Completed",
          transactionID: "tmx_ref132342qwsd",
          date: "Thurs, June 30, 2021",
        },
        {
          beneficary: "Cornel College",
          fx_amount: 500,
          rate: 613,
          amount: 5000.84,
          status: "Completed",
          transactionID: "tmx_ref132342qwsd",
          date: "Thurs, June 30, 2021",
        },
        {
          beneficary: "Cornel College",
          fx_amount: 500,
          rate: 613,
          amount: 5000.84,
          status: "Completed",
          transactionID: "tmx_ref132342qwsd",
          date: "Thurs, June 30, 2021",
        },
      ],
    }
  },
  methods: {
    formatPrice(amount: any): string {
      return StringUtils.formatPrice(amount)
    },
    poundsFomrat(amount: number): string {
      return StringUtils.poundsFomrat(amount)
    },
    statusClass(statusVal: string) {
      if (!statusVal) return {}

      let rv: Array<string> = []

      switch (statusVal.toLowerCase()) {
        case "completed":
          rv = ["bg-payazagreen-100", "bg-opacity-50", "text-payazagreen-600"]
          break
        case "resubmission":
          rv = ["bg-78blue-100", "bg-opacity-40", "text-78blue-700"]
          break
        case "rejected":
          rv = ["bg-red-100", "bg-opacity-30", "text-red-500"]
          break
        case "awaiting":
          rv = ["bg-payazablue-100", "bg-opacity-50", "text-payazablue-800"]
          break
        case "pending":
          rv = ["bg-warning-100", "bg-opacity-50", "text-warning-500"]
      }

      return rv
    },
    view(id: any) {
      console.log(id)
    },
    handleRowCommand(command: any, scope:any) {
      console.log(command, scope)
    },
    handleSizeChange() {
      return false
    },
    handleCurrentChange() {
      return false
    },
    createPayment() {
      this.$nuxt.$router.push({ name: "payments-make-payments" })
    },
  },
})
</script>

<style scoped>
* >>> .el-table td.el-table__cell div {
  font-size: 12px !important;
}
</style>
