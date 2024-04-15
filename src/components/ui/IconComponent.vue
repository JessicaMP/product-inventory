<script setup>
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'IconComponent'
})

defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 24
  }
})
</script>

<template>
  <Icon :icon="name" :height="size" />
</template>
