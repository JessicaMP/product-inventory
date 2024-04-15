<script setup>
import { ref, watch } from 'vue'
import IconComponent from '@/components/ui/IconComponent.vue'

defineOptions({
  name: 'SelectComponent'
})

const props = defineProps({
  value: {
    type: [Number, String],
    default: null
  },
  label: {
    type: String,
    default: null
  },
  required: {
    type: Boolean,
    default: false
  },
  options: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['update', 'update:modelValue'])

const open = ref(false)
const chooseItem = ref('')

watch(
  () => props.value,
  (value) => {
    if (!value) return

    let item = props.options.find((option) => option.id === value)
    chooseItem.value = item ? item : value
  },
  { immediate: true }
)

const toggle = () => (open.value = !open.value)

const setItem = (value) => {
  chooseItem.value = value
  emit('update', value?.id || value)
  open.value = false
}
</script>

<template>
  <div class="space-y-1">
    <label v-if="label" class="block">
      <span v-if="required" class="text-red-500">*</span>
      <span class="text-sm">{{ label }}</span></label
    >
    <div class="flex w-full place-items-center">
      <div class="relative w-full">
        <button
          @click.prevent="toggle"
          :class="{
            'ring-blue-600': open
          }"
          class="flex justify-between w-full items-center rounded bg-white px-3 py-1.5 ring-1 ring-gray-300"
        >
          <span>{{ chooseItem === '' ? 'Seleccionar' : chooseItem?.label || chooseItem }}</span>
          <IconComponent name="iconamoon:arrow-down-2-duotone" />
        </button>

        <ul v-show="open" class="absolute mt-1 w-full rounded bg-gray-50 ring-1 ring-gray-300 z-10">
          <li
            v-for="(option, index) in options"
            :key="index"
            class="cursor-pointer select-none p-2 hover:bg-gray-200"
            @click="setItem(option)"
          >
            {{ option?.label || option }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
