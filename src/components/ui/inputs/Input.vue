<script setup>
import { ref } from 'vue'

defineOptions({
  name: 'InputComponent'
})

defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: null
  }
})
const emit = defineEmits(['update:modelValue'])

const inputForm = ref(null)

const input = (e) => {
  const { value = null } = e?.target || {}
  emit('update:modelValue', value)
}
</script>

<template>
  <div class="space-y-1">
    <label v-if="label" class="block">
      <span v-if="required" class="text-red-500">*</span>
      <span class="text-sm">{{ label }}</span></label
    >
    <input
      ref="inputForm"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :required="required"
      class="border border-gray-400 text-gray-700 focus-within:border-primary-500 rounded w-full px-3 py-1.5"
      @input="input"
      @keyup="keyup"
      @blur="blur"
    />
  </div>
</template>
