<script setup>
import { ref, watch } from 'vue'

defineOptions({
  name: 'ModalComponent'
})

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  width: {
    type: Number,
    default: 500
  },
  closeOuth: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['closeModal'])

const modal = ref('')

watch(
  () => props.show,
  (show) => {
    const body = document.body

    if (show) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'visible'
    }
  }
)

const close = () => {
  const body = document.body
  body.style.overflow = 'visible'
  emit('closeModal', false)
}

const closeModal = (e) => {
  if (props.closeOuth) {
    if (e.target === modal?.value) {
      close()
    }
  }
}
</script>

<template>
  <div
    v-if="show"
    ref="modal"
    class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-1000 flex items-center justify-center overflow-y-auto"
    @click="closeModal($event)"
  >
    <div class="relative z-10 w-full my-auto" :style="{ maxWidth: width + 'px' }">
      <slot />
    </div>
  </div>
</template>
