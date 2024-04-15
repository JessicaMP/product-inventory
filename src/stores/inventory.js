import { defineStore } from 'pinia'
import { PRODUCTS } from '@/assets/data/products.js'

export const useInventoryStore = defineStore('inventory', {
  state: () => ({ products: [...PRODUCTS] }),
  getters: {},
  actions: {
    addProduct(product) {
      this.products.push(product)
    },
    removeProduct(index) {
      this.products.splice(index, 1)
    },
    updateProduct({ product, position }) {
      this.products[position] = product
    }
  }
})
