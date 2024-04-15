<script setup>
import { computed } from 'vue'
import { COLORS, SIZES } from '@/assets/data/buttons.js'

defineOptions({
  name: 'ButtonComponent'
})

const props = defineProps({
  color: {
    type: String,
    default: 'primary'
  },
  size: {
    type: String,
    default: 'medium'
  },
  rounded: {
    type: String,
    default: 'rounded'
  }
})

// Computed
const classButton = computed(() => {
  return `${COLORS[props.color]} ${SIZES[props.size]} ${props.rounded}`
})
</script>

<template>
  <button :class="classButton">
    <slot />
  </button>
</template>
