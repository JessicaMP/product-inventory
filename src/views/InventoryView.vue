<script setup>
import { ref } from 'vue'
import Button from '@/components/ui/Button.vue'
import IconComponent from '@/components/ui/IconComponent.vue'
import Modal from '@/components/ui/Modal.vue'
import ModalInventory from '@/components/views/inventory/ModalInventory.vue'
import TableInventory from '@/components/views/inventory/TableInventory.vue'
import { useInventoryStore } from '@/stores/inventory.js'

const storeInventory = useInventoryStore()

const openModal = ref(false)
const formValue = ref({})
const typeModal = ref('')
const position = ref(null)

const closeModal = () => {
  openModal.value = false
  formValue.value = {}
  typeModal.value = ''
}

const addProduct = ({ form, type }) => {
  if (type === 'edit') {
    storeInventory.updateProduct({ product: form, position: position.value })
    openModal.value = false
    return
  }
  storeInventory.addProduct(form)
  openModal.value = false
}

const removeProduct = (index) => {
  storeInventory.removeProduct(index)
}

const updateProduct = (index) => {
  position.value = index
  formValue.value = storeInventory.products[index]
  typeModal.value = 'edit'
  openModal.value = true
}
</script>
<template>
  <div>
    <h1 class="font-bold text-3xl py-4">Inventario</h1>

    <div class="space-y-5">
      <div class="flex justify-end">
        <Button class="font-bold flex gap-1" @click="openModal = true">
          <IconComponent name="ic:round-plus" />
          <span>Producto</span>
        </Button>
      </div>

      <TableInventory
        :data="storeInventory.products"
        @remove="removeProduct"
        @update="updateProduct"
      />
    </div>

    <Modal :width="400" :show="openModal" @close-modal="closeModal">
      <ModalInventory
        :formValue="formValue"
        :type="typeModal"
        @close="closeModal"
        @save="addProduct"
      />
    </Modal>
  </div>
</template>
