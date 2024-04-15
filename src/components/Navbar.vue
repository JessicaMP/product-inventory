<script setup>
import { ref } from 'vue'
import IconComponent from '@/components/ui/IconComponent.vue'
import SideBar from '@/components/SideBar/SideBar.vue'
import Button from '@/components/ui/Button.vue'

const isOpenMenu = ref(false)

defineOptions({
  name: 'NavbarComponet'
})
</script>

<template>
  <div
    class="top-0 left-0 z-1000 w-full sticky"
    :class="{ 'h-full overflow-none scroll-none': isOpenMenu }"
  >
    <div class="bg-white shadow-md py-4 px-2 flex justify-between">
      <img
        src="https://i.ibb.co/dbC2HFM/Logo.png"
        alt="Isotipo OrganiClub"
        lazy="load"
        class="w-40"
      />

      <Button color="secondary-outline" size="small" @click="isOpenMenu = !isOpenMenu">
        <IconComponent name="uil:bars" />
      </Button>
    </div>
    <SideBar
      v-if="isOpenMenu"
      class="mt-2"
      :class="{ 'absolute top-0 h-screen': isOpenMenu }"
      :hover="true"
      @close="isOpenMenu = false"
    />
  </div>
</template>
