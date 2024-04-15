<script setup>
import IconComponent from '@/components/ui/IconComponent.vue'

defineOptions({
  name: 'ItemPage'
})

defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    default: 24
  },
  label: {
    type: String,
    required: true
  },
  showLabel: {
    type: Boolean,
    default: false
  },
  routePath: {
    type: String,
    default: ''
  }
})
</script>

<template>
  <a
    :href="routePath"
    class="group hover:bg-[#6B99C3] hover:bg-opacity-20 py-2 px-4 rounded flex items-center gap-1 text-sm text-[#16354D]"
  >
    <IconComponent :name="name" :size="size" />
    <p v-if="showLabel">{{ label }}</p>
  </a>
</template>
