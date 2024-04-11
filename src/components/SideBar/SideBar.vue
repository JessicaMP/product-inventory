<script setup>
import { ref, computed } from 'vue'

import ItemPage from '@/components/SideBar/ItemPage.vue'

const hover = ref(false)

// Computed
const getImage = computed(() => {
  if (hover.value) return 'https://i.ibb.co/dbC2HFM/Logo.png'
  return 'https://i.ibb.co/wQ6h7fy/Isotipo.png'
})
</script>

<template>
  <div
    class="bg-white h-full w-16 hover:w-44 py-4 shadow-md flex flex-col justify-between items-center px-2"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <div class="space-y-14">
      <a href="/">
        <img
          :src="getImage"
          alt="Isotipo OrganiClub"
          lazy="load"
          class="mx-auto"
          :class="{ 'max-w-10': !hover, 'w-full': hover }"
        />
      </a>
      <div class="space-y-2">
        <ItemPage
          name="material-symbols:dashboard-rounded"
          label="Dashboard"
          :showLabel="hover"
          routePath="/dashboard"
        />
        <ItemPage name="ph:users-three-fill" label="Users" :showLabel="hover" routePath="users" />
        <ItemPage
          name="ic:round-inventory"
          label="Inventory"
          :showLabel="hover"
          routePath="/inventory"
        />
        <ItemPage
          name="healthicons:money-bag"
          label="Sales"
          :showLabel="hover"
          routePath="/sales"
        />
      </div>
    </div>
    <div class="space-y-2" :class="{ 'w-full': hover }">
      <ItemPage
        name="teenyicons:user-circle-solid"
        label="Profile"
        :showLabel="hover"
        :size="24"
        routePath="/profile"
      />
      <ItemPage name="tabler:logout-2" label="Logout" :showLabel="hover" :size="24" />
    </div>
  </div>
</template>
