<script setup>
import { ref, computed } from 'vue'
import Input from '@/components/ui/inputs/Input.vue'
import Button from '@/components/ui/Button.vue'
import IconComponent from '@/components/ui/IconComponent.vue'
import Steps from '@/components/views/inventory/Steps.vue'
import { COLORS, SIZES } from '@/assets/data/inventoryData.js'

defineOptions({
  name: 'ModalSell'
})

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
const emit = defineEmits(['close', 'save'])

const quantity = ref(1)
const quantityComponent = ref(null)

const getColor = computed(() => {
  return (colorId) => {
    if (!colorId) return '--'
    const { label } = findById(colorId, COLORS)
    return label
  }
})

const getSize = computed(() => {
  return (sizeId) => {
    if (!sizeId) return '--'
    const { label } = findById(sizeId, SIZES)
    return label
  }
})

const findById = (id, list) => {
  return list.find((item) => item.id === id)
}

const changeValue = (value) => {
  const newValue = Number(value)
  const maxValue = Number(props.product.quantity)

  const component = quantityComponent.value?.lastChild

  const input = component.lastChild

  if (newValue < 1) {
    quantity.value = 1
    input.value = 1
    return
  }

  if (newValue > maxValue) {
    quantity.value = maxValue
    input.value = maxValue
  }
}

const blur = (value) => {
  changeValue(value)
}

const buyProduct = () => {
  emit('save', quantity.value)
}
</script>

<template>
  <div class="bg-white p-4 rounded space-y-10">
    <header class="space-y-5">
      <div class="flex justify-end">
        <Button color="secondary-outline" size="small" @click="emit('close')">
          <IconComponent name="ic:round-close" />
        </Button>
      </div>

      <div class="mx-10">
        <Steps />
      </div>
    </header>
    <h2 class="font-bold text-2xl">Proceso de compra</h2>

    <form class="space-y-4" @submit.prevent="buyProduct">
      <div class="space-y-4 border-b pb-5">
        <div class="flex items-center gap-2 sm:w-9/12">
          <IconComponent name="devicon-plain:karatelabs" :size="35" />
          <h3 class="flex-1 w-full">{{ product.name }}</h3>
        </div>
        <div class="flex items-center gap-2" ref="quantityComponent">
          <label class="text-sm">Cantidad</label>
          <Input v-model="quantity" type="Number" required @input="changeValue" @blur="blur" />
        </div>
      </div>

      <div class="space-y-4">
        <p class="font-semibold">Detalles del producto</p>
        <div class="flex gap-4">
          <div class="min-w-24">
            <h4 class="font-medium text-sm">Color</h4>
            <p>{{ getColor(product.color) }}</p>
          </div>

          <div class="min-w-24">
            <h4 class="font-medium text-sm">Tamaño</h4>
            <p>{{ getSize(product.size) }}</p>
          </div>
        </div>
      </div>
      <div class="pt-2 flex justify-end">
        <Button type="submit" class="font-bold"> Comprar </Button>
      </div>
    </form>
  </div>
</template>
