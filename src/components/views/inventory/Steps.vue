<script setup>
import IconComponent from '@/components/ui/IconComponent.vue'

defineOptions({
  name: 'Steps'
})
</script>
<template>
  <div>
    <ol
      class="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3"
    >
      <li
        class="flex items-center justify-center gap-2 p-4 bg-blue-500 bg-opacity-20 text-blue-500"
      >
        <IconComponent name="mdi:id-card-outline" />

        <p class="leading-none">
          <strong class="block font-medium"> Detalles </strong>
          <small class="mt-1"> Del producto comprado. </small>
        </p>
      </li>

      <li class="relative flex items-center justify-center gap-2 p-4">
        <span
          class="absolute -left-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50"
        >
        </span>

        <span
          class="absolute -right-2 top-1/2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-b-0 ltr:border-s-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white"
        >
        </span>

        <IconComponent name="solar:map-point-linear" />
        <p class="leading-none">
          <strong class="block font-medium"> Dirección </strong>
          <small class="mt-1"> Datos para el envio </small>
        </p>
      </li>

      <li class="flex items-center justify-center gap-2 p-4">
        <IconComponent name="tabler:credit-card" />

        <p class="leading-none">
          <strong class="block font-medium"> Pago </strong>
          <small class="mt-1"> Forma de Pago </small>
        </p>
      </li>
    </ol>
  </div>
</template>
