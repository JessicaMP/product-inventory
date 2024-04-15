<script setup>
import { computed } from 'vue'
import IconComponent from '@/components/ui/IconComponent.vue'
import ItemPage from '@/components/SideBar/ItemPage.vue'
import Button from '@/components/ui/Button.vue'

const props = defineProps({
  hover: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

// Computed
const getImage = computed(() => {
  if (props.hover) return 'https://i.ibb.co/dbC2HFM/Logo.png'
  return 'https://i.ibb.co/wQ6h7fy/Isotipo.png'
})
</script>

<template>
  <div
    class="bg-white h-full w-full sm:w-auto py-4 px-2 shadow-md flex flex-col justify-between items-center"
  >
    <div class="space-y-14 w-full">
      <div class="flex justify-between sm:justify-center">
        <a href="/">
          <img
            :src="getImage"
            alt="Isotipo OrganiClub"
            lazy="load"
            class="mx-auto"
            :class="{ 'max-w-10': !hover, 'max-w-40	sm:max-w-none	 sm:w-full': hover }"
          />
        </a>
        <Button
          color="secondary-outline"
          size="small"
          class="flex items-center sm:hidden"
          @click="emit('close')"
        >
          <IconComponent name="ic:round-close" />
        </Button>
      </div>
      <div class="space-y-2">
        <ItemPage
          name="material-symbols:dashboard-rounded"
          label="Dashboard"
          :showLabel="hover"
          routePath="/"
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
