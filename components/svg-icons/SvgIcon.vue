<template>
  <component :is="icon" />
</template>

<script>
export default {
  name: "SvgIcon",
  props: {
    value: {
      type: String,
      default: "",
    },
  },
  computed: {
    icon() {
      const v = this.value
      if (v) {
        console.log("v", v)
        return () => import(`./${v}.vue`)
      } else {
        return ""
      }
    },
  },
}
</script>
