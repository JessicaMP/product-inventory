<script setup>
import { computed } from 'vue'
import IconComponent from '@/components/ui/IconComponent.vue'
import Button from '@/components/ui/Button.vue'
import { COLORS, SIZES } from '@/assets/data/inventoryData.js'

defineOptions({
  name: 'TableInventory'
})

defineProps({
  data: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['remove', 'update', 'sell'])

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

const getPrice = computed(() => {
  let USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  })

  return (price) => {
    if (!price) return '--'
    return USDollar.format(price)
  }
})

const findById = (id, list) => {
  return list.find((item) => item.id === id)
}
</script>
<template>
  <div class="overflow-hidden rounded-lg border border-gray-200 shadow-md">
    <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
      <thead class="bg-gray-50">
        <tr>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900 max-w-sm">Nombre</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Estado</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Cantidad</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Color</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Tamaño</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900">Precio</th>
          <th scope="col" class="px-6 py-4 font-medium text-gray-900"></th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-100 border-t border-gray-100">
        <template v-if="data.length > 0">
          <tr class="hover:bg-gray-50" v-for="(item, index) in data" :key="index">
            <th class="flex items-center gap-3 px-6 py-4 font-normal text-gray-900 max-w-sm">
              <div class="relative h-10 w-10">
                <IconComponent name="devicon-plain:karatelabs" class="h-full w-full" />
                <span
                  :class="item?.quantity === '0' ? 'bg-red-600' : 'bg-green-600'"
                  class="absolute right-0 bottom-0 h-2 w-2 rounded-full ring ring-white"
                ></span>
              </div>
              <div class="font-medium text-gray-700 text-sm flex-1 w-full">{{ item.name }}</div>
            </th>
            <td class="px-6 py-4">
              <span
                class="inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold"
                :class="
                  item?.quantity === '0' ? 'text-red-600 bg-red-50' : 'text-green-600 bg-green-50'
                "
              >
                <span
                  class="h-1.5 w-1.5 rounded-full"
                  :class="item?.quantity === '0' ? 'bg-red-600' : 'bg-green-600'"
                ></span>
                {{ item?.quantity === '0' ? 'No disponible' : 'Disponible' }}
              </span>
            </td>
            <td class="px-6 py-4">{{ item.quantity }}</td>
            <td class="px-6 py-4">{{ getColor(item.color) }}</td>
            <td class="px-6 py-4">{{ getSize(item.size) }}</td>
            <td class="px-6 py-4">{{ getPrice(item.price) }}</td>
            <td class="px-6 py-4">
              <div class="flex justify-end gap-4">
                <Button
                  color="secondary-outline"
                  size="small"
                  border="border-none"
                  @click="emit('remove', index)"
                >
                  <IconComponent name="tabler:trash" />
                </Button>
                <Button
                  color="secondary-outline"
                  size="small"
                  border="border-none"
                  @click="emit('update', index)"
                >
                  <IconComponent name="fluent-mdl2:edit" />
                </Button>
                <Button
                  color="primary-outline"
                  size="small"
                  border="border-none"
                  @click="emit('sell', index)"
                >
                  <IconComponent name="ep:sell" />
                </Button>
              </div>
            </td>
          </tr>
        </template>
        <tr class="hover:bg-gray-50" v-else>
          <td colspan="7" class="font-bold text-center px-6 py-4">
            No hay Productos en el inventario
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
