<script setup>
import { ref, watch } from 'vue'
import Button from '@/components/ui/Button.vue'
import IconComponent from '@/components/ui/IconComponent.vue'
import Input from '@/components/ui/inputs/Input.vue'
import Select from '@/components/ui/Select.vue'
import { COLORS, SIZES } from '@/assets/data/inventoryData.js'

defineOptions({
  name: 'ModalInventory'
})

const props = defineProps({
  formValue: {
    type: Object,
    default: () => {}
  },
  type: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['close', 'save'])

const initial_form = {
  name: '',
  price: null,
  size: null,
  color: null,
  quantity: null
}

const form = ref({ ...initial_form })

watch(
  () => props.formValue,
  (formValue) => {
    if (!formValue.price) return
    form.value = { ...formValue }
  },
  { immediate: true }
)

const selectItem = (value, property) => {
  if (!property) return
  form.value[property] = value
}

const addProduct = () => {
  emit('save', { form: form.value, type: props.type })
}

const formatPrice = () => {
  form.value.price = new Intl.NumberFormat('nl-NL').format(form.value.price)
}
</script>

<template>
  <div class="bg-white p-4 rounded space-y-4">
    <div class="flex justify-end">
      <Button color="secondary-outline" size="small" @click="emit('close')">
        <IconComponent name="ic:round-close" />
      </Button>
    </div>
    <h2 class="font-bold text-2xl">Nuevo Producto</h2>
    <form class="space-y-4" @submit.prevent="addProduct">
      <Input v-model="form.name" label="Nombre" required />
      <Select
        :value="form.color"
        label="Color"
        :options="COLORS"
        @update="(value) => selectItem(value, 'color')"
      />
      <Select
        :value="form.size"
        label="Tamaño"
        :options="SIZES"
        @update="(value) => selectItem(value, 'size')"
      />
      <Input v-model="form.quantity" label="Cantidad" type="Number" required />
      <Input
        v-model="form.price"
        label="Precio"
        type="Number"
        required
        @keyup="formatPrice"
        @blur="formatPrice"
      />
      <div class="pt-2">
        <Button type="submit" class="w-full font-bold"> Guardar </Button>
      </div>
    </form>
  </div>
</template>
