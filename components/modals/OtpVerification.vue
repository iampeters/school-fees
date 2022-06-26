<template>
  <el-dialog
    v-model="showModal"
    :appendToBody="true"
    width="30%"
    :showClose="false"
    center
  >
    <div
      class="bg-payazablue-100/50 w-[60px] h-[60px] flex justify-center items-center rounded-full mx-auto"
    >
      <check-icon></check-icon>
    </div>
    <h3
      class="text-center text-payazablue-800 text-2xl font-semibold pt-8 pb-4"
    >
      Verification Successful
    </h3>
    <p class="text-gray-600 text-sm text-center pb-4">
      Your account has been successfully verified. We are now redirecting you to
      make payment now.
    </p>
  </el-dialog>
</template>

<script>
import CheckIcon from "../svg-icons/CheckIcon.vue"

export default {
  model: {
    prop: "visible",
    event: "updateVisibility",
  },
  components: {
    CheckIcon,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
    }
  },
  watch: {
    visible(val) {
      // this.$emit("updateVisibility", val)
      this.showModal = val
    },
    showModal(val) {
      this.$emit("updateVisibility", val)
    },
  },
  mounted() {
    this.showModal = this.visible
  },
}
</script>
