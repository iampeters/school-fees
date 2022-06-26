<template>
  <div class="custom-input-wrapper" :class="{ disabled: disabled }">
    <input
      v-model="displayingValue"
      v-bind="$attrs"
      :class="[inputClass]"
      :type="type"
      :data-attribute-value="!!value"
      :maxlength="maxlength"
      :disabled="disabled"
      autoComplete="off"
      @input.prevent="$emit('input', $event.target.value)"
    />
    <label for="">{{ placeholder }}</label>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'CustomInput',
  model: {
    prop: 'value',
    event: 'input',
  },
  // eslint-disable-next-line vue/require-prop-types
  props: {
    // eslint-disable-next-line vue/require-prop-types
    value: {
      default: '',
    },
    inputClass: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    maxlength: {
      type: Number,
      default: 100,
    },
    type: {
      type: String,
      default: 'text',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      displayingValue: this.value,
    }
  },
  watch: {
    displayingValue: {
      immediate: true,
      handler() {
        this.displayingValue = this.value
      },
    },
    value() {
      this.displayingValue = this.value
    },
  },
  methods: {},
})
</script>

<style lang="scss" scoped>
.custom-input-wrapper {
  --padding-y: 6px;
  --padding-x: 16px;
  background: #ffffff;
  border: 1px solid #e6e7ec;
  box-sizing: border-box;
  border-radius: 6px;
  // height: 54px;
  position: relative;
  padding: var(--padding-y) var(--padding-x);
  overflow: hidden;

  > * {
    width: 100%;
  }

  &.disabled {
    background: #f5f7fa;
    cursor: not-allowed;

    & * {
      cursor: not-allowed !important;
    }
  }

  input {
    height: 100%;
    color: #34373f;
    font-size: inherit;
    line-height: 20px;
    width: 100%;
    padding-top: 20px;
    background: transparent;
    &:focus {
      outline: none;
    }
  }

  label {
    position: absolute;
    left: var(--padding-x);
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
    font-size: inherit;
    transition: all ease 0.3s;
    line-height: 20px;
    color: #81899e;
  }

  input:focus + label,
  input[data-attribute-value] + label {
    font-size: 12px;
    font-size: 0.8em;
    top: var(--padding-y);
    transform: translateY(0%);
    color: #81899e;
  }
}
</style>
